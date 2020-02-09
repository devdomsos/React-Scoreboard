import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {

    console.log(this.props.name1, "rendered");

    return (
      
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id) }>✖</button>
        {this.props.name1}
      </span>
        <Counter 
          score3={this.props.score2}
          changeScore2={this.props.changeScore1}
          index={this.props.index}
          />
      </div>
    );

   }
  }

export default Player;