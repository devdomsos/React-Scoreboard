import React from 'react';



class Counter extends React.Component {
   
  render () {
    let index = this.props.index;
  
        return (
             
         <div className="counter">
               <button className="counter-action decrement" onClick={ () => this.props.changeScore2(index, -1) }>-</button>
             
             <span className="counter-score">{this.props.score3} </span>
                <button className="counter-action increment" onClick={ () => this.props.changeScore2(index,  1) }>+</button>
       
             </div>
           );
   
            }  
 }

 export default Counter;