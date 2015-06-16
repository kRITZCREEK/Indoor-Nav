import React from 'react'
import './Searchbar.styl'

export default class Searchbar extends React.Component {

  searchHandler(e) {
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <div className="Searchbar">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" placeholder="Suche"
                    onChange={this.searchHandler.bind(this)}
                  />
                  <label htmlFor="search"><i className="mdi-action-search"></i></label>
                  <i className="mdi-navigation-close"></i>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
