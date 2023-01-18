import React from 'react'
import ThBorder from "../Images/THBorder.png"
import "../CSS/Component.css"

const heading = (props) => {
  return (
    <div className="section-heading mt-5">
    <h4>{props.title}</h4>
        <img src={ThBorder}  alt=''/>
    </div>
  )
}

export default heading