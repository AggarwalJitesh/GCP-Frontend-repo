import Navigation from "../inc/navigation";
import "../pagesCSS/DashboardCSS.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Dashboard = ({ userName }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // Adjust the fetch URL to match your FastAPI endpoint
    fetch("https://flask-app-hmq66d7qyq-uc.a.run.app/transaction/")
    // fetch("http://127.0.0.1:8000/transaction/")
      .then((response) => response.json())
      .then((data) => {
        setData([data]); // Set the fetched data into the state
      });
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
            <th>Image Name</th>
            <th>Result</th>
            <th>Block Hash</th>
            <th>Block Number</th>
            <th>Transaction Hash</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.imageName}</td>
              <td>{item.result}</td>
              <td>{item.blockHash}</td>
              <td>{item.blockNumber}</td>
              <td>{item.hash}</td>
              <td>
                <a href={item.url}>View Image</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
