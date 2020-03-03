import React, { Component } from 'react';
import { Consumer } from './Context';

class AddPlayerForm extends Component {

    userInput = React.createRef();

    render () {
      
        return (
            <Consumer>{ context => {

               const handleSubmit = (e) => {
                    e.preventDefault();
                    context.actions.addPlayer1(this.userInput.current.value);
                    e.currentTarget.reset();
                }
                return ( 
                    <form onSubmit={handleSubmit}> 
                        <input
                        type="text"
                        ref={this.userInput}
                        
                        placeholder="Enter a player name"
        
                        />
                        <input 
                        type="submit"
                        value="Add Player"
                        />
                    
                    </form>
                )
            }}</Consumer>
        );
    }
}

export default AddPlayerForm;