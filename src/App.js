import React from 'react';
import './App.css';
import List from './components/List'
import { toUnicode } from 'punycode';

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
          completed: false
        },
        {
          id: 3,
          name: "Pillows", 
          completed: false
        }
      ]
    }
  }
  
  // Toggle complete
  toggleComplete = (id) => {
    this.setState({items: this.state.items.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item;
    })})
  }

  // Delete item
  deleteItem = (id) => {
    this.setState({items: [...this.state.items.filter(item => item.id !== id)]})
  }

  render() {
    return (
      <div className="App container h-100">
        <List items={this.state.items} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
  
}

export default App;
