import React from 'react'
import {Link} from 'react-router'
import './Intentcard.styl'

export default class Intentcard extends React.Component {

  static makeIcon(iconText) {
    return (
      <i className={iconText} key={iconText}/>
    )
  }

  handleClick(e) {
    this.props.onSearch(this.props.search)
  }

  render() {
    if(!this.props.link){
      return ( <div className="Intentcard"
      onClick={this.handleClick.bind(this)}>
          <div className={"card-panel " + this.props.color}>
            <div style={{textAlign: "center"}}>
              {this.props.icons.map(Intentcard.makeIcon)}
              <hr />
              <p>
                {this.props.text}
              </p>
            </div>
          </div>
        </div>)
    }
    else{
      return (<Link to={this.props.link.name} params={this.props.link.params}>
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
      </Link>)
    }
  }
}
