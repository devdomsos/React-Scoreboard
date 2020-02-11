import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({players2}) => {

    const playerCount= players2.length; 

    const totalScore = players2.reduce((total, player) => {
        return total + player.score5;

    }, 0)

    return (
    <table className="stats">
        <tbody>
        <tr>
            <td>Players:</td>
            <td>{playerCount}</td>
        </tr>
        <tr>
            <td>Total Points:</td>
            <td>{totalScore}</td>
        </tr>
        </tbody>
    </table>
  
  );

}

Stats.propTypes = {
    
   
    players2: PropTypes.arrayOf(PropTypes.object)
  }

export default Stats;