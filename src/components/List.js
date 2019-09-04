import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends React.Component{
    

    render() {

        const items = this.props.items.map(item => 
        <ListItem item={item} key={item.id} toggleComplete={this.props.toggleComplete} deleteItem={this.props.deleteItem} />);

        return (
            <div className="List justify-content-center align-items-center">                   
                {items}                     
            </div>
        );
    }
    
  }

  //PropTypes
  List.propTypes = {
      items: PropTypes.array.isRequired
  }

  export default List;