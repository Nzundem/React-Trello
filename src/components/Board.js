import React from 'react'
import List from './List'
import Data from '../sample-data'

class Board extends React.Component {
    state = {
        currentList: []
    }
    componentDidMount() {
        this.setState({
            currentList: Data.lists
        })
    }
    createNewList = () =>{
        const list = 
        {
            id: Math.ceil(Math.random() * 1000),
            title: "My amazing list",
            board: 300,
            createdAt: new Date()
        }
        this.setState({currentList: [...this.state.currentList, list]})
    }
    render(){
        return (
            <div className="list-wrapper" >
            {Object.keys(this.state.currentList).map(key => (
                <List key={this.state.currentList[key].id}
                list = {this.state.currentList[key]} />
            ))}

            <button onClick={this.createNewList}>Add List</button>
            </div>
        )
    }

}

export default Board