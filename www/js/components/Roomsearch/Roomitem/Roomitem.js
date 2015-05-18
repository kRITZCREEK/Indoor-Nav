import React from 'react'
import './Roomitem.styl'


export default class Roomitem extends React.Component {

  render() {
    return (
      <div className="Roomitem">
        <ul>
          <p>{this.props.room.description}</p>
        </ul>
      </div>
    )
  }
}
