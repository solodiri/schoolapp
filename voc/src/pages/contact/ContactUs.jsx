import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <h3 style={{ textAlign: "center" }}>CONTACT US</h3>
      <div className="wrapperAll">
        <div className="wrapper">
          <h3>PORT HARCOUT </h3>
          <p>The Cooperage, Level 2, Suite 9, 5</p>
          <p>6 Bowman Street, Pyrmont</p>
          <p>NSW 2009 Port Harcourt Get directions</p>
          <p>+612 8294 9686</p>
        </div>
        <div className="wrapper">
          <h3>LAGOS</h3>
          <p>The Cooperage, Level 2, Suite 9, 5</p>
          <p>6 Bowman Street, Pyrmont</p>
          <p>NSW 2009 Lagos Get directions</p>
          <p>+612 8294 9686</p>
        </div>
        <div className="wrapper">
          <h3>ABUJA</h3>
          <p>The Cooperage, Level 2, Suite 9, 5</p>
          <p>6 Bowman Street, Pyrmont</p>
          <p>NSW 2009 Aubuja Get directions</p>
          <p>+612 8294 9686</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
