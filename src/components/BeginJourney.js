import React from "react";
import BJorney from "../EpApis/BJorney.json";

const BeginJourney = () => {

  return (
    <div className="col-xl-12 col-md-6 col-sm-8 mt-5">
    <div className="row d-flex justify-content-center align-items-center mx-auto">
       <ul className="processBorder">
       {BJorney.map((Jrlist)=>{
        return(
          <li  key={Jrlist.id}>
        <i className={Jrlist.Iconss}></i>
        <h6>{Jrlist.title}</h6>
        </li>
        )
       })}
     </ul>
    </div>
    </div>
  );
};

export default BeginJourney;
