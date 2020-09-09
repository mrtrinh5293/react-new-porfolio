import React from "react";
import Layout from "./Layout";

import GOT1 from "../assets/images/ X - 8.png"
import GOT2 from "../assets/images/ X - 9.png"
import RAY1 from "../assets/images/ X - 15.png"
import RAY2 from "../assets/images/ X - 16.png"
import Footer from "./Footer"

// This examples uses external images
import { SRLWrapper } from "simple-react-lightbox";

const ContentPageTwo = () => {
  return (
    <Layout>
      <SRLWrapper>
        <div id="content-page-two" className="container content">
          <div className="row">
            <div className="col-md-6 col-12 col-text col-text-2">
              <h1 className="blueCol">
                Game Of Throne Character
              </h1>
              <strong>
              <p style= {{marginLeft: "20px"}} className="blueCol">
                  UIKit <br />
                  JSON API <br />
                  Apple Store:                   <a
                href="https://apps.apple.com/ca/app/world-countries-and-maps/id1527465440"
              >
                 Navigate to Apple store
              </a>
            </p>
                  </strong>
              <p>
                A Basic app which display all characters from Game of Throne.

              </p>
            </div>
            <div className="col-md-5 col-6 col-image-small">
              <img
                src={GOT2}
                alt="Admin View - Orders"
              
              />
              <img
                src={GOT1}
                alt="Admin View - User profile"
              
              />
            </div>
            </div>
            </div>
            <div id="content-page-two" className="container content">
          <div className="row">

            <div className="col-md-5 col-6 col-image-small">
              <img
                src={RAY1}
                alt="Admin View - Orders"
              
              />
              <img
                src={RAY2}
                alt="Admin View - User profile"
              
              />
            </div>
            <div className="col-md-6 col-6 col-text col-text-2 ">
              <h1 className="blueCol">Raywenderlich Practical Example</h1>
              <p style= {{marginLeft: "20px"}} className="blueCol">
              <strong>
                  SwiftUI <br />
                  JSON API <br />
                  Core Data <br />
                  <a
                href="https://github.com/mrtrinh5293/ios-interview/tree/master/Practical%20Example/RW_interview_prep2"
              >
                 Navigate Git Hub
              </a>

              </strong>
              </p>
              <p>
              An app that fetches and displays raywenderlich.com articles and video courses.
              I used Core Data to save fetched JSON API and display useful informations. The design and
              layout is insprired by official Raydwenderlich app
              </p>
            </div>
          </div>
        </div>
      </SRLWrapper>
      <Footer></Footer>
    </Layout>
  );
};

export default ContentPageTwo;
