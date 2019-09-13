import React, { Component } from 'react'

export class SetLocation extends Component {
    state = {
        location: ""
    }

    // handles change and sets state based on the name of the input being changed (e.g. "name")
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
         // stops it from submitting to the file
        e.preventDefault();
         // passes up the input
        this.props.setLocation(this.state.location);
        // resets input field
        this.setState({location: ""});
        }

    render() {
        return (
            <form className="form" id="set-location" onSubmit={this.onSubmit}>
                <h2>Where are you off to?</h2>
                <input 
                    type="text" 
                    name="location" 
                    value={this.state.location}
                    onChange={this.onChange} 
                    autoComplete="off"
                    className="input"
                    id="location-input"
                    placeholder='Type a location...'
                />              
                <input 
                    type="submit" 
                    value="Set" 
                    className="button"
                    id="location-button"
                    style={{flex:"1"}}                   
                />
            </form>         
        );
    }
}

export default SetLocation
