import React from 'react';
import './App.css';
import List from './components/List'
import AddItem from './components/AddItem';
import uuid from 'uuid';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: uuid.v4(),
          name: "Four person tent", 
          completed: false
        },
        {
          id: uuid.v4(),
          name: "Double sleeping bag", 
          completed: false
        },
        {
          id: uuid.v4(),
          name: "Pillows", 
          completed: false
        }
      ]
    }
  }
  
  // toggle complete
  toggleComplete = (id) => {
    this.setState({items: this.state.items.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item;
    })})
  }

  // delete item
  deleteItem = (id) => {
    this.setState({items: [...this.state.items.filter(item => item.id !== id)]})
  }

  // add item
  addItem = (name) => {
    const newItem = {
      id: uuid.v4(),
      name: name,
      completed: false
    }
    this.setState({items: [...this.state.items, newItem]})
  }

  render() {
    return (
      <div className="App container-fluid">
        
        <div className="main">
          <h3 className="text-center" style={{color: "#CCFBFE", fontSize: "50px"}}>CampingList</h3>
          <List 
            items={this.state.items} 
            toggleComplete={this.toggleComplete} 
            deleteItem={this.deleteItem} />
            <AddItem addItem={this.addItem}/>       
        </div>  
       
      </div>
    );
  }
  
}

export default App;
