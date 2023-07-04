import { Slide } from "./Slide";
import { ImagesCreate } from "./ImagesCreate";
import { useEffect, useState } from "react";

export function ImagesIndex(props) {
  const [showCreate, setShowCreate] = useState(false);

  const handleShowCreate = () => {
    if (showCreate == true) {
      setShowCreate(false);
    } else {
      setShowCreate(true);
    }
  };

  if (props.show) {
    return (
      <div key="creating_images">
        <button onClick={handleShowCreate}>create image</button>
        <ImagesCreate show={showCreate} drawing={props.drawing} onCreateImage={props.onCreateImage}></ImagesCreate>

        <div key="test" className="sliding">
          <Slide
            onDestroyImage={props.onDestroyImage}
            onUpdateImage={props.onUpdateImage}
            images={props.images}
            drawing={props.drawing}
          />
        </div>
      </div>
    );
  }
}
