import { Slide } from "./Slide";
import { ImagesCreate } from "./ImagesCreate";
import { useEffect, useState } from "react";

export function ImagesIndex(props) {
  if (props.show) {
    return (
      <div key="creating_images">
        <h1>All associated images</h1>
        <Slide images={props.images} drawing={props.drawing} />
        <ImagesCreate drawing={props.drawing} onCreateImage={props.onCreateImage}></ImagesCreate>
      </div>
    );
  }
}
