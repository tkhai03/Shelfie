import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import './App.css'
import axios from axios


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)

  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory(){
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))

  }

 render() {
      return (
        <div>
          <Dashboard getInventory= {this.getInventory}/>
          <Header/>
          <Form/>
        
        </div>
      )
    }
  
}