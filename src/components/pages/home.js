import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navigation from "../inc/navigation";
import Footer from "../inc/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link, NavigationType } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navigation />
      <div>
        <div className="jumbotron jumbotron-fluid banner1">
          <p className="fs-2 ban1text">
            Manage your{" "}
            <span style={{ color: "blueviolet" }}>data to get results</span> in
            just one click.
          </p>
        </div>
        <img
          src={require("../images/Ellipse 1.png")}
          class="rounded-circle mx-auto d-block homeimg mt-n3"
        />
        <br />
      </div>
      <section className="sect-2">
        <div className="container fedlearn d-flex align-items-center justify-content-center">
          <div className="left">
            <img
              className="rounded img-fluid scientistimg"
              src={require("../images/researcher.jpg")}
            />
          </div>
          <div className=" right rounded-3 ">
            <p>
              Brain tumor prediction can be acheived by leveraging the data
              available across multiple healthcare institutions. Instead of
              centralizing all the data in one location, federated learning
              allows each institution to keep its patient data locally.
              <br />
            </p>
            <div className="collapse" id="collapseWidthExample">
              Discover the power of collaboration and privacy-aware machine
              learning in brain tumor prediction.
              <br />
            </div>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Learn More
            </button>
            <p />
          </div>
        </div>
      </section>
      <section className="sect-3">
        <div className="container">
          <h1 className="display-5 pb-4">
            Unleash with intuitive blockchain management.
          </h1>
          <div className="container cardseq text-center align-items-center">
            <div className="row">
              <div className="col-md-4">
                <div className="card align-items-center">
                  <img
                    src={require("../images/Ellipse 3.png")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Block Addition</h5>
                    <p className="card-text">
                      Add images and their metadata to your blockhain with ease.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card align-items-center" style={{}}>
                  <img
                    src={require("../images/Ellipse 4.png")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Basic Data Analysis</h5>
                    <p className="card-text">
                      View important model stats and KPIs with a bird's eye
                      view.{" "}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card align-items-center">
                  <img
                    src={require("../images/Ellipse 5.png")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">NFT Creation</h5>
                    <p className="card-text">
                      Create image NFTs and upload them to the marketplace.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <div className="card align-items-center">
                  <img
                    src={require("../images/Ellipse 6.png")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Smart Contract Management</h5>
                    <p className="card-text">
                      Build and deploy automated agreements with Smart
                      Contracts.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card align-items-center">
                  <img
                    src={require("../images/Ellipse 7.png")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Audit Trail View</h5>
                    <p className="card-text">
                      View log files of blockchain data activity in the form of
                      reports.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
