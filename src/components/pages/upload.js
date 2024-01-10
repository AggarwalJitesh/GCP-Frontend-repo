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
  // ImageURL -- selectedImage

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
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.message);
        console.log(data); // You can handle the response from the backend here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Form onSubmit={handleSubmit}>
      <Navigation />
      <Row>
        <Col md={6}>
          {selectedImage && (
            <Image src={selectedImage} alt="Preview" thumbnail />
          )}
        </Col>
        <Col md={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <ProgressBar now={progress} label={`${progress}%`} />
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Image Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>{result}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default ImageUploadComponent;
