import React from 'react';
import './App.css';
import List from './components/List'
import Header from './components/Header'
import AddItem from './components/AddItem';

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
      id: 4,
      name: name,
      completed: false
    }
    this.setState({items: [...this.state.items, newItem]})
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row h-100">
          <div className="col">
            <AddItem addItem={this.addItem}/>
          </div>
          <div className="col">
            <Header />  
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
