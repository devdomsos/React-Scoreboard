import React from 'react';



class Counter extends React.Component {
   
  render () {

    const { score3, changeScore2, index } = this.props;
    
        return (
             
         <div className="counter">
               <button className="counter-action decrement" onClick={ () => changeScore2(index, -1) }>-</button>
             
             <span className="counter-score">{score3} </span>
                <button className="counter-action increment" onClick={ () => changeScore2(index,  1) }>+</button>
       
             </div>
           );
   
            }  
 }

 export default Counter;