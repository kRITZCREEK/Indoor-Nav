import React from 'react'
import {Link} from 'react-router'
import Intentcard from './Intentcard/Intentcard.js'

export default class Intents extends React.Component {

  intentCards() {
    return this.props.intents.map((intent) => (
        <div className="col s6 m4 l3" key={intent.text}>
          <Intentcard {...intent}/>
        </div>
      ))
  }

  render() {
    return (
      <div className="Intents">
        <div className="row">
          {this.intentCards()}
        </div>
      </div>
    )
  }
}
