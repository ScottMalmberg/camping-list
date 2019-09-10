import React, { Component } from 'react'
import uuid from 'uuid';

export class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
        
            minTemp: [],
            maxTemp: []
        
            
        };
    }
    
    componentWillMount() {
        fetch('http://api.weatherbit.io/v2.0/forecast/daily?city=Spokane,WA&units=I&days=5&key=45215d29d9a7469e97f7d9879eaa6e0f')
        .then(response => {
            return response.json();
        })
        .then(results => {
            console.log(results);
            results.data.map(day => {
                return this.setState({minTemp: [...this.state.minTemp, day.min_temp], maxTemp: [...this.state.maxTemp, day.max_temp]})   
            })
            
        })
    }
    
    render() {
        const {minTemp, maxTemp} = this.state;
        const forecast = minTemp.map((current, i) => 
            <div className="col" key= {uuid.v4()}>
                <h3>Day {i+1}</h3>
                <br/>
                <p>High: {maxTemp[i]}</p>
                <p>Low: {current}</p> 
            </div>
        )
        
        return (
            <div className="row">
                
                {forecast}
                
            </div>
        )
    }
}

export default Weather
