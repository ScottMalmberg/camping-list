import React from 'react';

class List extends React.Component{

    render() {

        const items = this.props.items.map(a => <li>{a.item}</li>);

        return (
            <div className="List">
            {items}
            </div>
        );
    }
    
  }

  export default List;