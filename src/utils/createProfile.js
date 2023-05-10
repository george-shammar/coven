import { ethers } from "ethers";
import LensHubAddress from "../contracts/contract-address.json";
import LensHubArtifact from "../contracts/LensHub.json";

async function createProfile() {
  console.log("working");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);

  try {
    
  } catch (error) {
    if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
      return;
    }
    console.error(error);
  } finally {

  }
  
  // // const [governance, user] = await initEnv(hre);
  // // // 
  // const addrs = getAddrs();
  // const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], signer);
  // console.log(lensHub);
  // await waitForTx(lensHub.whitelistProfileCreator(user.address, true));

  // const inputStruct: CreateProfileDataStruct = {
  //   to: user.address,
  //   handle: 'zer0dot',
  //   imageURI: 'https://ipfs.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX',
  //   followModule: ZERO_ADDRESS,
  //   followModuleInitData: [],
  //   followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
  // };

  // await waitForTx(lensHub.connect(user).createProfile(inputStruct));

  // console.log(`Total supply (should be 1): ${await lensHub.totalSupply()}`);
  // console.log(
  //   `Profile owner: ${await lensHub.ownerOf(1)}, user address (should be the same): ${user.address}`
  // );
  // console.log(`Profile ID by handle: ${await lensHub.getProfileIdByHandle('zer0dot')}`);
};
// });

export default createProfile;