import React from "react";

import "./CryptoCard.css";

const CryptoCard = ({ image, name, price }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={image} alt={name} />
      </div>
      <div className="card_info">
        <h2 title={name}>
          {name.length > 10 ? name.slice(0, 10) + ".." : name}
        </h2>
        <h3>${price.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CryptoCard;
