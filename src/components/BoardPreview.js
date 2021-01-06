import React from 'react'
import Board from './Board'
import PropTypes from 'prop-types'
class BoardPreview extends React.Component{
    render () {
        return (
            <div className= "board-preview-item" style={{background : this.props.board.background || "red" }}>
            <div>
            <p>{this.props.board.title}</p>
            <p>{this.props.board.background}</p>

            </div>
            </div>
        )
    }
}

BoardPreview.propTypes = {
    board: PropTypes.object.isRequired
}
export default BoardPreview