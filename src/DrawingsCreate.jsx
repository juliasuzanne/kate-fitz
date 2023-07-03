import axios from "axios";

export function DrawingsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post(`http://localhost:3000/images.json`, { url: event.target.url.value })
      .then(props.onCreateDrawing(params, () => event.target.reset()));
  };

  //   const handleFixBox = () => {
  //   setErrors([]);
  //   let newPoints = 500 + currentUser.points;
  //   console.log(newPoints);
  //   axios
  //     .patch(`https://moon--egg.fly.dev/users/${id}`, { fixed: true, points: newPoints })
  //     .then((window.location.href = "/hotel"))
  //     .catch((error) => {
  //       console.log(error.response.data.errors);
  //       setErrors(error.response.data.errors);
  //     });
  // };

  return (
    <div>
      <h1 className="heading"> Upload drawing </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Title: <input id="myform" name="name" type="string" />
        </div>
        <div>
          Tags: <input id="myform" name="tags" type="string" />
        </div>
        <div>
          Description: <input id="myform" name="description" type="string" />
        </div>
        <div>
          url: <input id="myform" name="url" type="string" />
        </div>
        <button id="" type="submit">
          Upload drawing
        </button>
      </form>
    </div>
  );
}

//   const handleFixBox = () => {
//   setErrors([]);
//   let newPoints = 500 + currentUser.points;
//   console.log(newPoints);
//   axios
//     .patch(`https://moon--egg.fly.dev/users/${id}`, { fixed: true, points: newPoints })
//     .then((window.location.href = "/hotel"))
//     .catch((error) => {
//       console.log(error.response.data.errors);
//       setErrors(error.response.data.errors);
//     });
// };
