import React from 'react'
import {Link} from 'react-router'
import './NavigationHeader.styl'
import CompassHeader from '../CompassHeader/CompassHeader.js'
import MenuItem from './MenuItem.js'

export default class NavigationHeader extends React.Component {
  render() {
    return (
      <div className="NavigationHeader">
        <CompassHeader text="Navigation">
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="mdi-navigation-menu"></i>
          </a>
          <ul className="side-nav" id="mobile-demo">
            <li className="side-nav-header">Wegoptionen</li>
            <MenuItem text="Treppen" />
            <MenuItem text="manuelle Türen" />
            <MenuItem text="Außenbereich" />
          </ul>
        </CompassHeader>
      </div>
    )
  }
}


