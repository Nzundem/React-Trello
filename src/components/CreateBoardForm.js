import React from 'react'

class CreateBoardForm extends React.Component{
    state = {
        title: '',
        background: '#80ccff'
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return (
            <form className="create-board-wrapper"
            onSubmit={this.handleSubmit}>
            <input type="text" name="name"  placeholder="Board Name"
                onChange={(e)=>this.setState({title: e.target.value})}
            />
            <select name="background" onChange={e=>this.setState({background: e.target.value})}>
                <option value="#80ccff">Blue</option>
                <option value="#80ffaa">Green</option>
                <option value="#f94a1e">Red</option>
                <option value="#ffb3ff">Pink</option>
                <option value="#bf00ff">Purple</option>
                <option value="#ffad33">Orange</option>
            </select>

            <button type="submit">Create New Board</button>
            </form>
        )
    }
}

export default  CreateBoardForm