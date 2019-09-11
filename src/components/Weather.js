import React, { Component } from 'react'
import uuid from 'uuid';
import SetLocation from './SetLocation'

export class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: "",
            minTemp: [],
            maxTemp: [],
            dates: []    
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
                return this.setState({
                    minTemp: [...this.state.minTemp, Math.round(day.min_temp)], 
                    maxTemp: [...this.state.maxTemp, Math.round(day.max_temp)],
                    dates: [...this.state.dates, day.datetime.split('-').join()]
                })   
            })
        })
    }
    
    render() {
        const {minTemp, maxTemp, dates} = this.state;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const forecast = minTemp.map((min, i) => 
            <div className="col" key= {uuid.v4()}>
                <h3>{days[new Date(dates[i]).getDay()]}</h3>
                <br/>
                <p>High: {maxTemp[i]}</p>
                <p>Low: {min}</p> 
            </div>
        )
        
        if(!this.state.location) {
            return (
                <div className="row" id="weatherRow">
                    <SetLocation setLocation={this.setLocation}/>
                    
                </div>
            )
        }
        else {
            return (
                <div className="row" id="weatherRow">
                    {forecast}
                </div>
            )
            
        }
        
    }
}

export default Weather
