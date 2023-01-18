import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbarr from './Navbar1';
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import Events from './Pages/Events';
import Branches from './Pages/Branches';
import SuccessStories from './Pages/SuccessStories';
import Blog from './Pages/Blog';
import LeaveMessage from './Pages/LeaveMessage';
import Feedback from './Pages/Feedback';
import FAQS from './Pages/FAQS';
import FraudAlertTips from './Pages/FraudAlertTips';
import ReportFraudGrievance from './Pages/ReportFraudGrievance';
import Contactus from './Pages/Contactus';
import About from './Pages/About';
import MyHome from './Pages/MyHome';







const App = () => {

  return (
<>

<Navbarr/>
<div className="moveTo1">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/MyHome" element={<MyHome/>}/>
    <Route path="/Packages" element={<Packages/>}/>
    <Route path="/Events" element={<Events/>}/>
    <Route path="/Branches" element={<Branches/>}/>
    <Route path="/SuccessStories" element={<SuccessStories/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/LeaveMessage" element={<LeaveMessage/>}/>
    <Route path="/Feedback" element={<Feedback/>}/>
    <Route path="/FAQS" element={<FAQS/>}/>
    <Route path="/FraudAlertTips" element={<FraudAlertTips/>}/>
    <Route path="/ReportFraudGrievance" element={<ReportFraudGrievance/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
</div>





</>

    
  ); 
}

export default App


