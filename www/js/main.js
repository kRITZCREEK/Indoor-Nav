/*
static imports
 */
import 'style/url!file!../css/materialize.css'
import 'style/url!file!../css/font-awesome.css'
import './vendor/materialize.js'


import React from 'react'
import Router, { Route, DefaultRoute } from 'react-router'
import Mainview from './views/Mainview.js'
import Profilview from './views/Profilview.js'
import Intentview from './views/Intentview.js'
import Navigationview from './views/Navigationview.js'


var routes = (
  <Route name="app" handler={Mainview} path="/">
    <Route name="profil" handler={Profilview} />
    <Route name="navigation" path="navigation/:navTarget" handler={Navigationview} />
    <DefaultRoute handler={Intentview} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'))
})
