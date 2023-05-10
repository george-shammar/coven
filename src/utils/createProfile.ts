import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { LensHub__factory } from '../typechain-types';
import { CreateProfileDataStruct } from '../typechain-types/LensHub';
//import { waitForTx, initEnv, getAddrs, ZERO_ADDRESS } from '../helpers/utils';
const { fs } = require('fs');

// task('create-profile', 'creates a profile').setAction(async ({}, hre) => {
async function initEnv(hre: HardhatRuntimeEnvironment): Promise<SignerWithAddress[]> {
    const ethers = hre.ethers; // This allows us to access the hre (Hardhat runtime environment)'s injected ethers instance easily
  
    const accounts = await ethers.getSigners(); // This returns an array of the default signers connected to the hre's ethers instance
    const governance = accounts[1];
    const treasury = accounts[2];
    const user = accounts[3];
  
    return [governance, treasury, user];
}

export function getAddrs(): any {
  const json = fs.readFileSync('addresses.json', 'utf8');
  const addrs = JSON.parse(json);
  return addrs;
}

async function createProfile() {
  
  const [governance, user] = await initEnv(hre);
  // console.log(governance.address);
  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);

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