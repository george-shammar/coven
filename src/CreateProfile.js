import { useEffect, useState } from "react";
import { ethers } from "ethers";
import LensHubAddress from "./contracts/contract-address.json";
import LensHubArtifact from "./contracts/LensHub.json";
import { connectWallet, getCurrentWalletConnected } from "./utils/wallet";

import './App.css';

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const CreateProfile = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

    useEffect(() => {
      (async() => {
        const {address} = await getCurrentWalletConnected();
        setWallet(address)
    
        addWalletListener();
      }) ()
    }, []);

    // connect wallet 
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
    };

    // wallet listener to update UI when wallet's state changes, 
    // such as when the user disconnects or switches accounts.
    function addWalletListener() {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
            setWallet(accounts[0]);
          
            } else {
            setWallet("");
            }
        });
        } 
    }


async function createProfile() {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);
  
    try {
      const {userAddress} = await getCurrentWalletConnected();
      // const transaction = await contract.whitelistProfileCreator(signer.address, true);
      console.log(userAddress);
      
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

  return (
    <div>
      <p className="profile">Connect</p>
      <p onClick={createProfile}>Sign Up</p>
    </div>
  )
}
// });

export default CreateProfile;