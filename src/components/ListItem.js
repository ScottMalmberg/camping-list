import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.item.completed ? '#CCFBFE' : 'transparent',
            color: this.props.item.completed ? 'rgba(34,34,34,.5)' : 'white',
            borderRadius: this.props.item.completed ? '.5em' : ''
         }
    }


    render() {
        const { id, name } = this.props.item;
        return (
            <div style={this.getStyle()} className="item">
              <p> 
                <button className="button list-button" id="check-button" onClick={this.props.toggleComplete.bind(this, id)}><i className="fa fa-check"></i></button>         
                {name}
                <button className="button list-button" id="delete-button" onClick={this.props.deleteItem.bind(this, id)}><i className="fa fa-remove"></i></button> 
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
