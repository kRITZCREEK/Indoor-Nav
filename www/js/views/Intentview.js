import React from 'react'
import intents from 'json!../data/intents.json'
import Searchbar from '../components/Searchbar.js'
import Intents from '../components/Intents.js'

export default class Intentview extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Intents intents={intents}/>
      </div>
    )
  }
}
