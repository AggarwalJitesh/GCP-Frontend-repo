import Footer from "../inc/footer";
import "../pagesCSS/UploadCSS.css";

import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../inc/navigation";

import React, { useState } from "react";
import {
  Button,
  Modal,
  ProgressBar,
  Form,
  Col,
  Row,
  Image,
} from "react-bootstrap";

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setShowModal(true);
          return 100;
        }
        return Math.min(prevProgress + 10, 100);
      });
    }, 200);

    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("https://flask-app-hmq66d7qyq-uc.a.run.app/classify", {
    // fetch("http://127.0.0.1:8000/classify", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.message);
        console.log(data); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCloseModal = () => {
    fetch("https://flask-app-hmq66d7qyq-uc.a.run.app/addtoblockchain", {
      // fetch("http://127.0.0.1:8000/addtoblockchain", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
    setShowModal(false);
  };

   return (
     <>
       <Navigation />
       <div className="testCard">
         <Form onSubmit={handleSubmit} className="fileUpload">
           {selectedImage && (
             <Image
               className="img-preview"
               src={selectedImage}
               alt="Preview"
               thumbnail
             />
           )}
           <input
             type="file"
             multiple
             className="fileElem"
             id="fileInput"
             onChange={handleImageChange}
           />

           <label className="fileSelect" htmlFor="fileInput">
             Upload an Image
           </label>
           <progress
             value={progress}
             max="100"
             label={`${progress}%`}
             id="uploadProgress"
           ></progress>
           <Button type="submit" className="submitbtn">
             Submit
           </Button>

           <Modal show={showModal} onHide={handleCloseModal}>
             <Modal.Header closeButton>
               <Modal.Title>Image Classification Result</Modal.Title>
             </Modal.Header>
             <Modal.Body>{result}</Modal.Body>
             <Modal.Footer>
               <Button variant="primary" onClick={handleCloseModal}>
                 Add to Blockchain
               </Button>
             </Modal.Footer>
           </Modal>
         </Form>
       </div>
     </>
   );
};

export default ImageUploadComponent;

