import React from 'react';
import Counter from './Counter';

const Player = (props) => {

   
    return (
      
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.name1}
      </span>
        <Counter 
          score3={props.score2}
          changeScore2={props.changeScore1}
          index={props.index}
          />
      </div>
    );
  }

export default Player;