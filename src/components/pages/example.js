import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Footer from "../inc/footer";

import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../inc/navigation";

function Example() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/get_data", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const openImageInNewTab = (imageUrl) => {
  //   // window.open(imageUrl, "_blank");
  //   const anchor = document.createElement("a");
  //   anchor.href = imageUrl;
  //   anchor.target = "_blank";

  //   // Programmatically click the anchor to open the image in a new tab
  //   anchor.click();
  // };

  return (
    <div class="banner1">
      <Navigation />
      <div class="container">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">userName</th>
              <th scope="col">email</th>
              <th scope="col">password</th>
              <th scope="col">image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  {/* <button onClick={openImageInNewTab(item.image_url)}>
                    Open
                  </button> */}

                  <img
                    src={item.image_url}
                    // alt={`Image ${item.id}`}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="container text-center ">
          <button
            type="button"
            class="btn btn-outline-info btn-lg mt-4"
            onClick={fetchData}
          >
            get info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Example;
