
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Constant from "../Constant";

export const Carousel = ({ description, link, timeLeft }) => {
  const formattedLink = link.startsWith('http://') || link.startsWith('https://') 
    ? link 
    : `http://${link}`;

  const items = Constant.MAINCAROUSELDATA.map((item, index) => (
    <img
      key={index}
      src={item.images}
      alt={item.path}
      className="cursor-pointer"
      role="presentation"
      style={{ width: "100%" }}
    />
  ));

  return (
    <div style={{ position: "relative" }}>
      <a href={formattedLink} target="_blank" rel="noopener noreferrer">
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
        />

        <div
          style={{
            position: "absolute",
            top: "1%",
            left: "44%",
            zIndex: 9,
            color: "black",
            textAlign: "center",
          }}
        >
          <p>{description}</p>
          <p style={{ color: "black", fontSize: "16px" }}>
            {timeLeft} seconds remaining
          </p>
        </div>
      </a>
    </div>
  );
};
