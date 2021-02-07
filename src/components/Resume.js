import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import Layout from "./Layout";
import Footer from "./Footer";
import resume from "../assets/images/sc1.png"
import resume1 from "../assets/images/sc2.png"


import samplePDF from "./duc_resume.pdf"


// This examples uses external images

const Resume = () => {

  return (
    <Layout>
        <div id="content-page-one" className="container content">
          <div className="row text-center">
          <a href={samplePDF} className="col-text-2">Download PDF</a>
            <img
                src={resume}
                alt="resume"
                style={{width: "90%"}}
              />
                          <img
                src={resume1}
                alt="resume"
                style={{width: "90%"}}
              />
                {/* <div className="all-page-container">
                    <AllPagesPDFViewer pdf={samplePDF} />
                </div> */}
              </div>  
              </div>            
    
      <Footer></Footer>
    </Layout>
  );
};

export default Resume;
