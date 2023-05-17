import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import { ethers } from "ethers";
import LensHubAddress from "../../../../contracts/contract-address.json";
import LensHubArtifact from "../../../../contracts/LensHub.json";
import axios from 'axios';
const FormData = require('form-data');
const {fs} = require("fs");
// import FormData from "form-data";
const JWT = `Bearer ${process.env.REACT_APP_PINATA_JWT}`

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function Mode({walletAd}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formInput, updateFormInput] = useState({handle:""});

  async function onFileChange(e) {
    const file = e.target.files[0];
    
    const formData = new FormData();
    formData.append('file', file)

    formData.append("myFile", file);
    console.log("start pinata")
    
    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
      console.log("success!")
    } catch (error) {
      console.log(error);
      console.log("try again")
    }
    
}

  async function onFileUpload(e) {
    const file = e.target.files[0];

    // const pinataApiKey = process.env.REACT_APP_PINATA_API_KEY
    // const pinataSecretApiKey = process.env.REACT_APP_PINATA_API_SECRET
    // const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  
    // // Create an object of formData
    // const formData = new FormData();
   
    // // Update the formData object
    // formData.append(
    //   "myFile",
    //   file
    // );
    // console.log("start pinata")
    // try {
    //   const response = await axios.post(url,
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': `multipart/form-data; boundary= ${formData._boundary}`,
    //         'pinata_api_key': pinataApiKey,
    //         'pinata_secret_api_key': pinataSecretApiKey
    //       }
    //     });
    //   console.log("is response possible?");
    //   console.log(response);
    //   console.log("yes it is?");
    // } catch (error) {
    //   console.log("error it is");
    //   console.log(error);
    // }
        
    // Details of the uploaded file
   // axios.post("api/uploadfile", formData);
   
  };

  // function onFileUpload() {
  //   // Create an object of formData
  //   // const formData = new FormData();
   
  //   // Update the formData object
  //   // formData.append(
  //   //   "myFile",
  //   //   fileUrl,
  //   //   fileUrl.name
  //   // );
   
  //   // Details of the uploaded file
   
  //   // Request made to the backend api
  //   // Send formData object
  //   // axios.post("api/uploadfile", formData);
  // };

  async function createProfile() {
    // const {handle} = formInput;
    // if (!handle) return
    // if (!fileUrl) {
    //   fileUrl = 'https://ipfs.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX'
    // }

  //    const pinataApiKey = process.env.REACT_APP_PINATA_API_KEY
  //    const pinataSecretApiKey = process.env.REACT_APP_PINATA_API_SECRET
  //    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  // // //we gather a local file from the API for this example, but you can gather the file from anywhere
  //    let data = new FormData();
     
  //    data.append('file', fs.createReadStream("../../../../assets/images/user/1.jpg"));
  //    return axios.post(url,
  //         data,
  //             {
  //               headers: {
  //                 'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
  //                 'pinata_api_key': pinataApiKey,
  //                 'pinata_secret_api_key': pinataSecretApiKey
  //            }
  //          }
     
  //     ).then(function (response) {
  //         console.log(response);
  //     }).catch(function (error) {
  //          console.log(error);
  //      });
    

    // const data = JSON.stringify({
    //   handle, image: fileUrl
    // })

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);

    //   try {
    //     const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
    //     const inputStruct = {
    //       to: walletAd,
    //       handle: handle,
    //       imageURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
    //       followModule: ZERO_ADDRESS,
    //       followModuleInitData: [],
    //       followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
    //     };

    //     const transaction = await contract.createProfile(inputStruct);
    //     const receipt = await transaction.wait();
    //       if (receipt.status === 0) {
    //           throw new Error("Transaction failed");
    //       } else {
    //       console.log(receipt.status)
    //       }

    //   } catch (error) {
    //     if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
    //       return;
    //     }
    //     console.error(error);
    //   } finally {
  
    //   }
      handleClose();
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
          <p>
            A new way to register... Every profile is an NFT!
          </p>
          <div>
            <div>
              <label>Wallet Address *</label>
              <input className="form-control form-control-sm" type="text" placeholder="wallet address"/>
            </div>
            <div className="pt-3">
              <label>Profile Handle *</label>
              <input className="form-control form-control-sm" type="text" placeholder="profile handle"/>
            </div>
            
            
            <input className="pt-3" type="file" onChange={onFileChange}/>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onFileUpload}>
            Mint Profile NFT!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}