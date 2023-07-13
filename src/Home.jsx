import axios from "axios";
import { useState, useEffect } from "react";
import { Submit } from "./Submit";
import { Modal } from "./Modal";
import { DrawingsShowPublic } from "./DrawingsShowPublic";
import { Footer } from "./Footer";
import { SlidePublic } from "./SlidePublic";
import { SlideIndex } from "./SlideIndex";

export function Home() {
  const [isImagesVisible, setIsImagesVisible] = useState(true);
  const [isDrawingsVisible, setIsDrawingsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState("");
  const [drawings, setDrawings] = useState([]);
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDrawing, setCurrentDrawing] = useState({});

  const handleIndexImages = (d) => {
    console.log("handleIndexImages");
    axios.get(`https://kate.fly.dev/images/${d.id}.json`).then((response) => {
      console.log(response.data);
      setImages(response.data.map((image) => image));
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
    setCurrentDrawing(drawing);
    handleIndexImages(drawing);
    setIsModalVisible(true);
  };

  const handleShowSlide = (drawing) => {
    {
      setCurrentDrawing(drawing);
      handleShowModal(drawing);
      if (drawing.using_Images === true) {
        handleShowImages();
      } else {
        handleShowDrawings();
      }
    }
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
      <Submit drawings={drawings} onShowDrawing={handleShowSlide} />

      <Modal show={isModalVisible} onShowDrawing={handleShowSlide} drawing={currentDrawing} onClose={handleClose}>
        <div>
          <DrawingsShowPublic
            show={isDrawingsVisible}
            onShowImages={handleShowImages}
            drawing={currentDrawing}
            images={images}
          />
          <div id="slideindex">
            <SlideIndex show={isImagesVisible} drawing={currentDrawing} images={images} />
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}
