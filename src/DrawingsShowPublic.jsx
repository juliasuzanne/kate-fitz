import { SlidePublic } from "./SlidePublic";

export function DrawingsShowPublic(props) {
  if (props.show) {
    return (
      <div>
        <div className="modal-drawing">
          <img id="modal-drawing-home" src={props.drawing.url} />
          <p id="handwriting-modal">{props.drawing.description}</p>
        </div>
      </div>
    );
  }
}
