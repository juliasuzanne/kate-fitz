export function DrawingsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateDrawing(props.drawing.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyDrawing(props.drawing);
  };

  if (props.show)
    return (
      <div>
        <p className="handwriting">{props.drawing.name}</p>
        <img src={props.drawing.url} className="showingdrawing" />
        <p id="handwriting" className="handwriting">
          {props.drawing.description}
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            Image Url: <input defaultValue={props.drawing.url} name="url" type="string" />
          </div>
          <div>
            Tags: <input defaultValue={props.drawing.tags} name="tags" type="string" />
          </div>
          <div>
            Using Images?: <input id="myform" name="using_Images" defaultValue="false" type="checkbox" />
          </div>
          <div>
            Description: <input defaultValue={props.drawing.description} name="description" type="string" />
          </div>
          <button type="submit"> Update Drawing </button>
        </form>
        <div className="delete">
          <button onClick={handleClick}>Delete Drawing</button>
          {/* <button onClick={() => props.onShowImagesIndex(drawing)}> add-ons </button> */}
        </div>
      </div>
    );
}
