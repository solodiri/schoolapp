import { useState } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getName = (e) => {
    setName(console.log(e.target.value));
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(console.log(e.target.value));
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(console.log(e.target.value));
    setPassword(e.target.value);
  };

  const handle_Submit = (e) => {
    // event.prevent.Default()
    e.prevent.Default();
    console.log("I Have Submitted the form");
  };

  return (
    <>
      <div className="logIn-Model">
        <div className="logIn-Wrapper">
          <div className="logIn-Title">
            <h2>Sign Up Page</h2>
          </div>
          <form className="input-Group" onSubmit={() => handle_Submit}>
            <input
              className="input-Text"
              type="text"
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={getName}
              autoComplete="on"
            />
            <input
              className="input-Text"
              type="text"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={getEmail}
              autoComplete="on"
            />
            <input
              className="input-Text"
              type="text"
              placeholder=" Enter Your Password"
              id="password"
              value={password}
              onChange={getPassword}
              autoComplete="on"
            />
            <button type="submit" className="input-Text input-btn">
              Sign Up
            </button>
            <p>
              If you have an Existing Account
              <strong className="strong-btn">
                <Link to="/logIn">Log In</Link>
              </strong>
            </p>

            {/* <p>{name}</p>
                <p>  {email}</p>
                <p> {password}</p> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
