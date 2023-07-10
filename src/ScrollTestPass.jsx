import { useEffect, useState } from "react";
import { ScrollTest } from "./ScrollTest";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function ScrollTestPass() {
  const [drawings, setDrawings] = useState([]);

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get(`https://kate.fly.dev/drawings.json`).then((response) => {
      console.log(response.data);
      setDrawings([...drawings, response.data]);
      setDrawings(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);
  // return <ScrollTest drawings={drawings} />;
  return drawings.map((drawing) => (
    <div key={drawing.id} id="drawing">
      <LazyLoadImage
        onClick={() => props.onShowDrawing(drawing)}
        height="300px"
        className="showingdrawing"
        src={drawing.url}
        alt=""
      />
      {/* <button onClick={() => props.onReturndrawing(drawing)}> Return drawing, no refunds!</button> */}
      {/* {items.slice(0, 10).map((item) => (
          <img src={item.image_url} width="30px" /> */}
    </div>
  ));
}
