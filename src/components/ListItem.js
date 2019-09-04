import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        if(this.props.item.completed) {
            return {
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                textDecoration: 'none'
            }    
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
              <p> {this.props.item.name} </p>
            </div>
        )
    }
}

//PropTypes
ListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ListItem
