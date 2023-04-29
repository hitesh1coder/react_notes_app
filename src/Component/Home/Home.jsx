import React from "react";
import homeImage from "../../images/image-removebg-preview 1.png";
import lockIcon from "../../images/Vector (3).png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_main">
        <img src={homeImage} alt="home" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="footer">
        <img src={lockIcon} alt="icon" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default Home;
