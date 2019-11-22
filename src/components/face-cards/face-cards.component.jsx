import React from 'react';
import './card.styles.scss';


const MembersData = [
  {
    "name": "AMISHA",
    "email": "sinhaamisha09@gmail.com"
    "image": '',
    id: 1,
    
  },
  {
    "name": "HIMADRI",
    "email": "himsingh1612@gmail.com"
    "image": '',
    id: 2,
    
  },
  {
    "name": "RINI",
    "email": "rindipandey1910@gmail.com"
    "image": '',
    id: 3,
   
  },     
   {
    "name": "TRUSHITA",
    "email": "trushitaagarwals@gmail.com"
    "image": '',
    id: 4,
    
  }        
]

export const Card = props => (
  <div className='card-container'>
    <img
      alt={props.members.name}
      src={``}
    />
    <h2> {props.member.name} </h2>
    <p> {props.member.email} </p>
  </div>
);