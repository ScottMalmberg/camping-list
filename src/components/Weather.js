import React, { Component } from 'react'

export class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            forecast: []
        };
    }
    
    componentWillMount() {
        fetch('https://api.darksky.net/forecast/8b8ccb77c80ab76e352e9a5d8a96204c/47.286969987486124,-115.3384599811145?exclude=[currently,minutely,hourly,alerts,flags]')
        .then(results => {
            console.log(results.json())
            return results.json();
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Weather
