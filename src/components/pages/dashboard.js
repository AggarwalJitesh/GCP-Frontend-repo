import Navigation from "../inc/navigation";
import "../pagesCSS/DashboardCSS.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Dashboard = ({ userName }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the FastAPI backend
    fetch("http://localhost:8000/transaction") // Adjust the URL based on your backend
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);


  return (
    <div className="dashcontainer mt-5">
      <div className="mb-4">
        <h2 className="dash">DASHBOARD</h2>
        <Navigation />
        <p>Welcome, {userName}!</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Image ID</th>
            <th>Upload Date</th>
            <th>Classification Result</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {/* {imageHistory.map((image, index) => (
            <tr key={index}>
              <td>{image.id}</td>
              <td>{image.uploadDate}</td>
              <td>{image.description}</td>
              <td>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  View Image
                </a>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
