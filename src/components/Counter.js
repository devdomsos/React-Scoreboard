import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

class Counter extends React.Component {

  render () {

    const { score3, index } = this.props;
    
        return (
          <Consumer>
             {/* implicit return */}
            { context => (
               <div className="counter">
               <button className="counter-action decrement" onClick={ () => context.actions.changeScore1(index, -1) }>-</button>
             
             <span className="counter-score">{score3} </span>
                <button className="counter-action increment" onClick={ () => context.actions.changeScore1(index,  1) }>+</button>
       
             </div>
            ) }
          </Consumer>
           );
   
            }  
 }

 Counter.propTypes = {
  score3: PropTypes.number, 
  index: PropTypes.number
};

 export default Counter;