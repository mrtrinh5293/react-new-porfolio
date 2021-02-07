import React from "react";
import SRLLogo from "../assets/images/DD.png";
import { withSRLContext } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import samplePDF from "./duc_resume.pdf"
/*
We can use an High Order Component to pass the context and use the methods provided
in case we want to open the lightbox from a button or anything :)
*/

// Pass the props as an argument
const Header = props => {
  return (
    <div id="header">
      <div className="container">
        <div className="row align-items-end">
          <div className="SRL_Logo col-md-6 col-12 blueCol">
          <Link to="/">            
          <img
              src={SRLLogo}
              alt="Duc Dang' Porfolio"
            />
            </Link>

          </div>
          <div className="col-md-6 col-12 blueCol">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/others-projects/">Others Projects</Link>
                </li>

                <li>
                <a href={samplePDF} className="col-text-2">Resume</a>
                </li>

                <li>
                  <Link to="/resume/"></Link>
                </li>
              </ul>
            </nav>
            {/* <div className="SRL_CTA"> */}
              {/* <button
                className="SRL_CTA-OpenLightbox"
                // Pass the method that you receive with the HOC
                onClick={props.openLightbox}
              >
                Open the lightbox
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap your component using the provided HOC
export default withSRLContext(Header);
