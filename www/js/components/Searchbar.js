import React from 'react'

export default class Searchbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper teal lighten-1">
            <form>
              <div className="input-field">
                <input id="search" type="search" required placeholder="Suche" />
                <label htmlFor="search"><i className="mdi-action-search"></i></label>
                <i className="mdi-navigation-close"></i>
              </div>
            </form>
          </div>
        </nav>
      </div>
      )
  }
}
