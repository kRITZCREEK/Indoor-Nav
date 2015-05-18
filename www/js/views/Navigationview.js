import React from 'react'
import Router from 'react-router'
import CompassHeader from '../components/CompassHeader/CompassHeader.js'
import NavigationHeader from '../components/NavigationHeader/NavigationHeader.js'

import Wegoption from '../model/Wegoption.js'

export default class Navigationview extends React.Component {
  constructor(){
    super()
    this.state = {
      wegoption: new Wegoption(window.localStorage.getItem('wegoption') || new Wegoption(true, true, true))
    }
  }

  componentDidMount() {
    window.$('.button-collapse').sideNav()
  }

  changeOptions(option){
    this.setState({ wegoption: option })
    window.localStorage.setItem('wegoption', option)
  }

  render() {
    return (
      <main>
        <NavigationHeader wegoption={this.state.wegoption} changeHandler={this.changeOptions.bind(this)} />
        <div id="nav-arrow">
          <i id="richtungsPfeil" className="fa fa-location-arrow"
             style={{transform: "rotate(60deg)", fontSize: "8rem"}}></i>
          <i id="aufzug" className="mdi-image-details" style={{display: "none", fontSize: "8rem"}}></i>
        </div>
      </main>
    )
  }
}
