import React from "react";
import signup from "../assets/790m.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Minting Live (28 Matic)</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
          Embark on a journey of exploration, innovation, and community empowerment with Pixieverse NFTs. Whether you're a collector, creator, or enthusiast, there's a place for you in our digital universe. Mint your Pixieverse NFTs today and unlock a world of endless possibilities.
          </p>
          <a href="#mint"><button>Mint Now !</button></a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
        
      </div>
      <div className="center" id="mint"><iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x0cBF1C44bc8591fc811Ad24aB27603581796800A&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=b8ae913c4b8fd18446e29ca7d06f3022&theme=dark&primaryColor=blue"
    width="auto"
    height="600px;"
></iframe></div>
    </div>
  );
}
