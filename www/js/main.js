/*
static imports
 */
import 'style/url!file!materialize-css/bin/materialize.css'
import 'style/url!file!font-awesome/css/font-awesome.css'
import 'script!jquery'
import 'script!materialize-css/bin/materialize.js'


import React from 'react'
import Router, { Route, DefaultRoute } from 'react-router'
import Mainview from './views/Mainview.js'
import Profilview from './views/Profilview.js'
import Intentview from './views/Intentview.js'
import Roomsearchview from './views/Roomsearchview.js'
import Navigationview from './views/Navigationview.js'


var routes = (
  <Route name="app" handler={Mainview} path="/">
    <Route name="profil" handler={Profilview} />
    <Route name="raeume" handler={Roomsearchview} />
    <Route name="navigation" path="navigation/:navTarget" handler={Navigationview} />
    <DefaultRoute handler={Intentview} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'))
})
