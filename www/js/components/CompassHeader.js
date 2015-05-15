import React from 'react'
import {Link} from 'react-router'

export default class CompassHeader extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper color-darkest-blue">
                        <a href="#" className="brand-logo center color-text-sand">{this.props.text}</a>
                        <Link to="/">
                            <i className="mdi-navigation-arrow-back color-text-sand"></i>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
