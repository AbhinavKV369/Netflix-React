import React from 'react'
import "./Player.css"
import black_arrow from "../../assets/back_arrow_icon.png"

const Player = () => {
  return (
    <div className="player">
      <img src={black_arrow} alt="" />
      <iframe
        src="https:www.youtube.com/embed/kJQP7kiw5Fk"
        title="Traier"
        height="90%"
        width="90%"
        frameborder="0"
        allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date:</p>
        <p>Name:</p>
        <p>Type:</p>
      </div>
    </div>
  );
}

export default Player