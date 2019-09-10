import React, { Component } from 'react'
import uuid from 'uuid';
import SetLocation from './SetLocation'

export class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: "",
            minTemp: [],
            maxTemp: []    
        };
    }
    



    setLocation = (location) => {
        this.setState({location})

        fetch('http://api.weatherbit.io/v2.0/forecast/daily?city=' + location + '&units=I&days=5&key=45215d29d9a7469e97f7d9879eaa6e0f')
        .then(response => {
            return response.json();
        })
        .then(results => {
            console.log(results);
            results.data.map(day => {
                return this.setState({minTemp: [...this.state.minTemp, Math.round(day.min_temp)], maxTemp: [...this.state.maxTemp, Math.round(day.max_temp)]})   
            })
        })
    }
    
    render() {
        const {minTemp, maxTemp} = this.state;
        const forecast = minTemp.map((min, i) => 
            <div className="col" key= {uuid.v4()}>
                <h3>Day {i+1}</h3>
                <br/>
                <p>High: {maxTemp[i]}</p>
                <p>Low: {min}</p> 
            </div>
        )
        
        if(!this.state.location) {
            return (
                <div className="row justify-content-center">
                    <SetLocation setLocation={this.setLocation}/>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    {forecast}
                </div>
            )
            
        }
        
    }
}

export default Weather
