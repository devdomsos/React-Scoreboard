import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';  
import { Consumer } from './Context';

class Player extends PureComponent {
  render() {
    const {
      index
    } = this.props;

   

    return (
      <Consumer>
        { ({actions, players}) => (
            <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => actions.removePlayer1(players[index].id) }>✖</button>
            <Icon isHighScore={this.props.isHighScore} /> 
              {players[index].name3}
            </span>
              <Counter 
                index={index}
                />
            </div>
        )}
      </Consumer>
    );

   }
  }

  Player.propTypes = {
    index: PropTypes.number,
  }

export default Player;