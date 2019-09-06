import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        name: ""
    }

    // handles change and sets state based on the name of the input being changed (e.g. "name")
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        // stops it from submitting to the file
        e.preventDefault();
        // passes up the input
        this.props.addItem(this.state.name);
        // resets input field
        this.setState({name: ""});
    }

    render() {
        return (
            <form className="text-center addItem" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Add an item..." 
                    value={this.state.name} 
                    onChange={this.onChange}
                    style={{flex: "10", marginRight: "5px"}}
                    autoComplete="off"
                />              
                <input 
                    type="submit" 
                    value="Add" 
                    className="add-btn"
                    style={{flex:"1"}}                   
                />
            </form>         
        );
    }
}

export default AddItem
