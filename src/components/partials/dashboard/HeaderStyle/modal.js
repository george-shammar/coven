import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

export default function Mode() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fileUrl, setFileUrl] = useState(null);

  function onFileChange(e) {
    // Update the state
    const file = e.target.files[0];
    console.log(file);
   // const url = `https://ipfs.infura.io/ipfs/${file}`
    // Create an object of formData
    // const formData = new FormData();
   
    // Update the formData object
    // formData.append(
    //   "myFile",
    //   fileUrl
    //   // fileUrl.name
    // );
   
    // Details of the uploaded file
    
  };

  function onFileUpload() {
    // Create an object of formData
    const formData = new FormData();
   
    // Update the formData object
    formData.append(
      "myFile",
      fileUrl,
      fileUrl.name
    );
   
    // Details of the uploaded file
    console.log(fileUrl);
   
    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
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
            Every profile is an NFT!
          </p>
          <div>
            <input type="file" onChange={onFileChange}/>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}