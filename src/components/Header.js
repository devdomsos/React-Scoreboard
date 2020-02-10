import React from 'react';
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


export default Header; 