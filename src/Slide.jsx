import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import "./Slide.css";
import { useState, useEffect } from "react";

export function Slide(props) {
  const [images, setImages] = useState([]);

  const handleGetImages = () => {
    setImages(props.images.map((image) => image));
  };

  useEffect(handleGetImages, []);

  return (
    <div className="box">
      <Carousel
        showIndicators
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
        swipeable={false}
      >
        {images.map((URL, index) => (
          <div id="slide-small">
            <img alt="sample_file" src={URL.url} key={index} />
            <p id="subtitle">{URL.description}</p>
            <p id="subtitle">{URL.id}</p>
            <p id="subtitle">{URL.user_id}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
