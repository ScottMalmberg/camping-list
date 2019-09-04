import React from 'react';
import './App.css';
import List from './components/List'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          name: "Four person tent", 
          completed: false
        },
        {
          id: 2,
          name: "Double sleeping bag", 
          completed: true
        },
        {
          id: 3,
          name: "Pillows", 
          completed: false
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="App container h-100">
        <List items={this.state.items} />
      </div>
    );
  }
  
}

export default App;
