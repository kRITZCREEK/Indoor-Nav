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
import Suchview from './views/Suchview.js'
import Navigationview from './views/Navigationview.js'


var routes = (
  <Route name="app" handler={Mainview} path="/">
    <Route name="profil" handler={Profilview} />
    <Route name="suche" handler={Suchview} />
    <Route name="navigation" path="navigation/:navTarget" handler={Navigationview} />
    <DefaultRoute handler={Intentview} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'))
})
