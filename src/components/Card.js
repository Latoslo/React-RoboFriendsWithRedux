// import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}`} alt="pokeman" />
      <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
