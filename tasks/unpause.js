const hre = require("hardhat");
// const { ethers } = require("ethers");
const ethers = hre.ethers;
// import LensHubArtifact from "../src/contracts/LensHub.json";
// import LensHubAddress from "../src/contracts/contract-address.json";

const { LensHubArtifact } = require("../src/contracts/LensHub.json");
const { LensHubAddress } = require("../src/contracts/contract-address.json");

async function main() {
  // const [governance] = await initEnv(hre);
  // const addrs = getAddrs();
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  const accounts = await ethers.getSigners();
  
  const signer = accounts[1]
  const lensHub = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);
  // const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);
  console.log(await lensHub.getState());
  // await waitForTx(lensHub.setState(ProtocolState.Unpaused));
  // console.log(await lensHub.getState());
  };
// });

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});