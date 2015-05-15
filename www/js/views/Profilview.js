import React from 'react'
import Profilitem from '../components/Profilitem/Profilitem.js'
import CompassHeader from '../components/CompassHeader.js'

export default class Profilview extends React.Component {
  render() {
    return (
      <main>
        <CompassHeader text="Profil"/>
        <ul className="collection">
            <Profilitem text="Profil" />
            <Profilitem text="Blind" />
            <Profilitem text="Farbenblind" />
            <li className="collection-item color-sand">
                <div className="input-field">
                    <input id="age" type="text" className="validate" />
                    <label htmlFor="age">Alter</label>
                </div>
            </li>
        </ul>
      </main>
    )
  }
}
