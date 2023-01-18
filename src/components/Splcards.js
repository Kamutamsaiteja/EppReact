import React from "react";
import WhyEpp from "../EpApis/WhyEpp.json";

const Splcard = () => {

  return (
    <div className="row d-flex justify-content-center">
      {WhyEpp.map((reccd) => {
        return (
          <div className="splcard" key={reccd.id}>
            <div className="splcard-inner">
              <div className="splcard-front">
                <div className=" col-sm-12 spltext1">
                  {/* <img  src={EenaduLogo1} alt="" /> */}
                  <i className={reccd.Iconss}></i>
                  <h6 className="mt-3"> {reccd.title}</h6>
                </div>
              </div>
              <div className="splcard-back">
                <div className="spltext1">
                  <h6>
                    <ul className="spl-pt">
                      {reccd.listss &&
                        reccd.listss.map((WhyEpp,index) => (
                          <div className="" key={index} >
                            <li style={{ listStyle: "disc" }}  >{WhyEpp}</li>
                          </div>
                        ))}
                    </ul>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Splcard;
