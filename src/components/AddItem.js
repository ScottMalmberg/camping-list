import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: ""
    }

    // handles change and sets state based on the name of the input being changed (e.g. "title")
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        // stops it from submitting to the file
        e.preventDefault();
        // passes up the input
        this.props.addItem(this.state.title);
        // resets input field
        this.setState({title: ""});
    }

    render() {
        return (
          <form className="form-inline" onSubmit={this.onSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="Add an item..." 
                value={this.state.title} 
                onChange={this.onChange}
            />

            <input 
                type="submit" 
                value="Add to List" 
                className="btn"
            />
          </form>
        );
    }
}

export default AddItem
