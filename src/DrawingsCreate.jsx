import axios from "axios";

export function DrawingsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDrawing(params);
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
        <div hidden="true">
          Using Images?: <input id="myform" name="using_Images" type="checkbox" defaultValue="false" />
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
