import { Slide } from "./Slide";
import { useEffect, useState } from "react";
import { SlidePublic } from "./SlidePublic";

export function SlideIndex(props) {
  if (props.show) {
    return (
      <div key="creating_images">
        <br></br>
        <br></br>
        <div className="sliding-public">
          <SlidePublic images={props.images} drawing={props.drawing} />
        </div>
      </div>
    );
  }
}
