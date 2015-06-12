import './NavigationCompass.styl'
import React from 'react'

export default class NavigationCompass extends React.Component {

  transform(deg) {
    return {
      transform: "rotate(" + (deg - 45) + "deg)"
    }
  }

  render() {
    return (
      <div className="NavigationCompass">
        <div className="next-target">
          <i className="mdi-image-navigate-next" />
          {this.props.nextTarget}
        </div>
        <div className="next-distance">
          {this.props.nextDistance + "m"}
        </div>
        <div className="row">
          <div className="nav-icon-wrapper">
            <i id="richtungsPfeil" className="nav-icon fa fa-location-arrow"
               style={this.transform(this.props.degree)} />
            <div className="extra-icon">
              <i className={"nav-icon-extra " + this.props.extraIcon} />
            </div>
          </div>
        </div>
        <div className="row">
        <div id="progress">
         <form action="#">
         <p className="range-field">
         <input type="range" id="progress-point" min="0" max="100" value="0" disabled />
         <label className="active" htmlFor="progress-point">Fortschritt</label>
         </p>
         </form>
        </div>
        </div>
      </div>
    )
  }
}
