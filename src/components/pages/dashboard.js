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
        <h2>Dashboard</h2>
        <Navigation />
        <p>Welcome, {userName}!</p>
      </div>
      <div>
        <h1>User Details</h1>
        {data && (
          <ul>
            <li>Name: {data.blockNumber}</li>
            <li>Age: {data.contractAddress}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
