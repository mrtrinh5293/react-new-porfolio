import React from "react";
import Layout from "../Layout";

import covid1 from "../../assets/images/X - 5.png"
import covid2 from "../../assets/images/X - 6.png"
import covid3 from "../../assets/images/X - 7.png"

// This examples uses external images
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../Footer";

const Covid = () => {
  return (
    <Layout>
      <div className="container content">
        <div className="row">
          <div className="col 12 col-text blueCol">
          <h1>
                Covid-19 Tracker
              </h1>
              <strong>
              <p style= {{marginLeft: "20px"}}>
                  SwiftUI <br />
                  JSON API <br />
                  MapKit <br />
                  Apple Store: Not avaiable
            </p>
                  </strong>
          </div>
        </div>
      </div>
      <SRLWrapper>
        <div id="content-page-two" className="container content">
          <div className="row">
            <div className="col-md-12 col-12 col-text col-text-2">
              <p>
                A Covid-19 Tracker using JSON API to get the most updated of basic information about covid cases
                of all countries. User can check for more detail of each country. A Map is provided with coordinator
                and basic information of Covid-19 cases
              </p>
            </div>
            <div className="col-4 col-sm-4 col-image-half">
              <img
                src={covid1}
                
              />
            </div>
            <div className="col-4 col-sm-4 col-image-half">
              <img
                src={covid2}
                
              />
            </div>
            <div className="col-4 col-sm-4 col-image-half">
              <img
                src={covid3}
                
              />
            </div>
          </div>
        </div>
      </SRLWrapper>
      <Footer></Footer>
    </Layout>
  );
};

export default Covid;
