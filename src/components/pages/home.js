import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navigation from "../inc/navigation";
import Footer from "../inc/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../pagesCSS/HomeCSS.css";

import { Link, NavigationType } from "react-router-dom";

const Home = () => {
  const items = [
    {
      id: 1,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
    {
      id: 2,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
    {
      id: 3,
      headline: "Headline",
      text: "Lorem ipsum dolor sit consectetur adipiscing elit. Alias amet deleniti et fugit iusto nesciunt.",
    },
  ];

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
          src={require("../images/Ellipse.png")}
          class="rounded-circle mx-auto d-block homeimg mt-n3"
        />
        <br />
      </div>
      <section className="sect-3">
        <div className="template">
          {items.map((item) => (
            <div key={item.id} className="card">
              <div className={`circle circle-${item.id}`}>{item.id}</div>
              <h2>{item.headline}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Link to="/signin" className="link-button">
        <button className="button button-red">Sign Up</button>
      </Link>

      <Link to="/login" className="link-button">
        <button className="button button-green">Login</button>
      </Link>

      <Footer />
    </div>
  );
};

export default Home;
