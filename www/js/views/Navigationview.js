import React from 'react'
import Router from 'react-router'

export default class Navigationview extends React.Component {
  render() {
    return (
      <main>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper teal lighten-1">
                    <form>
                        Nächstes Ziel: <em>{this.props.params.navTarget}</em>
                    </form>
                </div>
            </nav>
        </div>
        <div id="nav-arrow">
            <i id="richtungsPfeil" className="fa fa-location-arrow" style={{transform: "rotate(60deg)", fontSize: "8rem"}}></i>
            <i id="aufzug" className="mdi-image-details" style={{display: "none", fontSize: "8rem"}}></i>
        </div>
      </main>
    )
  }
}
