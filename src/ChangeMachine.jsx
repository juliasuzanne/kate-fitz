import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Submit } from "./Submit";
import { Login } from "./Login";
import { DrawingsCreate } from "./DrawingsCreate";
import { Modal } from "./Modal";
import { DrawingsShow } from "./DrawingsShow";
import { SearchFilter } from "./SearchFilter";
import { FooterContact } from "./FooterContact";
import { LogoutLink } from "./Logout";
import { ImagesCreate } from "./ImagesCreate";
import { ModalImage } from "./ModalImage";
import { ImagesIndex } from "./ImagesIndex";

export function ChangeMachine() {
  // const drawings = [
  //   {
  //     id: 1,
  //     name: "First",
  //     description: "Description",
  //     url: "https://www.gardnermuseum.org/sites/default/files/styles/portrait_large/public/images/slides/1708/Organization_Rentals_Cloisters_04.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Second",
  //     description: "Description",
  //     url: "https://www.chemicals.co.uk/wp-content/uploads/2021/09/close-up-of-sea-water.jpeg",
  //   },
  // ];
  const [drawings, setDrawings] = useState([]);
  const [isModalImageVisible, setIsModalImageVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImagesUpdateVisible, setIsImagesUpdateVisible] = useState(false);
  const [isDrawingsUpdateVisible, setIsDrawingsUpdateVisible] = useState(true);
  const [currentDrawing, setCurrentDrawing] = useState({});
  const [images, setImages] = useState([]);
  const [currentdraw, setCurrentDraw] = useState([]);

  const [currentImage, setCurrentImage] = useState([]);

  const handleShowModal = (drawing) => {
    console.log("handleShowModal", drawing);
    setIsModalVisible(true);
    setCurrentDrawing(drawing);
    handleIndexImages(drawing);
  };

  const handleShowImageUpdate = () => {
    setIsDrawingsUpdateVisible(false);
    setIsImagesUpdateVisible(true);
  };

  const handleShowDrawingsUpdate = () => {
    setIsImagesUpdateVisible(false);
    setIsDrawingsUpdateVisible(true);
  };

  const handleShowModalImages = () => {};

  const handleCloseImages = () => {
    console.log("handleCloseImages");
    setIsModalImageVisible(false);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsModalVisible(false);
    setIsDrawingsUpdateVisible(true);
    setIsImagesUpdateVisible(false);
  };

  const handleCreateDrawing = (params, successCallback) => {
    console.log("handleCreateDrawing", params);
    axios.post("https://kate.fly.dev/drawings.json", params).then((response) => {
      setDrawings([...drawings, response.data]);
      successCallback();
    });
  };

  const handleCreateImage = (params, successCallback) => {
    console.log("handleCreateImage", params);
    axios.post(`https://kate.fly.dev/images.json`, params).then((response) => {
      setImages([...images, response.data]);
      successCallback();
    });
  };

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get(`https://kate.fly.dev/drawings.json`).then((response) => {
      console.log(response.data);
      setDrawings([...drawings, response.data]);
      setDrawings(response.data);
    });
  };

  const handleUpdateDrawing = (id, params, successCallback) => {
    console.log("handleUpdateDrawing", params);
    axios.patch(`https://kate.fly.dev/drawings/${id}.json`, params).then((response) => {
      setDrawings(
        drawings.map((drawing) => {
          if (drawing.id === response.data.id) {
            return response.data;
          } else {
            return drawing;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyDrawing = (drawing) => {
    console.log("handleDestroyDrawing", drawing);
    axios.delete(`https://kate.fly.dev/drawings/${drawing.id}.json`).then((response) => {
      setDrawings(drawings.filter((d) => d.id !== drawing.id));
      handleClose();
    });
  };

  const handleDestroyImage = (image) => {
    console.log("handleDestroyImage", image);
    axios.delete(`https://kate.fly.dev/images/${image.id}.json`).then((response) => {
      setImages(images.filter((d) => d.id !== image.id));
      handleClose();
    });
  };

  const handleIndexImages = (d) => {
    console.log("handleIndexImages");
    axios.get(`https://kate.fly.dev/images/${d.id}.json`).then((response) => {
      console.log(response.data);
      setImages(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);

  return (
    <div>
      {localStorage.jwt === undefined ? (
        <Login />
      ) : (
        <>
          <DrawingsCreate onCreateDrawing={handleCreateDrawing} />
          <br></br>
          <br></br>
          <div id="logout" className="handwriting">
            <LogoutLink />
          </div>
          <br></br>
          <br></br>

          <h1 className="heading">Drawings</h1>

          <SearchFilter drawings={drawings} onShowDrawing={handleShowModal} />

          <Modal show={isModalVisible} onGetImages={handleIndexImages} onClose={handleClose}>
            <button onClick={handleShowDrawingsUpdate}>edit drawing</button>
            <button onClick={handleShowImageUpdate}>edit images</button>

            <DrawingsShow
              show={isDrawingsUpdateVisible}
              drawing={currentDrawing}
              onUpdateDrawing={handleUpdateDrawing}
              onDestroyDrawing={handleDestroyDrawing}
              onShowImagesIndex={handleShowModalImages}
            />

            <ImagesIndex
              show={isImagesUpdateVisible}
              drawing={currentDrawing}
              drawings={drawings}
              images={images}
              onCreateImage={handleCreateImage}
            />
          </Modal>
          {/* <ModalImage show={isModalImageVisible} onGetImages={handleIndexImages} onClose={handleCloseImages}>
            
          </ModalImage> */}
          <FooterContact />
        </>
      )}
    </div>
  );
}
