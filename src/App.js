import React from 'react';
import './App.css';
import List from './components/List'
import Header from './components/Header'
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
        <Header />  
        <div className="row vh-100">
          
          <div className="col align-self-center mx-auto">
            <AddItem addItem={this.addItem}/>
          </div>
          <div className="col">
            
            <List 
            items={this.state.items} 
            toggleComplete={this.toggleComplete} 
            deleteItem={this.deleteItem} />
          </div>          
        </div>       
      </div>
    );
  }
  
}

export default App;
