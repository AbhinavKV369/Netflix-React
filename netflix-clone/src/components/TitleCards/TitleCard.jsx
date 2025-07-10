import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();
  const [api, setApi] = useState([]);

  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
  const channelId = "UCZSNzBgFub_WWil6TOTYwAg";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=${channelId}&maxResults=10&order=date&q=${category}&key=${API_KEY}`;

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const scrollContainer = cardsRef.current;
    scrollContainer.addEventListener("wheel", handleWheel);
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApi(data.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
        {api.map((item, index) => {
          const videoId = item.id?.videoId;
          const snippet = item.snippet;
          const thumbnailUrl = snippet?.thumbnails?.medium?.url;

          if (!videoId || !thumbnailUrl) return null;

          return (
            <div className="card" key={index}>
              <Link to={`player/${videoId}`} >
                <img src={thumbnailUrl} alt={snippet.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
