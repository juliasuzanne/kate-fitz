import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import "./Slide.css";
import { useState, useEffect } from "react";

export function SlidePublic(props) {
  return (
    <div className="box">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="right-button" onClick={clickHandler}>
                &#8594;
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="left-button">
                &#8592;
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li onClick={clickHandler} className={`ind ${isSelected ? "active" : ""}`} key={index} role="button" />
          );
        }}
        transitionTime={310}
        swipeable={true}
      >
        {props.images.map((URL, index) => (
          <div className="center-contents">
            <img className="modal-drawing-slide" alt="sample_file" src={URL.url} key={index} />
            <div id="paras">{URL.description}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
