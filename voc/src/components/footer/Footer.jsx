import { useRef } from "react";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // const setYear = ()=>{
  //   const yearly = new Date().getFullYear()
  //   return yearly

  // }
  // console.log(setYear())

  return (
    <>
      <div className="footer-Back">
        <div className="footer">
          <div className="footerNote">
            <h5>EDUCATION</h5>

            <ul className="footnote">
              <Link to="/courses">
                <li className="footlist">
                  ▶ Welding Technology Training Center
                </li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Education Programs</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Education Projucts</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Register for Classes</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Education Portal</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Education Foundation</li>
              </Link>
            </ul>
          </div>

          <div className="footerNote">
            <h5>INDUSTRY</h5>
            <ul className="footnote">
              <Link to="/courses">
                <li className="footlist">▶ Automotive/Transportation</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ General Fabrication</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Heavy Fabrication</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Maintenance/Repairs</li>
              </Link>

              <Link to="/courses">
                <li className="footlist">▶ ShipBuilding</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ PowerGeneration</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Structural</li>
              </Link>
            </ul>
          </div>

          <div className="footerNote">
            <h5>SAFETY</h5>

            <ul className="footnote">
              <Link to="/courses">
                <li className="footlist">▶ Safety DataSheet</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Welding Saety Trianing</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Safety PPE Products</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Weld Fume Control</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Offshore Safety</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ PipeLine</li>
              </Link>
            </ul>
          </div>

          <div className="footerNote">
            <h5>SUPPORT</h5>
            <ul className="footnote">
              <Link to="/courses">
                <li className="footlist">▶ Product Registration</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Certifcate Center</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Resource Center</li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Operation Manuel </li>
              </Link>
              <Link to="/courses">
                <li className="footlist">▶ Support Center</li>
              </Link>
              <Link to="/contact">
                <li className="footlist">▶ Contact us</li>
              </Link>
              <Link to="/about">
                <li className="footlist">▶ About Us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="conditions">
          <Link to="/condition">
            <span className="terms">Terms & Conditions </span>
          </Link>
          <span>| </span>
          <Link to="/privacy">
            <span className="privacy">Privacy Policy </span>
          </Link>
        </div>
        ;
        <div>
          <h3 className="copy-right">
            © Copyright | vocschool.com 2018 -{new Date().getFullYear()} | All
            Rights Reserved | Powered by Diri
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
