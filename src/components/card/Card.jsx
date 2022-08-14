import React from 'react'
import "./card.css"

const Card = ({...profile}) => {
  return (
    <div className="profile">
      <img src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
}

export default Card