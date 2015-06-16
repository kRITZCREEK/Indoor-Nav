import React from 'react'
import intents from 'json!../data/intents.json'
import subIntents from 'json!../data/subIntents.json'
import rooms from 'json!../data/rooms.json'
import Searchbar from '../components/Searchbar/Searchbar.js'
import Intents from '../components/Intents.js'
import Roomlist from '../components/Roomsearch/Roomlist/Roomlist.js'

export default class Intentview extends React.Component {
  constructor() {
    super()
    this.state = {
      intents: intents,
      rooms: []
      }
  }

  searchHandler(searchString){
    this.setState({
      intents: intents.filter(i =>
         i.text.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
         && (!i.tag || i.tag !== searchString)
      )
      .concat(subIntents.filter(si =>
        searchString !== '' 
        && si.tags.indexOf(searchString) !== -1
      ))
      ,
      rooms: rooms.filter(r =>
        searchString !== ''
        &&(r.description.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        || r.roomNumber.replace('.', '').startsWith(searchString)
        || r.tags.indexOf(searchString) !== -1))
    })
  }

  render() {
    let rl = this.state.rooms.length === 0 ?
      null :
      <Roomlist rooms={this.state.rooms}/>
    return (
      <div>
        <Searchbar onSearch={this.searchHandler.bind(this)}/>

        <div className="container">
          <h3 className="small-caps">Campus Compass</h3>
          <Intents intents={this.state.intents}
          onSearch={this.searchHandler.bind(this)}/>
          {rl}
        </div>
      </div>
    )
  }
}
