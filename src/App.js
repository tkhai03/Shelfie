import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'


export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
        <Header/>
        <Form/>
        
      </div>
    )
  }
}