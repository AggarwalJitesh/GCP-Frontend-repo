import React, { useState } from "react";

function UploadToBlockchain() {
  const [progress, setProgress] = useState(0);
  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleChange = () => {
    // Simulate file upload (replace this with your actual upload logic)
    simulateFileUpload();
  };

  const simulateFileUpload = () => {
    let value = 0;
    const interval = setInterval(() => {
      if (value >= 100) {
        clearInterval(interval);
        setShowUploadButton(true);
        return;
      }

      value += 5; // Simulated progress increment
      setProgress(value);
    }, 500); // Simulated upload interval (milliseconds)
  };

  const handleUploadToBlockchain = () => {
    // Add your code to upload to the blockchain here
    alert("Uploading to Blockchain...");
  };

  return (
    <div>
      <form className="fileUpload">
        <input
          type="file"
          multiple
          className="fileElem"
          id="fileInput"
          onChange={handleChange}
        />

        
        <label className="fileSelect" htmlFor="fileInput">
          Upload File
        </label>
        <h4>Usage</h4>
        <progress value={progress} max="100" id="uploadProgress"></progress>
        <p>
          <span id="progressText">{progress}%</span> of 100% (
          <a href="#" className="upgrade">
            Upgrade
          </a>
          )
        </p>
      </form>

      {showUploadButton && (
        <button id="uploadToBlockchain" onClick={handleUploadToBlockchain}>
          Upload to Blockchain
        </button>
      )}
    </div>
  );
}

export default UploadToBlockchain;