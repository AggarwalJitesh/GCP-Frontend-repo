import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Footer from "../inc/footer";

import * as tf from "@tensorflow/tfjs";
import * as automl from "@tensorflow/tfjs-automl";
import * as modelJSON from "./model-6445255798162456576_tf-js_2023-09-11T04_55_16.676712Z_model.json";

import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../inc/navigation";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [ImageURL, setImageURL] = useState(null);

  const handleFileChange = (event) => {
    setImageURL(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // const model = await tf.loadGraphModel(modelJSON);
    // // const image = document.getElementById('output');
    // const predictions = await model.classify(selectedFile);
    // console.log(predictions);
    // setResult(predictions);
    // const pre = document.getElementById('result');
    // pre.textContent = JSON.stringify(predictions, null, 2);


    // const formData = new FormData();
    // formData.append("image", selectedFile);

    // fetch("http://127.0.0.1:5000/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setResult(data.message);
    //     console.log(data); // You can handle the response from the backend here
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div class=" banner1">
      <Navigation />
      <div class="container text-center ">
        <div class="row">
          <div class="col">
            <input
              class="form-control form-control-lg w-25 mt-5"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div class="row w-25">
          <div class="col">
            <button
              type="button"
              class="btn btn-outline-info btn-lg mt-4"
              onClick={handleUpload}
            >
              Upload Image{" "}
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center mt-4">
            <img
              src={ImageURL}
              style={{
                width: "50vh",
                height: "50vh",
              }}
            />
          </div>
          <div class="col align-self-center">
            <h4>{result}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
