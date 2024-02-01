import Navigation from "../inc/navigation";
import { sendDataToBackend } from "../inc/apiService";
import "../pagesCSS/UploadCSS.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null); // img url dor preview
  const [selectedFile, setSelectedFile] = useState(null); // file to be sent too backend

  const [result, setResult] = useState(null); // keeps the classified result

  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedImage(null); 
    }
  };

  const handleSubmit = async (e) => {
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

    const endpointPath = "classify";

    try {
      const data = await sendDataToBackend(endpointPath, formData);
      setResult(data.message);
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  const handleCloseModal = () => {
    // fetch("https://flask-app-hmq66d7qyq-uc.a.run.app/addtoblockchain", {
    fetch("http://127.0.0.1:8000/addtoblockchain", {
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
          <div class="row">
            <div class="col-lg">
              <div class="row-lg">
                {selectedImage && (
                  <Image
                    className="img-preview"
                    src={selectedImage}
                    alt="Preview"
                    thumbnail
                  />
                )}
              </div>
              <div class="row-lg">
                <progress
                  value={progress}
                  max="100"
                  label={`${progress}%`}
                  id="uploadProgress"
                ></progress>
              </div>
            </div>
            <div class="col-lg">
              {!selectedImage && (
                <label className="fileSelect" htmlFor="fileInput">
                  Upload an Image
                  <input
                    type="file"
                    multiple
                    className="fileElem"
                    id="fileInput"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              )}

              {selectedImage && (
                <div>
                  <a
                    href="#!"
                    onClick={() => setSelectedImage(null)}
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    Reupload Image
                  </a>
                  <Button type="submit" className="submitbtn">
                    Submit
                  </Button>{" "}
                </div>
              )}
            </div>
          </div>
        </Form>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Image Classification Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>{result}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Add to Blockchain
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageUploadComponent;
