import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import SearchBox from '../search-box/search-box.component.jsx'

import './header.styles.scss';

const Header = ({ currentUser, hidden, onEnter }) => (
  <div className='header'>
    <div className='title'>
      <Link className='logo-container' to='/sports'>
        <Logo className='logo' />
      </Link>
      <h1>SPORTS API</h1>
     </div> 

    <div className='options'>
      <SearchBox className='search-box'/>
      <Link className='option' to='/sports'>
        SPORTS
      </Link>
      <Link className='option' to='/contacts'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
