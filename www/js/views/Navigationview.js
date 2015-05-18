import React from 'react'
import Router from 'react-router'
import CompassHeader from '../components/CompassHeader/CompassHeader.js'
import NavigationHeader from '../components/NavigationHeader/NavigationHeader.js'

import Wegoption from '../model/Wegoption.js'

export default class Navigationview extends React.Component {
  constructor(){
    super()
    let wegoption = JSON.parse(window.localStorage.getItem('wegoption'))
    let {manTueren, aussenbereich, treppen} = wegoption
    this.state = {
      wegoption: wegoption ?
        new Wegoption(manTueren, aussenbereich, treppen)
      : new Wegoption(true, true, true)
    }
  }

  componentDidMount() {
    window.$('.button-collapse').sideNav()
  }

  changeOptions(option){
    this.setState({ wegoption: option })
    window.localStorage.setItem('wegoption', JSON.stringify(option))
  }

  render() {
    return (
      <main>
        <NavigationHeader wegoption={this.state.wegoption}
          changeHandler={this.changeOptions.bind(this)} />
        <div id="nav-arrow">
          <i id="richtungsPfeil" className="fa fa-location-arrow"
             style={{transform: "rotate(60deg)", fontSize: "8rem"}}></i>
          <i id="aufzug" className="mdi-image-details"
            style={{display: "none", fontSize: "8rem"}}></i>
        </div>
      </main>
    )
  }
}
