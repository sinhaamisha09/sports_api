import React from 'react';
import FaceCard  from '../card/card.component';
import './card-list.style.css';

export const CardList = props => (
	<div className='card-list'>
		{ props.members.map( member => (
			<FaceCard key={ member.id } member={member} />
		  ))}
    </div>
);