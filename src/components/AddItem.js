import React, { Component } from 'react'

export class AddItem extends Component {
    render() {
        return (
            <form>
                < input type = "text"
                name = "title"
                placeholder = "Add an item..." / >
                <input type="submit" value=""/>
            </form>
        )
    }
}

export default AddItem
