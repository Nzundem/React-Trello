import React from 'react'
import BoardPreview from './BoardPreview'
import CreateNewBoard from './CreateBoardForm'

class Home extends React.Component{
    newBoard=()=>{
        const board = {
            id: Math.ceil(Math.random() * 1000),
            title: "Trips to take this Year",
            background: "09ff4a"
        }
        this.props.createNewBoard(board)
    }
    render() {
        return (
            <div>
            <CreateNewBoard />
            <div className="board-preview-wrapper">
            {Object.keys(this.props.boards).map(key=>(
              <BoardPreview key={key}
                  board = {this.props.boards[key]} 
              />
              )
            )}
            </div>
            <button onClick={this.newBoard}>Create New Board</button>
            </div>
        )
    }
}
export default Home