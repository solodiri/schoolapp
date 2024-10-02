import { Link, useNavigate } from "react-router-dom";
import { myLogIn } from "../../database";

import "./logIn.css";
import { useState } from "react";

const LogIn = () => {
  const navigate = useNavigate();

  // console.log(myLogIn)

  const [nameLog, setNameLog] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [wrongCridentials, setWrongCridentials] = useState(false);

  const getNameLog = (e) => {
    // setName( console.log(e.target.value))
    setNameLog(e.target.value);
    // console.log(nameLog);
    // console.log( setName( e.target.value) )
  };
  const getEmailLog = (e) => {
    // setName( console.log(e.target.value))
    setEmailLog(e.target.value);
    // console.log( setName( e.target.value) )
  };

  const wCridentials = () => {
    setWrongCridentials(true);
    setTimeout(() => {
      setWrongCridentials(false);
    }, 2000);
  };

  const submitedData = () => {
    const loog = nameLog === myLogIn.name && emailLog === myLogIn.email;
    console.log(loog);
    // if (name === myLogIn.name && email === myLogIn.email) {
    if (loog) {
      console.log("Grant Access");
      return navigate("/");
    } else console.log("Access Not Granted");
    wCridentials();
    setNameLog("");
    setEmailLog("");
  };

  return (
    <>
      <div className="logIn-Model">
        <div className="logIn-Wrapper">
          <div className="logIn-Title">
            <h2>LogIn Page</h2>
          </div>
          <div className="input-Group">
            {wrongCridentials && (
              <p style={{ color: "red" }}>U have Wrong Cridentials</p>
            )}
            <input
              className="input-Text"
              type="text"
              placeholder="Enter Your Email"
              id="nameLog"
              value={nameLog}
              onChange={getNameLog}
            />
            <input
              className="input-Text"
              type="text"
              placeholder=" Enter Your Password"
              id="emailLog"
              value={emailLog}
              onChange={getEmailLog}
            />
            <button
              type="submit"
              className="input-Text input-btn"
              onClick={() => submitedData()}
            >
              Log In
            </button>
            {/* <Link to='/'><button className='input-Text input-btn' > Log In </button></Link> */}
            <p>
              If you don't have an account{" "}
              <strong
                className="strong-btn"
                onClick={() => console.log("clicked1")}
              >
                <Link to="/signUp"> Sign Up</Link>
              </strong>
            </p>
          </div>
          <p>{nameLog}</p>
          <p>{emailLog}</p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
