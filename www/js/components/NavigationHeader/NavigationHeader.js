import React from 'react'
import {Link} from 'react-router'
import './NavigationHeader.styl'
import CompassHeader from '../CompassHeader/CompassHeader.js'
import MenuItem from './MenuItem.js'

export default class NavigationHeader extends React.Component {

  changeTreppen(){
    var wegoption = this.props.wegoption
    wegoption.treppen = !wegoption.treppen
    this.props.changeHandler(wegoption)
  }

  changeManTueren(){
    var wegoption = this.props.wegoption
    wegoption.manTueren = !wegoption.manTueren
    this.props.changeHandler(wegoption)
  }

  changeAussenbereich(){
    var wegoption = this.props.wegoption
    wegoption.aussenbereich = !wegoption.aussenbereich
    this.props.changeHandler(wegoption)
  }


  render() {
    return (
      <div className="NavigationHeader">
        <CompassHeader text="Navigation">
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="mdi-navigation-menu"></i>
          </a>
          <ul className="side-nav" id="mobile-demo">
            <li className="side-nav-header">Wegoptionen</li>
            <MenuItem text="Treppen" checked={this.props.wegoption.treppen}
              onChange={this.changeTreppen.bind(this)} />
            <MenuItem text="manuelle Türen" checked={this.props.wegoption.manTueren}
              onChange={this.changeManTueren.bind(this)} />
            <MenuItem text="Außenbereich" checked={this.props.wegoption.aussenbereich}
              onChange={this.changeAussenbereich.bind(this)} />
          </ul>
        </CompassHeader>
      </div>
    )
  }
}
