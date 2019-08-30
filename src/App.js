import React from 'react';
import './App.css';
import List from './components/List'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          item: "Four person tent", 
          completed: false
        },
        {
          item: "Double sleeping bag", 
          completed: false
        },
        {
        item: "Pillows", 
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
