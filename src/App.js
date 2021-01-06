import './App.css';
import React from 'react'
import Board from './components/Board' 
import SampleData from './sample-data'
import Home from './components/Home'
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    boardTitle: 'house ideas',
    boards: [],
    background: SampleData.background
  }
  componentDidMount() {this.setState({
    boards: SampleData.boards
  })}

  createNewboard = (board) => {
    this.setState({
      boards: [...this.state.boards, board]
    })
  }
  render () {
    return (
      <div className="board-wrapper">
      <Home boards={this.state.boards}  createNewBoard={this.createNewboard} />

      <Board />
      </div>
    );
  }
}
Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired
}

export default App;
