import React from 'react';
import TournamentCard from '../../components/tournament/tournament.component';
import Video from '../../components/video/video.component.jsx';
import './sportspage.styles.scss';

const SportsPage = () =>  (
	<div className='sportspage'>
		<TournamentCard/>	
		<Video/>
	 </div>
);


export default SportsPage;