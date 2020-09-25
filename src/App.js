import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import './reset.css'
import './App.css'
import axios from 'axios'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      thisProduct:{},
    }
    this.getInventory = this.getInventory.bind(this)
    this.setThisProduct = this.setThisProduct.bind(this)

  }

  // setThisProduct(id){
  //   axios.get(`/api/inventory/${id}`)
  // }
    setThisProduct(product){
      this.setState({thisProduct: product })
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
          <Header/>
          <Dashboard inventory = {this.state.inventory} getInventory= {this.getInventory} setThisProduct = {this.setThisProduct} />
          <Form getInventory= {this.getInventory} thisProduct = {this.state.thisProduct} />
        
        </div>
      )
    }
  
}