import React from 'react';
import { Consumer } from './Context';


const Stats = () => {
    return (
    <Consumer> 
        { context => {

                const playerCount= context.players.length; 
                const totalScore = context.players.reduce((total, player) => {
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
        }}
    </Consumer>
  );

}
export default Stats;