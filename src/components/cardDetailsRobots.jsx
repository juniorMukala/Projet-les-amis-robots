import React from 'react'
const CardDetailsRobots = ({url, name, email, username, phone, website, company, Click}) => {
  return(
    <>
    <div className='card' onClick={Click}>
    <div id="Card--Photo">
        <img src={url} id="Url" alt="robot" />
      </div>
      <div id="Card--Prenom_Nom">name : {name}</div>
      <div id="Card--Mail">email : {email}</div>
      <div id="Card--Mail">username : {username}</div>
      <div id="Card--Mail">phone : {phone}</div>
      <div id="Card--Mail">website: {website}</div>
      <div id="Card--Mail">company : {company}</div>
    </div>
  </>
  )
}
export default CardDetailsRobots