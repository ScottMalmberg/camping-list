import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc solid',
            backgroundColor: this.props.item.completed ? '#CCFBFE' : 'transparent',
            color: this.props.item.completed ? 'black' : 'white',
         }
    }


    render() {
        const { id, name } = this.props.item;
        return (
            <div style={this.getStyle()} className="item">
              <p> 
                <button id="checkBtn" onClick={this.props.toggleComplete.bind(this, id)}><i className="fa fa-check"></i></button>         
                {name}
                <button id="deleteBtn" onClick={this.props.deleteItem.bind(this, id)}><i className="fa fa-remove"></i></button> 
              </p>
            </div>
        )
    }
}

//PropTypes
ListItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default ListItem
