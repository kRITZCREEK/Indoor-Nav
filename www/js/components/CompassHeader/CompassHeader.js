import React from 'react'
import {Link} from 'react-router'
import './CompassHeader.styl'

export default class CompassHeader extends React.Component {
  render() {
    return (
      <div className="CompassHeader">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper color-darkest-blue">
              <a href="#" className="brand-logo color-text-sand">
                {this.props.text}
              </a>
              {this.props.children}
              <Link to="/">
                <i id="navBack" className="mdi-navigation-arrow-back"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
