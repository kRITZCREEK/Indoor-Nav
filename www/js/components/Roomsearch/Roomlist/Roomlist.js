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
        <ul>
          {this.renderRooms()}
        </ul>
      </div>
    )
  }
}
