import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = () => {
    return (
      
      <header>
      <Stats />
      <h1> Ladderboard </h1>
      <StopWatch />
      </header>
    );
  }

export default Header; 