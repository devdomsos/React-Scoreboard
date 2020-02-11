import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = ({ players1, title }) => {
    return (
      
      <header>
      <Stats  players2={players1} />
      <h1> {title} </h1>
      <StopWatch />
      </header>
    );
  }

  Header.propTypes = {
    
    title: PropTypes.string,
    players1: PropTypes.arrayOf(PropTypes.object)
  }

export default Header; 