import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

import hero_image from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_image} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className="caption-image" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul is on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-buttons">
            <button className="btn">
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>
          <TitleCard
            title={"Now Streaming"}
            category={"latest netflix shows"}
          />
        </div>
      </div>

      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"top_movies"} />
        <TitleCard title={"Only on Netflix"} category={"only_netflix"} />
        <TitleCard title={"Upcoming"} category={"upcoming_movies"} />
        <TitleCard title={"Top Picks For You"} category={"new_series"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;


