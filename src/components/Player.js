import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const {
      name1,
      score2,
      changeScore1,
      index,
      id,
      removePlayer,

    } = this.props;

   

    return (
      
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
        {name1}
      </span>
        <Counter 
          score3={score2}
          changeScore2={changeScore1}
          index={index}
          />
      </div>
    );

   }
  }

export default Player;