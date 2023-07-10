import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function SearchFilter(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div className="center">
        <input id="myform" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />{" "}
      </div>

      <div id="drawings-index">
        {props.drawings
          .filter(
            (drawings) =>
              drawings.tags.toLowerCase().includes(searchFilter.toLowerCase()) ||
              drawings.description.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((drawing) => (
            <div key={drawing.id} id="drawing">
              <h5 className="handwriting"> {drawing.id} </h5>
              <LazyLoadImage
                onClick={() => props.onShowDrawing(drawing)}
                height="300px"
                className="showingdrawing"
                src={drawing.url}
                alt=""
              />
              <p id="handwriting" className="handwriting">
                {" "}
                {drawing.description}{" "}
              </p>
              <button onClick={() => props.onShowDrawing(drawing)}> edit</button>
              {/* <button onClick={() => props.onReturndrawing(drawing)}> Return drawing, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
