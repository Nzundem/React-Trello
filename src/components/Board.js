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
    addBoardInput = React.createRef()
    createNewList = (e) =>{
        e.preventDefault()
        const list = 
        {
            id: Math.ceil(Math.random() * 1000),
            title: this.addBoardInput.current.value,
            board: 300,
            createdAt: new Date(),
            cards: [
                {
                    id: "ID A",
                    text: "Sample 1"
                },
                {
                    id: "ID B",
                    text: "Sample 2"
                }
            ]
        }
        if(list.title){
        this.setState({currentList: [...this.state.currentList, list]})
        this.addBoardInput.current.value=''}
    }
    render(){

        return (
            <div>
            <div className="list-wrapper" >
            {Object.keys(this.state.currentList).map(key => (
                <List key={this.state.currentList[key].id}
                list = {this.state.currentList[key]} />
            ))}

            </div>
            <form onSubmit={this.createNewList}
            className="new-list-wrapper">
            <input type="text" name="name" ref={this.addBoardInput} placeholder="+ New list"/>

            </form>
            </div>
        )
    }

}

export default Board