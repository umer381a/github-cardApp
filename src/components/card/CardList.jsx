import React from 'react'
import Card from './Card';
import "./card.css"

const CardList = ({profiles}) => {
    return (
        <div>
            {profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    );
}

export default CardList