import React from 'react';

class List extends React.Component{

    render() {

        const items = this.props.items.map(a => <p>{a.item}</p>);

        return (
            <div className="row h-100 List justify-content-center align-items-center">
                <div className="col-sm-12 my-auto">
                    
                    {items}
                    <input type="text" placeholder="What else do you need?" />
                </div>
            
            </div>
        );
    }
    
  }

  export default List;