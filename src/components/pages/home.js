import Navigation from "../inc/navigation";
import Footer from "../inc/footer";
import "../pagesCSS/HomeCSS.css";

import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    {
      id: 1,
      headline: "Upload Brain Scan Image",
      text: "Upload the brain scan image using the designated upload icon",
    },
    {
      id: 2,
      headline: "Submit for Analysis",
      text: "Submit the uploaded image to receive results by clicking on the submit icon.",
    },
    {
      id: 3,
      headline: "Store in Blockchain",
      text: "To ensure future verification, click the icon to add the records to our blockchain.",
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="banner">
        <div className="heading">
          Blockchain technology offers decentralized, transparent, and immutable
          record-keeping, ensuring the integrity and security of data. Its
          services span across vario
        </div>
        <div className="imagesection">
          <img
            src={require("/Users/jiteshaggarwal/Desktop/frontend/src/components/images/img1.jpg")}
          />
        </div>
      </div>
      <div className="template">
        {items.map((item) => (
          <div key={item.id} className="card">
            <div className={`circle circle-${item.id}`}>{item.id}</div>
            <h2>{item.headline}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="email-signup-card">
        <h1 className="heading1">Try our Software</h1>
        <p className="para">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </p>
        <div className="button-row">
          <Link to="/signin" className="link-button">
            <button className="button button-red">Sign Up</button>
          </Link>

          <Link to="/login" className="link-button">
            <button className="button button-green">Login</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
