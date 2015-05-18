import React from 'react'
import './Roomlist.styl'

import Roomitem from '../Roomitem/Roomitem.js'

export default class Roomlist extends React.Component {

  renderRooms() {
    return this.props.rooms.map(room =>
      (<Roomitem room={room} key={room.roomNumber}/>)
    )
  }

  render() {
    return (
      <div className="Roomlist">
        <ul className="collection with-header">
          <li className="collection-header">
            <span className="description">
              Raum
            </span>
            <span className="roomNumber">
              Raumnummer
            </span>
          </li>
          {this.renderRooms()}
        </ul>
      </div>
    )
  }
}
