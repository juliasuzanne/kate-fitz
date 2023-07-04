import axios from "axios";
import { useState, useEffect } from "react";

export function Photos() {
  const [drawings, setDrawings] = useState([]);
  const handleIndexPhotos = () => {
    console.log("handleIndexDrawings");
    axios.get("https://kate.fly.dev/images.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
  };

  useEffect(handleIndexPhotos, []);
}
