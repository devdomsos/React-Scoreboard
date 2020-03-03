import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

class Counter extends React.Component {

  render () {

    const { index } = this.props;
    
        return (
          <Consumer>
             {/* implicit return */}
            { ({actions, players}) => (
               <div className="counter">
               <button className="counter-action decrement" onClick={ () => actions.changeScore1(index, -1) }>-</button>
             
             <span className="counter-score">{players[index].score5} </span>
                <button className="counter-action increment" onClick={ () => actions.changeScore1(index,  1) }>+</button>
       
             </div>
            ) }
          </Consumer>
           );
   
            }  
 }

 Counter.propTypes = {
  index: PropTypes.number
};

 export default Counter;