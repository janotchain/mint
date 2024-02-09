import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title"> Engage with Purpose</h2>
          <p className="description">
          At Pixieverse, we believe in the power of purpose-driven engagement.
          </p>
          <p className="description">
          interaction within our ecosystem contributes to meaningful causes, fosters creativity, and enriches the community fabric.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Transparent Governance</h2>
          <p className="description">
          Our ecosystem operates on principles of transparency and fairness.
          </p>
          <p className="description">
          Revenue distribution mechanisms are designed to ensure equitable participation and rewards for all NFT holders, fostering a culture of trust and accountability.
          </p>
        </div>
      </div>
    </div>
  );
}
