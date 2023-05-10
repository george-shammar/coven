import { useEffect, useState } from "react";
import { ethers } from "ethers";
import LensHubAddress from "./contracts/contract-address.json";
import LensHubArtifact from "./contracts/LensHub.json";
import { connectWallet, getCurrentWalletConnected } from "./utils/wallet";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const CreateProfile = () => {
  const [walletAddress, setWallet] = useState("");

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
          const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
          const inputStruct = {
            to: walletAddress,
            handle: 'shammar',
            imageURI: 'https://ipfs.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX',
            followModule: ZERO_ADDRESS,
            followModuleInitData: [],
            followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
          };
          
          const transaction = await contract.createProfile(inputStruct);
          const receipt = await transaction.wait();
            if (receipt.status === 0) {
                throw new Error("Transaction failed");
            } else {
            console.log(receipt.status)
            }
        } catch (error) {
          if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
            return;
          }
          console.error(error);
        } finally {
    
        }
      };




  return (
    <div>
      {walletAddress.length > 0 ? (
            <div>   
              {String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
            </div>
            ) : (
          <div className="profile" onClick={connectWalletPressed}>Connect</div>
            )}
      <p onClick={createProfile}>Sign Up</p>
    </div>
  )
}

export default CreateProfile;