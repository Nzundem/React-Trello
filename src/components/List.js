import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
class List extends React.Component {
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
            </div>
        )
    }

}
List.propTypes = {
    list: PropTypes.object.isRequired
}
export default List