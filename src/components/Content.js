import React from "react";
import Layout from "./Layout";
import Footer from "./Footer"
import { SRLWrapper } from "simple-react-lightbox";
import AVA from "../assets/images/pp.jpeg"
import covfefe from "../assets/images/X - 3.png"
import covid from "../assets/images/X - 5.png"
import country from "../assets/images/X - 8.png"
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <Layout>
        <div id="content-page-one" className="container content">
          <div className="row ">
            <div className="col-md-6 col-12 col-text">
              <h1 className="blueCol">About me</h1>
              <p style={{paddingLeft: "20px"}}>
              Hi, I'm Duc (John) Dang, a Junior <b className="blueCol">iOS DEVELOPER</b>. Previously, I had 2 years of experience in  
              <b className="blueCol"> Full Stack WEB DEVELOPMENT</b>, before making the switch to iOS. I am 
              a highly driven individual and a life-long learner. I enjoy solving problems 
              and am very naturally curious, which allows me to learn quickly. 
              I approach everything with a positive attitude and always aims 
              to go above and beyond expectations.
              </p>
            </div>
            <div className="col-md-6 col-12 col-image">
              <img
                src={AVA}
                alt="ducdang"
              />
            </div>
            <div className="col-12 padding-top" >
              <h1 className="blueCol">Representative Projects</h1>
              <p style={{paddingLeft: "20px"}}>
                Below are some of my self-driven projects that highlight my skillsets and strengths
                in the follow areas: <b className="blueCol">SwiftUI, JSON, Core Data, Core Animation...</b>  Some of these apps are currently active on
                the app store. I plan to continue refine these apps, build more features going forward.
                If you have any thoughts on them or feedback, I'd love to hear about it. 

              </p>
            </div>
            
            <div className="col-md-4 col-12">
              
                            <h4 className ="text-center ">
                            
              <Link className="button1" to="/world-countries">
              <img
                src={country}
                alt="World Countries"
              />
              </Link>
              <h2 className="blueCol">World Countries</h2>
              </h4>
            </div>
              <div className="col-md-4 col-12">
              
              <h4 className ="text-center">
              
              <Link className="button1" to="/covfefe">
              <img
                src={covfefe}
                alt="Covfefe shop"
                className="onHover"
              />
              </Link>
              <h2 className="blueCol">Covfefe shop</h2>
              </h4>
              
            </div>
            <div className="col-md-4 col-12">

                            <h4 className ="text-center ">
                            
              <Link className="button1" to="/covid-tracker">
              <img
                src={covid}
                alt="Covid Tracker and Maps"
                // href= "./sub-component/Covfee.js"
              />
              </Link>
              <h2 className="blueCol text-center" >Covid-19 Tracker</h2>
              </h4>
            </div>
            
            
          </div>
        </div>
  <Footer></Footer>

    </Layout>
  );
};

export default Content;
