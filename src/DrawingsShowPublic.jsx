import { SlidePublic } from "./SlidePublic";

export function DrawingsShowPublic(props) {
  if (props.show) {
    return (
      <div>
        <>
          <img className="modal-drawing" src={props.drawing.url} />
          <p className="handwriting">{props.drawing.description}</p>
        </>
      </div>
    );
  }
}
