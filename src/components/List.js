import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
class List extends React.Component {
    state ={
        currentCards: []
    }
    nameInput = React.createRef()
    createNewCard = (e) =>{
        e.preventDefault()
        const card = {
            id: Math.ceil(Math.random() * 1000),
            text: this.nameInput.current.value
        }
        if(card.text){
            this.setState({currentCards: [...this.state.currentCards, card]})
        }
        console.log(this.nameInput.current.value)
        // this.nameInput.current.value = ''
    }
    render(){
        return (
            <div className="list">
            <h3 className="list-header">{this.props.list.title}</h3>
            {Object.keys(this.props.list.cards).map(key =>(
                <Card 
                key={key}
                data={this.props.list.cards[key]}
                />
            ))}

            <form onSubmit={this.createNewCard}
            className="new-card-wrapper">
            <input type="text" name="name" ref={this.nameInput} placeholder="+ New card"/>

            </form>
            </div>
        )
    }

}
List.propTypes = {
    list: PropTypes.object.isRequired
}
export default List