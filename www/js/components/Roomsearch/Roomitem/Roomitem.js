import React from 'react'
import './Roomitem.styl'

import {Link} from 'react-router'


export default class Roomitem extends React.Component {

  render() {
    return (
      <Link to={this.props.room.link.name} params={this.props.room.link.params}>
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
      </Link>
    )
  }
}
