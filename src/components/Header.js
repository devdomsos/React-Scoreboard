import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = (props) => {
    return (
      <header>
        
      <Stats  players2={props.players1} />
      <h1> {props.title} </h1>
      <StopWatch />
      </header>
    );
  }


export default Header; 