import React from 'react'
import {Link} from 'react-router'
import './Intentcard.styl'

export default class Intentcard extends React.Component {

  static makeIcon(iconText) {
    return (
      <i className={iconText} key={iconText}/>
    )
  }

  render() {
    return (
      <Link to={this.props.link.name} params={this.props.link.params}>
        <div className="Intentcard">
          <div className={"card-panel " + this.props.color}>
            <div style={{textAlign: "center"}}>
              {this.props.icons.map(Intentcard.makeIcon)}
              <hr />
              <p>
                {this.props.text}
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
