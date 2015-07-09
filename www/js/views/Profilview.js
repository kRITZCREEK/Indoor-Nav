import React from 'react'
import Profilitem from '../components/Profilitem/Profilitem.js'
import CompassHeader from '../components/CompassHeader/CompassHeader.js'

export default class Profilview extends React.Component {
    render() {
        return (
            <div className="Profilview">
                <CompassHeader text="Profil"/>
                <ul className="collection">
                    <Profilitem text="Blind"/>
                    <Profilitem text="Farbenblind"/>
                </ul>
                <div className="row">
                        <button className="waves-effect waves-light btn-large color-darkest-blue col s12">Speichern</button>
                </div>
            </div>
        )
    }
}
