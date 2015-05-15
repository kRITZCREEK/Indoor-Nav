import React from 'react'
import Router from 'react-router'
import CompassHeader from '../components/CompassHeader.js'

export default class Navigationview extends React.Component {
    render() {
        return (
            <main>
                <CompassHeader text="Navigation"/>
                <div id="nav-arrow">
                    <i id="richtungsPfeil" className="fa fa-location-arrow"
                       style={{transform: "rotate(60deg)", fontSize: "8rem"}}></i>
                    <i id="aufzug" className="mdi-image-details" style={{display: "none", fontSize: "8rem"}}></i>
                </div>
            </main>
        )
    }
}
