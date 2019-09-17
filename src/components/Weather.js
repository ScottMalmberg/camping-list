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
            dates: [],
            icons: [],
            description: []    
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
                    dates: [...this.state.dates, day.datetime.split('-').join()],
                    icons: [...this.state.icons, "/icons/" + day.weather.icon + ".png"],
                    description: [...this.state.description, day.weather.description]
                })   
            })
        })
        .catch((err) => {
            alert("Please input location in 'City, State' format");
            console.log(err);
            this.setState({location: ""})
        })
    }
    
    render() {
        const {minTemp, maxTemp, dates} = this.state;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const forecast = minTemp.map((min, i) => 
            <div className="col weather-day" key= {uuid.v4()}>
                <h3>{days[new Date(dates[i]).getDay()]}</h3>
                <p>{this.state.description[i]}</p>
                <img src={this.state.icons[i]} height="40px" alt={"Image of " + this.state.description[i]} className="icon"></img>
                <p>High: {maxTemp[i]}</p>
                <p>Low: {min}</p> 
            </div>
        )
        
        if(!this.state.location) {
            return (
                <div className="row" id="weather-row">
                    <SetLocation setLocation={this.setLocation}/>
                </div>
            )
        }
        else {
            return (
                <div className="row" id="weather-row">
                    {forecast}
                </div>
            )
            
        }
        
    }
}

export default Weather
