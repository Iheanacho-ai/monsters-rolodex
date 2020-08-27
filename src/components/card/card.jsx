import React from 'react';
import './card.css'
const Card = props => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="pic"/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            {console.log(props)}
            
        </div>
    )
}

export default Card;