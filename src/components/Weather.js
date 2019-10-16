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
            description: [],
            prob: []    
        };
    }

    setLocation = (location) => {
        this.setState({location})

        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + location + '&units=I&days=5&key=45215d29d9a7469e97f7d9879eaa6e0f')
        .then(response => {
            return response.json();
        })
        .then(results => {
            console.log(results);
            results.data.map(day => {
                return this.setState({
                    minTemp: [...this.state.minTemp, Math.round(day.min_temp)], 
                    maxTemp: [...this.state.maxTemp, Math.round(day.max_temp)],
                    dates: [...this.state.dates, day.datetime.split('-').join('-')],
                    icons: [...this.state.icons, "./icons/" + day.weather.icon + ".png"],
                    description: [...this.state.description, day.weather.description],
                    prob: [...this.state.prob, day.pop]
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
        
        const {minTemp, maxTemp, dates, description, prob, icons} = this.state;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const forecast = minTemp.map((min, i) => 
            <div className="col weather-day" id= {"weather-day-" + i} key= {uuid.v4()}>
                <div className="weather-header-container">
                    <h3>{days[new Date(dates[i]).getDay()]}</h3>
                </div>
                <div className="weather-description-container">
                    <p>{description[i]}</p>
                </div>
                <div className="icon-container">
                    <img src={icons[i]} alt={"Image of " + this.state.description[i]} className="icon"></img>
                </div>
                <div className="weather-numbers-container">
                    <p>High: {maxTemp[i]}°</p>
                    <p>Low: {min}°</p>
                    <p>Precip: {prob[i]}%</p> 
                </div>
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
