const hre = require("hardhat");
const { hexlify, keccak256, RLP } = require('ethers/lib/utils');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Nonce management in case of deployment issues
  let deployerNonce = await ethers.provider.getTransactionCount(deployer.address);

  // Here, we pre-compute the nonces and addresses used to deploy the contracts.
  // const nonce = await deployer.getTransactionCount();
  const followNFTNonce = hexlify(deployerNonce + 1);
  const collectNFTNonce = hexlify(deployerNonce + 2);
  const hubProxyNonce = hexlify(deployerNonce + 3);


  const followNFTImplAddress =
    '0x' + keccak256(RLP.encode([deployer.address, followNFTNonce])).substr(26);
  const collectNFTImplAddress =
    '0x' + keccak256(RLP.encode([deployer.address, collectNFTNonce])).substr(26);
  const hubProxyAddress =
    '0x' + keccak256(RLP.encode([deployer.address, hubProxyNonce])).substr(26);

  // ===================================== **** LensHub *** =================================================================

  console.log('\n\t-- Deploying Logic Libs --');

  const PublishingLogic = await ethers.getContractFactory("PublishingLogic");
  const publishinglogic = await PublishingLogic.deploy();
  console.log("PublishingLogic address:", publishinglogic.address);

  const InteractionLogic = await ethers.getContractFactory("InteractionLogic");
  const interactionlogic = await InteractionLogic.deploy();
  console.log("InteractionLogic address:", interactionlogic.address);

  const ProfileTokenURILogic = await ethers.getContractFactory("ProfileTokenURILogic");
  const profileTokenURILogic = await ProfileTokenURILogic.deploy();
  console.log("ProfileTokenURILogic address:", profileTokenURILogic.address);


  // ===================================== **** LensHub *** =================================================================

  console.log('\n\t-- Deploying Hub Implementation --');

  const LensHub = await ethers.getContractFactory("LensHub", {
    libraries: {
      'contracts/libraries/PublishingLogic.sol:PublishingLogic': publishinglogic.address,
      'contracts/libraries/InteractionLogic.sol:InteractionLogic': interactionlogic.address,
      'contracts/libraries/ProfileTokenURILogic.sol:ProfileTokenURILogic': profileTokenURILogic.address,
    },
  });
  
  const lenshub = await LensHub.deploy(followNFTImplAddress, collectNFTImplAddress);

  console.log("LensHub address:", lenshub.address);


  // ================================== *** Collect and Follow deployment *** ================================================

  console.log('\n\t-- Deploying Follow & Collect NFT Implementations --');

  const FollowNFT = await ethers.getContractFactory("FollowNFT");
  const follownft = await FollowNFT.deploy(hubProxyAddress);
  console.log("FollowNFT address:", follownft.address);

  const CollectNFT = await ethers.getContractFactory("CollectNFT");
  const collectnft = await CollectNFT.deploy(hubProxyAddress);
  console.log("CollectNFT address:", collectnft.address);


  //  To save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(follownft, collectnft, lenshub);
}

function saveFrontendFiles(lenshub) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ FollowNFT: follownft.address,
                     CollectNFT: collectnft.address,
                     LensHub: lenshub.address}, undefined, 2)
  );

  const FollowNFTArtifact = artifacts.readArtifactSync("FollowNFT");
  const CollectNFTArtifact = artifacts.readArtifactSync("CollectNFT");
  const LensHubArtifact = artifacts.readArtifactSync("LensHub");

  // fs.writeFileSync(
  //   contractsDir + "/FollowNFT.json",
  //   JSON.stringify(FollowNFTArtifact, null, 2)
  // );
  // fs.writeFileSync(
  //   contractsDir + "/CollectNFT.json",
  //   JSON.stringify(CollectNFTArtifact, null, 2)
  // );
  fs.writeFileSync(
    contractsDir + "/LensHub.json",
    JSON.stringify(LensHubArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });