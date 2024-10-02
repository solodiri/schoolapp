import { useEffect, useRef } from "react";
import "./status.css";
import { Link } from "react-router-dom";

const Status = ({ handleToggleStatus, toggleStatus, setToggleStatus }) => {
  const statusRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!statusRef.current.contains(e.target)) {
        setToggleStatus(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });
  const closeStatus = () => {
    setToggleStatus(!toggleStatus);
  };
  return (
    <>
      <div className="status" ref={statusRef}>
        <div className="status-Wrapper">
          <div className="status-Title">
            <h2>Status</h2>
            <h5 className="status-close" onClick={closeStatus}>
              X
            </h5>
          </div>
          <div className="status-Group">
            <div>
              <ul className="statusUI">
                {/* <li className='status-list'> LogIn </li>
                        <li className='status-list'>  SingnUp </li>
                        <li className='status-list'>  LogOut</li> */}

                <li className="status-list">
                  <Link to="/logIn"> LogIn</Link>
                </li>
                <li className="status-list">
                  <Link to="/signup"> SingnUp</Link>
                </li>
                <li className="status-list" onClick={() => handleToggleStatus}>
                  LogOut
                </li>
                {/* <li className='status-list' onClick={()=>console.log('I Clicked')}> LogOut </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
