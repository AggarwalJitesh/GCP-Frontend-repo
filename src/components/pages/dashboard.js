// components import
import Navigation from "../inc/navigation";
import Accordion from "./Accordion";
import { fetchDataFromBackend } from "../inc/api_GETservice";
import { sendDataToBackend } from "../inc/apiService";

// css import
import "../pagesCSS/UploadCSS.css";
import "../pagesCSS/DashboardCSS.css";

// React hooks import
import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// bootsrap import
// import "bootstrap/dist/css/bootstrap.min.css";

// dropzone
import { useDropzone } from "react-dropzone";
import Lottie from "react-lottie";
import animationData1 from "/Users/jiteshaggarwal/Desktop/frontend/src/components/images/upload.json";
import "/Users/jiteshaggarwal/Desktop/frontend/src/components/pagesCSS/UploadCSS.css";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  // catch user id
  const urlParams = new URLSearchParams(window.location.search);
  const userid = urlParams.get("userid");

  // naviagte
  const navigate = useNavigate();

  // upload image perticular
  const [selectedImage, setSelectedImage] = useState(null);
  const [files, setFiles] = useState([]);

  const [result, setResult] = useState(null);

  // const items = [{ lottieOptions: defaultOptions1 }];
  // const [analyzing, setAnalyzing] = useState(false);

  const [imageUploaded, setImageUploaded] = useState(false);
  const [classificationResult, setClassificationResult] = useState(false);

  // handle image change

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      setImageUploaded(true);
      setFiles([
        {
          ...file,
          preview: URL.createObjectURL(file),
        },
      ]);
    }
  }, []);

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setAnalyzing(true);

    //send upload image too backend
    const formData = new FormData();
    formData.append("image", selectedImage);

    const endpointPath = "classify";

    try {
      const data = await sendDataToBackend(endpointPath, formData);
      setResult(data.message);
      setClassificationResult(true);
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  const handleCancel = () => {
    // // setAnalyzing(false); // Show the Analyze Image button againsetAnalyzing
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleAddtoBlockchain = async (e) => {
    const endpointPath = "addtoblockchain";

    try {
      const data = await fetchDataFromBackend(endpointPath);
      alert(data.message);
      window.location.reload();
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  /////////////////////////////////////////

  // data set from backend
  const [data, setData] = useState([]);

  // accoordian functioon
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const toggleAccordion = (id) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null); // Close the current accordion if it's already open
    } else {
      setOpenAccordionId(id); // Open the clicked accordion
    }
  };

  useEffect(() => {
    const fetchData = async (e) => {
      const endpointPath = "transaction";
      try {
        const data = await fetchDataFromBackend(endpointPath);
        setData(data);
      } catch (error) {
        console.error("Failed to send data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async (e) => {
    const endpointPath = "logout";

    try {
      const data = await fetchDataFromBackend(endpointPath);
      alert(data.message);
      navigate("/");
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  return (
    <div className="dashcontainer mt-5">
      <div className="mb-4">
        <h2 className="dash">DASHBOARD</h2>
        <Navigation />
        <h1>Welcome,{userid}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="upload-container">
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "active" : ""} ${
            imageUploaded ? "slide-out" : ""
          }`}
        >
          <Lottie options={defaultOptions1} height={300} width={300} />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the images here ...</p>
          ) : (
            <p>Drag 'n' drop some images here, or click to select images</p>
          )}
          {/* Conditionally render the Analyze Image button right below the dropzone text */}
          {files.length > 0 && (
            <div>
              <button onClick={handleSubmit} className="submit-button">
                Analyze Image
              </button>
            </div>
          )}
        </div>
        {files.map((file) => (
          <div
            key={file.name}
            className={`preview-image image-preview ${
              classificationResult ? "move-left" : ""
            }`}
          >
            <img src={file.preview} alt="Preview" />
            <p>{file.name}</p>
          </div>
        ))}
        {classificationResult && (
          <div className="classification-result slide-in">
            <h1>{result}</h1>
            <button onClick={handleAddtoBlockchain}>Add to Blockchain</button>
            
          </div>
        )}
      </div>

      {/* /////////////////////////////////////////// */}
      <div className="App">
        <h2>Data Accordion</h2>
        {data.map((item, index) => (
          <Accordion
            key={index}
            data={item}
            isOpen={openAccordionId === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
