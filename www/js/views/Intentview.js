import React from 'react'
import intents from 'json!../data/intents.json'
import Searchbar from '../components/Searchbar/Searchbar.js'
import Intents from '../components/Intents.js'

export default class Intentview extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />

        <div className="container">
          <h3 className="small-caps">Campus Compass</h3>
          <Intents intents={intents}/>
        </div>
      </div>
    )
  }
}
