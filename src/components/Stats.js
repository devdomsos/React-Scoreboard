import React from 'react';


const Stats = (props) => {

    const playerCount= props.players2.length; 

    const totalScore = props.players2.reduce((total, player) => {
        return total + player.score5;

    }, 0)

    console.log(props.players2, 'props');
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

export default Stats;