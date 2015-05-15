import React from 'react';
import Profilitem from '../components/Profilitem.js'

export default class Profilview extends React.Component {
  render() {
    return (
      <main>
        <h3>Campus Compass</h3>
        <ul className="collection">
            <Profilitem text="Profil" />
            <Profilitem text="Blind" />
            <Profilitem text="Farbenblind" />
            <li className="collection-item">
                <div className="input-field">
                    <input id="age" type="text" className="validate" />
                    <label htmlFor="age">Alter</label>
                </div>
            </li>
        </ul>
      </main>
    );
  }
}
