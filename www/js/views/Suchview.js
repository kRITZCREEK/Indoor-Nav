import React from 'react'
import rooms from 'json!../data/rooms.json'


import Roomsearch from '../components/Roomsearch/Roomsearch.js'
import CompassHeader from '../components/CompassHeader/CompassHeader.js'


export default class Suchview extends React.Component {
  render() {
    return (
      <div>
        <CompassHeader text="Raumsuche" />
        <div className="container">
          <Roomsearch rooms={rooms} />
        </div>
      </div>
    )
  }
}
