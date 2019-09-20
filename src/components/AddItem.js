import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        name: ""
    }

    // handles change and sets state based on the name of the input being changed (e.g. "name")
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        if(this.state.name == "") {
            e.preventDefault();
            return alert("You can't bring nothing to camp :) Try adding an item again!")
        }
        // stops it from submitting to the file
        e.preventDefault();
        // passes up the input
        this.props.addItem(this.state.name);
        // resets input field
        this.setState({name: ""});
    }

    render() {
        return (
            <form className="form" id="item-form" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Add an item..." 
                    value={this.state.name} 
                    onChange={this.onChange}
                    autoComplete="off"
                    className="input"
                    id="item-input"
                />              
                <input 
                    type="submit" 
                    value="Add" 
                    className="button"
                    id="add-button"                                    
                />
            </form>         
        );
    }
}

export default AddItem
