import axios from "axios";
import { useState, useEffect } from "react";
import { Submit } from "./Submit";
import { Modal } from "./Modal";
import { DrawingsShowPublic } from "./DrawingsShowPublic";
import { Footer } from "./Footer";
import { SlidePublic } from "./SlidePublic";
import { SlideIndex } from "./SlideIndex";

export function Home() {
  const [isImagesVisible, setIsImagesVisible] = useState(false);
  const [isDrawingsVisible, setIsDrawingsVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState("");
  const [drawings, setDrawings] = useState([]);
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDrawing, setCurrentDrawing] = useState({});

  const handleIndexImages = (d) => {
    console.log("handleIndexImages");
    axios.get(`http://kate.fly.dev/images/${d.id}.json`).then((response) => {
      console.log(response.data);
      setImages(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsModalVisible(false);
    setIsDrawingsVisible(true);
    setIsImagesVisible(false);
    setIsButtonVisible("");
  };

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get("https://kate.fly.dev/drawings.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
  };

  const handleShowModal = (drawing) => {
    console.log("handleShowModal", drawing);
    setIsModalVisible(true);
    setCurrentDrawing(drawing);
    handleIndexImages(drawing);
  };

  const handleShowImages = () => {
    setIsDrawingsVisible(false);
    setIsImagesVisible(true);
  };

  const handleShowDrawings = () => {
    setIsImagesVisible(false);
    setIsDrawingsVisible(true);
  };

  const handleShowButton = () => {
    setIsButtonVisible("true");
  };

  useEffect(handleIndexDrawings, []);

  return (
    <div>
      <Submit drawings={drawings} onShowDrawing={handleShowModal} />
      <Modal show={isModalVisible} onShowDrawing={handleShowModal} drawing={currentDrawing} onClose={handleClose}>
        {/* <button onClick={handleShowDrawings}>drawing</button>
        <button onClick={handleShowImages}> images</button> */}

        {/* onClick={() => {
            handleCatalog();
            setCurrentItem(item.image_url);
            console.log(currentItem);
          }}
           */}
        {currentDrawing.using_Images === true ? (
          <button
            hidden={isButtonVisible}
            id="show-images-button"
            onClick={() => {
              handleShowImages();
              handleShowButton();
            }}
          >
            <div id="show-images-button-text">&#8594;</div>
          </button>
        ) : (
          <p> </p>
        )}

        <DrawingsShowPublic
          show={isDrawingsVisible}
          onShowImages={handleShowImages}
          drawing={currentDrawing}
          images={images}
        />

        <SlideIndex show={isImagesVisible} drawing={currentDrawing} images={images} />
      </Modal>
      <Footer />
    </div>
  );
}
