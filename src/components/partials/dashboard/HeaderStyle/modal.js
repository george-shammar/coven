import {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import { NFTStorage, File } from 'nft.storage'
import { ethers } from "ethers";
import LensHubAddress from "../../../../contracts/contract-address.json";
import LensHubArtifact from "../../../../contracts/LensHub.json";
const NFT_STORAGE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMyNTlEMWEzNTNEMzgyNjQ4MDVmNkY4Y2NjMTY0RThFODQzM0I0MDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDM2MjM4MzEyMiwibmFtZSI6ImNvdmVuIn0.zGwkPzBzjxHdTf8IeOZrHH1U3_xB6UanjXXLPkdCduU"

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;


export default function Mode({walletAd}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({handle:""});
  const [status, setStatus] = useState("");

  // const {handle} = formInput;
  let styles = {
    margin: '20px',
    width: '250px',
    height: '150px',
  };

  async function onFileChange(e) {
    // if (!handle) return
    const image = e.target.files[0];

    // // const client = new NFTStorage({ token: NFT_STORAGE_KEY });
    // // const metadata = await client.store({
    // //   name: handle,
    // //   description: "covven profile",
    // //   image
    // // });

    //   // const metadataURI = metadata.url
    //   // const profileImage = metadataURI.image

    const profileImage = "https://ipfs.io/ipfs/bafybeiawysqru7veenzbdyernf3aequkh2ffdc6gajwwzbpffs5nimmb5q/feed.png";
    setFileUrl(profileImage);
    //   // const newUrl = `https://ipfs.io/ipfs/${profileImage.replace("ipfs//:","")}`;
}


  async function createProfile() {
    const {handle} = formInput;
    if (!handle) return
    
      setStatus("creating profile... if successful close this window")
      // const newUrl = `https://ipfs.io/ipfs/${profileImage.replace("ipfs//:","")}`;


      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);
    
      try {
        const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
        const inputStruct = {
          to: walletAd,
          handle: handle,
          imageURI: fileUrl,
          followModule: ZERO_ADDRESS,
          followModuleInitData: [],
          followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
        };
        console.log(inputStruct)
        const transaction = await contract.createProfile(inputStruct);
        const receipt = await transaction.wait();
          if (receipt.status === 0) {
              throw new Error("Transaction failed");
          } else {
            setStatus("Successful!")
            handleClose();
          }

      } catch (error) {
        if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
          setStatus("Transaction cancelled")
        }
        setStatus("Successful!")
      } finally {
  
      }
    };
   



  return (
    <>
      <Button className="d-flex align-items-center mt-lg-3" variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal className="mt-5 pt-5" show={show} onHide={handleClose} size="lg">
        <div className="mt-5 pt-5">
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label>Connected Wallet Address: {walletAd}</label>
              {/* <input className="form-control form-control-sm" type="text" placeholder="wallet address"/> */}
            </div>
            <div className="pt-3">
              <label>Profile Handle *</label>
              <input  onChange={e => updateFormInput({...formInput, handle: e.target.value})}
                className="form-control form-control-sm" 
                type="text" 
                placeholder="profile handle"/>
            </div>
            
            <label>Profile Image *</label>
            <input className="pt-3" type="file" onChange={onFileChange}/>
              <div>
                        {
                            fileUrl && (
                                <img style={styles} src={fileUrl} alt=""/>
                            )
                        }
              </div>
          </div>
          <>{status}</>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createProfile}>
            Mint Profile NFT!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}