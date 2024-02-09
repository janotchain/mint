import React from "react";
import superEth from "../assets/supereth.png";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" width={300} />
      </div>
      <div className="card-content">
        <div className="card-heading">
          
        </div>
        <div className="card-details">
          <h4 className="card-title">{title} &nbsp;&nbsp;&nbsp;</h4>
          <div className="card-price">
            <img src={superEth} alt="super eth" />
            
            <a className="link" href={price} >  Preview </a>
          </div>
        </div>
        <div className="card-sub-details">
          <span>{tag}</span>
          
        </div>
      </div>
    </div>

  );
}
