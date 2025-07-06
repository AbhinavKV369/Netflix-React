import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

import hero_image from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";

import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_image} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-image" />
          <p>
            Discovering his ties to a secret ancient order,a young man living in
            modern Istanbul on a quest to save the city from a immortal enemy
          </p>
          <div className="hero-buttons">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
