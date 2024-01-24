// import Rechart from "../inc/rechart";
// import { Link} from "react-router-dom";
// import Navigation from "../inc/navigation";
// function Dashboard() {
//   return (
//     <>
//       <div class="banner1">
//         <Navigation />
//         <div class="d-flex justify-content-center">
//           <Rechart />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import Navigation from "../inc/navigation";
import "../pagesCSS/DashboardCSS.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ userName }) => {
  const imageHistory = [
    {
      id: "img1",
      uploadDate: "2024-01-22",
      description: "Glioma Tumor",
      url: "#",
    },
    {
      id: "img2",
      uploadDate: "2024-01-20",
      description: "No Tumor",
      url: "#",
    },
    {
      id: "img3",
      uploadDate: "2024-01-18",
      description: "No Tumor",
      url: "#",
    },
    // Add more demo items as needed
  ];

  return (
    <div className="dashcontainer mt-5">
      <div className="mb-4">
        <h2>Dashboard</h2>
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
          {imageHistory.map((image, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
