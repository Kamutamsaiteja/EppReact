import React, { useState } from "react";
import "./navbar1.css";
import Ilogo from "./Images/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar1 = () => {
  const [topen, setTopen] = useState(false);
  const handleClick = () => {
    setTopen(!topen);
  };
  return (
    <>
    <div className="sticky-top">

      <div className="col-sm-12 shadow header">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ">
                <Link to="/">
                  <img src={Ilogo} alt="Ilogo" className="Logo" width={270} />
                </Link>
            </div>
            <div className="col-sm-9">
            <ul className="navMenu2">
                  <li>
                  
                    <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <div className="loginBtn">
                        <i className="fa fa-unlock-alt"></i> Login
                      </div>
                     </Link>
                 
                  </li>
                  <li>
                    <Link  onClick={handleClick}  >
                        <i className="fa fa-bars navMenu3"></i>
                    </Link>
                  </li>
                </ul>
            <ul className="navMenu1">
                  <li>
                    <Link href="#">
                      <i className="fa fa-phone fa-icon"></i>
                      <p className="">+91 8008001686</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-mobile-phone fa-mobi"></i>
                      <p className="">App Download</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/eenadupellipandiriofficial">
                      <i className="fa fa-facebook fa-icon"></i>
                      <p className="">Follow Us</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://eenaduepp-alb-2102474685.ap-south-1.elb.amazonaws.com/newpellipandiri/customercare">
                      <i className="fa fa-comment fa-icon"></i>
                      <p className="">Leave Message</p>
                    </Link>
                  </li>
                </ul>
               
                
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
      <div className="container">
        <nav className="nav">
        <ul className="BottomNav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Packages">Packages</NavLink>
              </li>
              <li>
                <NavLink to="/Events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/Branches">Branches</NavLink>
              </li>
              <li>
                <NavLink to="/SuccessStories">Success Stories</NavLink>
              </li>
              <li>
                <NavLink to="/Blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              {/* <li>
                <Link to="/contactus">Help</Link>
              </li> */}
            </ul>
        {topen && ( <ul className="BottomNavmini">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Packages">Packages</NavLink>
              </li>
              <li>
                <NavLink to="/Events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/Branches">Branches</NavLink>
              </li>
              <li>
                <NavLink to="/SuccessStories">Success Stories</NavLink>
              </li>
              <li>
                <NavLink to="/Blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              {/* <li>
                <Link to="/contactus">Help</Link>
              </li> */}
            </ul> )}
        </nav>
      </div>
      </div>
          
    </div>
    {/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      <div className="modal-header border-0 pb-0">
        <h5 className="modal-title text-white" id="staticBackdropLabel">.</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body pt-0">
          <div className="col-sm-12 py-3 px-2 lPage">
            <div className="row">
            <div className="PLOGIN">
              <img src={Ilogo} alt="Ilogo" className="Logo"  />
              <h3>LOGIN</h3>
            </div>
            <div className="col-sm-12">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label >Profile Id / Email address / Mobile No</label>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label >Enter Password</label>
              </div>
            </div>
            <div className="col-sm-12">
              <div className=" d-flex justify-content-around">
                <div className="col-sm-6 form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" >
                    Show Password
                  </label>
                </div>
                <div className="col-sm-6 ">
                    <p className="float-end">Forget Password ?</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <button type="submit" className="SignIn btn" to="/MyHome">Sign In</button>
            </div>
            <h4 className="text-center py-2">Or</h4>
            <div className="col-sm-12">
              <Link className="RequestOTP btn">Request OTP</Link>
            </div>
              
            </div>
          </div>
      </div>
      
    </div>
  </div>
</div>
      </>
  );
};

export default Navbar1;
