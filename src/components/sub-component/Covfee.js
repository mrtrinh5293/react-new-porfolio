import React from "react";
import Layout from "../Layout";
import covfefe4 from "../../assets/images/X - 4.png"
import covfefe1 from "../../assets/images/X - 1.png"
import covfefe2 from "../../assets/images/X - 2.png"
import covfefe3 from "../../assets/images/X - 3.png"
import covfefe5 from "../../assets/images/ X - 17.png"
import covfefe6 from "../../assets/images/ X - 18.png"

// This examples uses external images
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../Footer";

const Covfee = () => {
  return (
    <Layout>
      <div className="container content">
        <div className="row">
          <div className=" col-text">
          <h1 className="blueCol">
                Covfefe Shop
              </h1>
              <p className="col-text-2" style= {{marginLeft: "20px"}}>
              A Coffee shop app inspired by Starbucks Coffee App</p>
              <div className="">
              <strong>
              <p style= {{marginLeft: "20px"}} className="blueCol">
                  SwiftUI <br />
                  FireBase<br />
                  FireBase Authentication <br />
                  JSON API <br />
                  Apple Store: Not avaiable
            </p>
                  </strong>
              </div>

          </div>
        </div>
      </div>
      <SRLWrapper>
        <div id="content-page-two" className="container content">
          <div className="row">
            <div className="col-md-5 col-12 col-text-2">
              <h2 className="blueCol">
                Admin View 
              </h2>
              <p>
                  Summary of Users' Orders<br />
                  Admin is able to check Users' profile <br />
                  <br />
                  Therefore, Admin doesn't have to login into Firebase console to check user' 
                  activities and Orders.

              </p>
            </div>
            <div className="col-md-5 col-6 col-image-small">
              <img
                src={covfefe5}
                alt="Admin View - Orders"
              
              />
              <img
                src={covfefe6}
                alt="Admin View - User profile"
              
              />
            </div>
            
            <div className="col-md-5 col-12 col-image-small">
              <img
                src={covfefe1}
                alt="User View"
                style= {{marginLeft: "100px", marinTop: "30px"}}
              />
              </div>
            
            <div className="col-md-6 col-12 col-text-2" style={{paddingTop: "10%"}}>
              <h1 className="blueCol">User View</h1>
              <p>
              
                
                Since this project is focusing in UI/UX design, I did not 
                implement payment method. However, User still have to Sign Up and Sign In 
                to be able to add items to basket and place the order. 
                Theres is also options for user in case of 
                password is forgotten. Firebase is being use for database, which stores user's information
                and all of active and completed orders.

              </p>
            </div>
            <div className="col-11 col-sm-4 col-image-half">
            <img
                src={covfefe2}
                alt="User View"
              />
            </div>
            <div className="col-11 col-sm-4 col-image-half">
            <img
                src={covfefe3}
                alt="User View"
              />
            </div>
                        <div className="col-11 col-sm-4 col-image-half">
            <img
                src={covfefe4}
                alt="User View"
              />
            </div>
          </div>
        </div>
      </SRLWrapper>
      <Footer></Footer>
    </Layout>
    );
};

export default Covfee;
