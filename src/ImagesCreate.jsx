export function ImagesCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateImage(params, () => event.target.reset());
  };

  if (props.show) {
    return (
      <div>
        <h1 className="heading"> Upload image </h1>
        <form className="myform" onSubmit={handleSubmit}>
          <div>
            Url: <input id="myform" defaultValue={props.drawing.url} name="url" type="string" />
          </div>
          <div>
            Description: <input id="myform" defaultValue={props.drawing.description} name="description" type="string" />
          </div>
          <div>
            parent: <input id="myform" defaultValue={props.drawing.id} name="drawing_id" type="integer" />
          </div>
          <button id="" type="submit">
            Upload image
          </button>
        </form>
      </div>
    );
  }
}
