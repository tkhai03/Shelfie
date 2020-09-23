import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import './App.css'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
        name: 'boots',
        price: 59.99,
        imgurl: "https://static.shiekh.com/media/catalog/product/cache/image/2000x2000/e9c3970ab036de70892d86c6d221abfe/8/0/80416534f9a1cfc3b8807a46b5c32645.jpg"},
      {
        name: "hat",
        price: 9.99,
        imgurl: "https://strattonhats.com/wp-content/uploads/IMG_1416.jpg"
      }

  }

 render() {
      return (
        <div>
          <Dashboard inventoryName= {this.state}/>
          <Header/>
          <Form/>
        
        </div>
      )
    }
  
}