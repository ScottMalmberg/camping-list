import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        return {
        
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
            

        }
    }


    render() {
        const { id, name } = this.props.item;
        return (
            <div style={this.getStyle()}>
              <p> 
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {" "}            
                {name}
                <button className="" id="deleteBtn" onClick={this.props.deleteItem.bind(this, id)}><i className="fa fa-remove"></i></button> 
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
