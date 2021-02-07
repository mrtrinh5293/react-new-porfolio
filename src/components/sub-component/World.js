import React from "react";
import Layout from "../Layout";
import Footer from "../Footer"

import world1 from "../../assets/images/X - 8.png"
import world2 from "../../assets/images/X - 9.png"
import world3 from "../../assets/images/X - 10.png"
import world4 from "../../assets/images/X - 11.png"

// This examples uses external images
import { SRLWrapper } from "simple-react-lightbox";

const World = () => {
  return (
    <Layout>
      <SRLWrapper>
        <div id="content-page-two" className="container content">
          <div className="row">
            <div className="col-md-12 col-12 col-text blueCol">
              <h1>
                World Countries
              </h1>
              <strong>
              <p style= {{marginLeft: "20px"}}>
                  SwiftUI <br />
                  JSON API <br />
                  MapKit <br />
                  Apple Store: 
                  <a
                href="https://apps.apple.com/ca/app/world-countries-and-maps/id1527465440"
              >
                  Navigate to Apple store
              </a>
            </p>
                  </strong>
              <p className="col-text-2">
                A simple App which allows Users to search Countries and mark for visited
              </p>
            </div>
            <div className="col-md-3 col-12">
              <img
                src={world1}
                
              />
            </div>
            <div className="col-md-3 col-12">
              <img
                src={world2}
                
              />
            </div>
            <div className="col-md-3 col-12">
              <img
                src={world3}
                
              />
            </div>
            <div className="col-md-3 col-12">
              <img
                src={world4}
                
              />
            </div>
            
          </div>
        </div>
      </SRLWrapper>
      <Footer></Footer>
    </Layout>
  );
};

export default World;
