import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Player.css";
import black_arrow from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideoInfo(data.items);
        } else {
          setError("Video not found.");
        }
      } catch (err) {
        console.error("Error fetching video:", err);
        setError("Something went wrong. Please try again.");
      }
    };
    fetchVideo();
  }, [videoId]);

  return (
    <div className="player">
      <Link to="/">
        <img src={black_arrow} alt="Back" className="back-button" />
      </Link>

      {error ? (
        <p className="error-message">{error}</p>
      ) : videoInfo ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoInfo.snippet.title}
            width="90%"
            height="90%"
            frameBorder="0"
            allowFullScreen></iframe>

          <div className="player-info">
            <p>
              <strong>Published Date:</strong> {videoInfo.snippet.publishedAt}
            </p>
            <p>
              <strong>Name:</strong> {videoInfo.snippet.title}
            </p>
            <p>
              <strong>Type:</strong> {videoInfo.kind}
            </p>
          </div>
        </>
      ) : (
        <p className="loading-message">Loading video...</p>
      )}
    </div>
  );
};

export default Player;
