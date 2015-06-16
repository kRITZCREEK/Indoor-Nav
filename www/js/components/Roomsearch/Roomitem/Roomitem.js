import React from 'react'
import './Roomitem.styl'

import {Link} from 'react-router'


export default class Roomitem extends React.Component {

  render() {
    return (
      <Link to={this.props.room.link.name} params={this.props.room.link.params}>
        <div className="Roomitem">
          <li className="collection-item">
            <span className="roomNumber">
              {this.props.room.roomNumber}
            </span>
            <span className="description">
              {this.props.room.description}
            </span>
          </li>
        </div>
      </Link>
    )
  }
}
