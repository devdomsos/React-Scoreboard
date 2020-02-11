import React, { Component } from 'react';

class AddPlayerForm extends Component {

    userInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.userInput.current.value);
        // e.currentTarget.reset();
    }

    render () {
      
        return (
            <form onSubmit={this.handleSubmit}> 
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
        );
    }
}

export default AddPlayerForm;