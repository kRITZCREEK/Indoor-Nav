import React from 'react'
import './Roomitem.styl'


export default class Roomitem extends React.Component {

  render() {
    return (
      <div className="Roomitem">
        <li className="collection-item">
          <span className="description">
            {this.props.room.description}
          </span>
          <span className="roomNumber">
            {this.props.room.roomNumber}
          </span>
        </li>
      </div>
    )
  }
}
