import React, { useState } from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import { SRLWrapper } from "simple-react-lightbox";
import resume from "../assets/images/sc1.png"
import resume1 from "../assets/images/sc2.png"
import resume2 from "../assets/images/sc3.png"


// This examples uses external images

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
        <div id="content-page-one" className="container content">
          <div className="row text-center">
            <img
                src={resume}
                alt="resume"
                style={{width: "100%", paddingTop: "10%"}}
              />
                          <img
                src={resume1}
                alt="resume"
                style={{width: "100%"}}
              />
                          <img
                src={resume2}
                alt="resume"
                style={{width: "100%"}}
              />
              {/* <Document 
              file= {resumePDF}
              onLoadSuccess={onDocumentLoadSuccess}
              >
      {/* <Page pageNumber={1} /> */}
    {/* </Document> */} 
              </div>  
              </div>            
    
      <Footer></Footer>
    </Layout>
  );
};

export default Resume;
