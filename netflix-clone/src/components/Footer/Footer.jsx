import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube Icon" />
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={twitter_icon} alt="Twitter Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Media Center</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
      </ul>
      <p>© 2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
