import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://kate.fly.dev/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/changemachine";
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Invalid email or password"]);
      });
  };

  // const handleSignupSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors([]);
  //   const params = new FormData(event.target);
  //   axios
  //     .post("https://kate.fly.dev/users", params)
  //     .then((response) => {
  //       console.log(response);
  //       event.target.reset();
  //       window.location.href = "/changemachine";
  //     })
  //     .catch((errors) => {
  //       console.log(errors.response.data.errors);
  //       setErrors(errors.response.data.errors);
  //     });
  // };

  return (
    <div id="login">
      <h1 className="heading-login">Login to make changes</h1>
      <ul className="handwriting">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="myform" onSubmit={handleSubmit}>
        <div className="handwriting">
          Name: <input name="name" type="name" />
        </div>
        <div className="handwriting">
          Password: <input name="password" type="password" />
        </div>
        <button id="button-login" className="handwriting" type="submit">
          Login
        </button>
      </form>

      {/* <h1 className="heading-login">Signup</h1>
      <ul className="handwriting">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="myform" onSubmit={handleSignupSubmit}>
        <div className="handwriting">
          Name: <input name="name" type="name" />
        </div>
        <div className="handwriting">
          Password: <input name="password" type="password" />
        </div>
        <div className="handwriting">
          Password Confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button id="button-login" className="handwriting" type="submit">
          Signup
        </button>
      </form> */}
    </div>
  );
}
