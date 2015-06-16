import React from 'react'
import './Roomlist.styl'

import Roomitem from '../Roomitem/Roomitem.js'

export default class Roomlist extends React.Component {

  renderRooms() {
    return this.props.rooms
    .sort((r1, r2) => r1.roomNumber > r2.roomNumber ? 1 : -1)
    .map(room =>
      (<Roomitem room={room} key={room.roomNumber}/>)
    )
  }

  render() {
    return (
      <div className="Roomlist">
        <ul className="collection with-header">
          <li className="collection-header">
            <span className="roomNumber">
              Raumnummer
            </span>
            <span className="description">
              Raum
            </span>
          </li>
          {this.renderRooms()}
        </ul>
      </div>
    )
  }
}
