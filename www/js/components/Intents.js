import React from 'react'
import {Link} from 'react-router'

export default class Intents extends React.Component {
  makeIcon(iconText){
    return (
      <i className={iconText} style={{fontSize: "50px", color: 'rgb(0,0,0)'}} key={iconText}/>
    )
  }

  intentCards() {
    return this.props.intents.map(({color, icons, text, link}) => (
        <div className="col s6 m4 l3" key={text}>
          <Link to={link.name} params={link.params}>
            <div className={"card-panel " + color}>
                <div style={{textAlign: "center"}}>
                    {icons.map(this.makeIcon)}
                    <hr />
                    <p style={{textTransform: "uppercase", color: 'rgb(0,0,0)'}}>
                      {text}
                    </p>
                </div>
            </div>
          </Link>
        </div>
      ))
  }

  render() {
    return (
      <div className="container">
        <h3>Campus Compass</h3>
        <div className="row">
          {this.intentCards()}
        </div>
      </div>
    )
  }
}
