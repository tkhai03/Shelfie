import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'


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