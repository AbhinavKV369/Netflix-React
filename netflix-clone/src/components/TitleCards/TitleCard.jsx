import React, { useEffect, useRef } from "react";
import "./TitleCard.css";
import title_cards from "../../assets/cards/Cards_data.js";

const TitleCard = ({title,category}) => {
  const cardsRef = useRef();
  console.log

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const scrollContainer = cardsRef.current;
    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel,{ passive: false });
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix" }</h2>
      <div className="card-lists" ref={cardsRef}>
        {title_cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
