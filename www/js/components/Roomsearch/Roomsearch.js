import React from 'react'
import {Link} from 'react-router'
import './Roomsearch.styl'

import Searchfilter from './Searchfilter/Searchfilter.js'
import Roomlist from './Roomlist/Roomlist.js'

export default class Roomsearch extends React.Component {
  constructor() {
    super()
    this.state = {filtered: []}
  }

  componentWillMount() {
    this.setState({
      filtered: this.props.rooms
    })
  }

  filterRooms(filterString) {
    this.setState({filtered: this.props.rooms.filter(r =>
         r.description.indexOf(filterString) !== -1
      || r.roomNumber.replace('.', '').startsWith(filterString))
      })
  }

  render() {
    return (
      <div className="Roomsearch">
        <Searchfilter filter={this.filterRooms.bind(this)}/>
        <Roomlist rooms={this.state.filtered}/>
      </div>
    )
  }
}
