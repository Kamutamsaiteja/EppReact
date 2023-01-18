import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import mb1 from "../Images/mb1.jfif";
import mb2 from "../Images/mb2.jfif";
import mb3 from "../Images/mb3.jfif";
import mb4 from "../Images/mb4.jpg";
import pack1 from "../Images/pack1.png";
import pack2 from "../Images/pack2.png";
import pack3 from "../Images/pack3.png";
import Profile from "../Images/Profile.png";
// import EenaduLogo1 from "../Images/eenaduLogo.PNG";
import "../CSS/MainStyles.css"
import "../CSS/Component.css"
import THeading from "../components/Heading"
import Splcard from '../components/Splcards';
import BeginJourney from '../components/BeginJourney';


import { Link } from "react-router-dom";

const optionss = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    dots: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};

const HomePack=(props)=>{
    return(
        <div className="col-lg-4 col-sm-12 ">
                <div className="Homepackages mb-3 shadow" style={{backgroundColor: props.color}}>
                    <Link>
                        <img src={props.image} width={"100px"} alt=""/>
                        <div className="pack-tit">
                            <h3>{props.name}</h3>
                        </div>
                    </Link>
                </div>
            </div>
    )
};




const Home = () => {
    
  return (
    <div className='Mhome'>
            <OwlCarousel className='owl-theme m'  
            loop 
            margin={0}
            items={1} 
            dots={false} 
            autoplay={true}
            
            >
    <div className='item'>
        <div className="scrollImg">
            <img src={mb1} alt=""/>
        </div>
    </div>
    <div className='item'>
        <div className="scrollImg">
            <img src={mb2} alt=""/>
        </div>
    </div>
    <div className='item'>
        <div className="scrollImg">
            <img src={mb3} alt=""/>
        </div>
    </div>
    <div className='item'>
        <div className="scrollImg">
            <img src={mb4} alt=""/>
        </div>
    </div>
</OwlCarousel>

<div className="container ">
{/* part1 */}
<div className="subContent">
<h1 className="onlytelugu">A Soulful Platform for Telugu Marriage Introductions</h1>
    <div className="col-sm-12 quick-bg">
         <h5><span>శీఘ్రమేవ కల్యాణ ప్రాప్తిరస్తు</span> - Find your perfect match at Eenadu Pellipandiri  </h5>
         <div className="tabContent">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" > Quick Search</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" > Free Registration </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            {/* tab1 starts */}
                <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="col-sm-12 mt-3">
                        <div className="row">
                            <div className="col-lg-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option >-Looking for-</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option >Age from</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option >To</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option >-Religion-</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option >-Caste-</option>
                                    <option >One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">
                                 <button className="main-button btn" type="submit"><i className="fa fa-search" ></i> Search Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* tab1 ends */}
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="col-sm-12 mt-3">
                        <div className="row">
                            <div className="col-sm-3 mb-3 ">
                                <input type="text" className="form-control" id=""   />
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                 <select className="form-select" id=""  placeholder='Gender'>
                                    <option >Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                <input type="text" className="form-control" id=""   />
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                <select className="form-select" id="" >
                                    <option   >Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                <select className="form-select" id="" >
                                    <option  >Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                <input type="number" className="form-control" id=""   />
                            </div>
                            <div className="col-sm-3 mb-3 ">
                                <input type="email" className="form-control" id=""   />
                            </div>
                            <div className="col-sm-3 mb-3 ">
                            <button className="btn w-100 main-button" type="submit" name="submit_profile">
                                <i className="fa fa-chevron-circle-right" ></i>  Create Profile </button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>   
        </div>    
               
    </div>
    </div>
     {/* part2 */}
    <div className="col-sm-12">
            <THeading title="Featured Profiles - Telugu Brides & Telugu Grooms"/>
                <div className="row mt-3">
                <OwlCarousel className='owl-theme m'  
                loop 
                margin={0}
                items={4} 
                dots={true} 
                autoplay={true}
                {...optionss}>       
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                <div className='item'>
                    <div className="FeaturedProf">
                        <div className="FeatImg">
                             <img src={Profile} alt="" />
                        </div>
                            <ul className='fuproDetails'>
                                <li>Profile ID : <span>Ep123456</span></li>
                                <li>Caste: <span>Ep123456</span></li>
                                <li>Age : <span>Ep123456</span></li>
                                <li>Job : <span>Ep123456</span></li>
                            </ul>
                    </div>
                </div>
                    
                    </OwlCarousel>
                </div>


      </div>
      {/* part3 */}
      <div className="col-sm-12">
      <THeading title="Why Eenadu Pellipandiri ?"/>
            
                <Splcard/>
       <THeading title="Begin Your Journey with us"/>
                <BeginJourney/>


                <THeading title="Eenadu Pellipandiri Packages"/>
                <div className="col-sm-12">
            <div className="row mt-5">
                    <HomePack name="Regular"  image={pack1} color={"#ffa507"} />
                    <HomePack name="Personalized "  image={pack3} color={"#cc3333"}/>
                    <HomePack name="Parichaya Vedika"  image={pack2}  color={"#A8CD1B"} />
            </div>
        </div>
                <THeading title="Eenadu Pellipandiri Thousands of Happy Stories"/>
                <div className="col-sm-12">
            <div className="row mt-5">
                 
            </div>
        </div>
                
            
      </div>
</div>


      </div>
  )
}

export default Home