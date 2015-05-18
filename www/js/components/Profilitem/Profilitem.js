import React from 'react'
import './Profilitem.styl'

export default class Profilitem extends React.Component {
    render() {
        return (
            <li className="Profilitem collection-item z-depth-2">
                {this.props.text}
                <div className="secondary-content">
                    <div className="switch">
                        <label>
                            <input type="checkbox"/>
                            <span className="lever Profilitem-lever"/>
                        </label>
                    </div>
                </div>
            </li>
        )
    }
}
