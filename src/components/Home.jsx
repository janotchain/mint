import React from "react";
import home from "../assets/400m.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Minting Live(28 Matic)</p>
          <h1 className="title">Your Gateway to a Thriving Digital Ecosystem</h1>
          <p className="description" id="about">
          Welcome to Pixieverse NFTs, where creativity meets utility, and digital assets become engines of prosperity. As the premier utility-based NFT platform hosted on the Polygon network, Pixieverse NFTs offer a transformative experience for collectors, creators, and enthusiasts alike.
          </p>
          <a href="#mint"><button>Mint Now !</button></a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
