import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

  Player.propTypes = {
    
    name1: PropTypes.string.isRequired,
    score2: PropTypes.number.isRequired,
    changeScore1: PropTypes.func.isRequired,
    index: PropTypes.number,
    id: PropTypes.number,
    removePlayer: PropTypes.func.isRequired
  }

export default Player;