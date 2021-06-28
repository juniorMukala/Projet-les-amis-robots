import React from "react";

const Card = ({ url, name, email, Click }) => {
  return (
    <>
      <div className="card" onClick={Click}>
        <div className="cardPhoto">
          <img src={url} id="Url" alt="robot" />
        </div>
        <div className="cardPrenom">{name}</div>
        <div className="cardMail">{email}</div>
      </div>
    </>
  );
};

export default Card;
