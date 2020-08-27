import React from 'react';
import './card-list.css';
import Card from "../card/card";


const CardList = props => (
    <div className= "card-list">
        {props.monsters.map(monster => (
            <Card name= {monster.name} email = {monster.email} id = {monster.id} />
        ))}
    </div>
)

export default CardList;