import React from 'react'
import Router from 'react-router'
import CompassHeader from '../components/CompassHeader/CompassHeader.js'
import NavigationHeader from '../components/NavigationHeader/NavigationHeader.js'
import NavigationCompass from '../components/NavigationCompass/NavigationCompass.js'
import _ from 'underscore'

import Wegoption from '../model/Wegoption.js'

import route from 'json!../data/fakeRoute.json'

export default class Navigationview extends React.Component {
  constructor(){
    super()
    let wegoption = JSON.parse(window.localStorage.getItem('wegoption'))
    this.state = {
      wegoption: wegoption ?
        new Wegoption(wegoption.manTueren, wegoption.aussenbereich, wegoption.treppen)
      : new Wegoption(true, true, true),
      schritt: {
        nextTarget: "DummyZiel",
        nextDistance: 0,
        degree: 0,
        extraIcon: ""
      }
    }
  }

  tick(ms, next){
    setTimeout(() =>
        this.setState({schritt: next})
    , ms)
  }

  nextArray(vals){
    let degrees = vals[0]
    let distances = vals[1]
    let targets = vals[2]
    let icons = vals[3]
    let n = 10

    function mkSchritt([deg, dist, target, extraIcon]){
        return {
            nextTarget: target,
            nextDistance: dist,
            degree: deg,
            extraIcon: extraIcon
        }
    }

    function extend(x1, x2, n){
        let part = (x1 - x2) / n
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(Math.round(x1 - (part * i)))
        }
        return result
    }

    let merged = []

    let steps = _.zip(degrees, distances, targets, icons).map(([[de1, de2], [di1, di2], target, icon]) =>
        _.zip(extend(de1, de2, n),
            extend(di1, di2, n),
            Array.apply(null, new Array(n)).map(function(){return target}),
            Array.apply(null, new Array(n)).map(function(){return icon})
            )
    )
    merged = merged.concat.apply(merged, steps)
    return merged.map(mkSchritt)


  }

  componentDidMount() {
    window.$('.button-collapse').sideNav()
    this.nextArray(route).map( (next, i) =>{
        this.tick(i * 1000, next)
    })
  }

  changeOptions(option){
    this.setState({ wegoption: option })
    window.localStorage.setItem('wegoption', JSON.stringify(option))
  }

  render() {
    return (
      <main>
        <NavigationHeader wegoption={this.state.wegoption}
          changeHandler={this.changeOptions.bind(this)} />
        <NavigationCompass {...this.state.schritt} />
      </main>
    )
  }
}
