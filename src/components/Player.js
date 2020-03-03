import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';  
import { Consumer } from './Context';

class Player extends PureComponent {
  render() {
    const {
      name1,
      score2,
      index,
      id,

    } = this.props;

   

    return (
      <Consumer>
        { context => (
            <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => context.actions.removePlayer1(id) }>✖</button>
            <Icon isHighScore={this.props.isHighScore} /> 
              {name1}
            </span>
              <Counter 
                score3={score2}
                index={index}
                />
            </div>
        )}
      </Consumer>
    );

   }
  }

  Player.propTypes = {
    
    name1: PropTypes.string.isRequired,
    score2: PropTypes.number.isRequired,
    index: PropTypes.number,
    id: PropTypes.number,
  }

export default Player;