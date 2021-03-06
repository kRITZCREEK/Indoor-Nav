import React from 'react'
import './Searchfilter.styl'


export default class Searchfilter extends React.Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.filter(event.target.value)
  }

  render() {
    return (
      <div className="Searchfilter">
        <form>
          <input type="search" placeholder="Raumfilter" onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}
