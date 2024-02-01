import Navigation from "../inc/navigation";
import "../pagesCSS/DashboardCSS.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ userName }) => {
  const [transaction, setTransaction] = useState({});
  useEffect(() => {
    // Adjust the fetch URL to match your FastAPI endpoint
    fetch("http://127.0.0.1:8000/transaction/")
      .then((response) => response.json())
      .then((data) => {
        setTransaction(data); // Set data in an array to map over it
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
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(transaction).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
