import React from 'react';

const Card = (props) => {
  const {Click}=props;
    return (
        <>
        <div className='card' onClick={Click}>
        <div id="Card--Photo">
            <img src={props.url} id="Url" alt="robot" />
          </div>
          <div id="Card--Prenom_Nom">{props.name}</div>
          <div id="Card--Mail">{props.email}</div>
        </div>
      </>
  );
};

export default Card;