import React from 'react'

export default class Profilitem extends React.Component {
  render() {
    return (
      <li className="collection-item">{this.props.text}
            <div className="secondary-content">
                <div className="switch">
                    <label>
                        <input type="checkbox" />
                        <span className="lever" />
                    </label>
                </div>
            </div>
        </li>
    )
  }
}
