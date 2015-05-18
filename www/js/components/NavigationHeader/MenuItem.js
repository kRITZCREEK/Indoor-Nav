import React from 'react'
import {Link} from 'react-router'

export default class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <div className="switch">
          <label>
            <input type="checkbox"/>
            <span className="lever"></span>
            {this.props.text}
          </label>
        </div>
      </li>
    )
  }
}


