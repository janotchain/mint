import React from "react";
import Card from "./Card";
import super1 from "../assets/crowd.png";
import super2 from "../assets/event.png";
import super3 from "../assets/lottery.gif";
import super4 from "../assets/super4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Crowd Funding",
      price: "https://funds-lyart.vercel.app/",
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Ticket Selling",
      price: "https://eventdapp-seven.vercel.app/",
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Lottery System",
      price: "https://dapprental.vercel.app/",
      tag: 12983,
      time: 1,

    },
    
  ];
  return (
    <div className="super-rare" id="launch">
      <div className="title-container">
        <h2 className="title">Explore the Pixieverse Ecosystem</h2>
        <p className="description">
        Experience the thrill of passive income with Pixieverse NFTs. From charity fundraisers to event ticket sales and lotteries, our ecosystem generates revenue that flows back to NFT holders, rewarding your participation and support.
        </p>
      </div>

      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            
            title={title}
           
            price={price}
            key={index}
          />
        ))}

      </div>
    </div>
  );
}
