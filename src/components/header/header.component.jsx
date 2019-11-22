import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import SearchField from 'react-search-field';


import './header.styles.scss';

const Header = ({ currentUser, hidden, onEnter }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />

    </Link>

    <SearchField  className='search-box'
      placeholder='Search sport'
      onEnter={onEnter}
    />
    <div className='options'>
      <Link className='option' to='/'>
        SPORTS
      </Link>
      <Link className='option' to='/'>
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
