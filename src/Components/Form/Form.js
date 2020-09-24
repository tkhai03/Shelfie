import React, { Component } from 'react'
import axios from 'axios'


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleNameChange(e){
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handlePriceChange(e){
    //     this.setState({
    //         price: e.target.value
    //     })
    // }

    // handleImgurlChange(e){
    //     this.setState({
    //         imgurl: e.target.value
    //     })
    // }

    // deleteInput(){
    //     this.setState({
    //         name: '',
    //         price: 0,
    //         imgurl: ''
    //     })
    // }

    addProduct() {
        const { name, price, imgurl } = this.state
        axios.post("/api/product", { name, price, imgurl })
            .then((res) => {
                this.setState({ inventory: res.data })
                this.props.getInventory()
            })

    }



    render() {
        console.log(this.state)

        return (
            <div>
                <form className="form">
                    <p>Image URL:</p>
                    <input placeholder='img url' name='imgurl' type="text" value={this.state.imgurl} onChange={this.handleChange} />
                    <p>Product Name:</p>
                    <input placeholder='name' name='name' type="text" value={this.state.name} onChange={this.handleChange} />
                    <p>Price:</p>
                    <input placeholder='price' name='price' type="text" price={this.state.price} onChange={this.handleChange} />
                    <div className="form-buttons">
                        <button className="form-button" onClick={() => this.deleteInput()}>Cancel</button>
                        <button className="form-button" onClick={() => this.addProduct()}>Add to Inventory</button>
                    </div>

                </form>
            </div>
        )
    }
}