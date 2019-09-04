import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
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
                <button className="btn btn-danger btn-sm" id="deleteBtn" onClick={this.props.deleteItem.bind(this, id)}><i className="fa fa-remove"></i></button> 
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
