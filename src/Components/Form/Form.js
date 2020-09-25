import React, { Component } from 'react'
import axios from 'axios'


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            name: '',
            price: 0,
            imgurl: '',
            editing: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.thisProduct !== this.props.thisProduct){
            console.log(this.props)
            this.setState({
                id: this.props.thisProduct.id,
                name: this.props.thisProduct.name,
                price: this.props.thisProduct.price,
                imgurl: this.props.thisProduct.imgurl,
                editing: true
            })
            console.log(this.state)
        }
    }



    deleteInput(){
        this.setState({
            id: null,
            name: '',
            price: 0,
            imgurl: '',
            editing: false
        })
    }

    addProduct() {
        const { name, price, imgurl } = this.state
        axios.post("/api/product", { name, price, imgurl })
            .then((res) => {
                this.setState({ inventory: res.data })
                this.props.getInventory()
            })

    }

    editProduct(){
        const {name, price, imgurl, id} = this.state
        axios.put(`/api/product/${id}`, {name, price, imgurl})
        .then((res) => {
            this.deleteInput()
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
                    <input placeholder='price' name='price' type="text" value={this.state.price} onChange={this.handleChange} />
                    <div className="form-buttons">
                        <button className="form-button" onClick={() => this.deleteInput()}>Cancel</button>
                        {!this.state.editing ? <button className="form-button" onClick={() => this.addProduct()}>Add to Inventory</button> : <button className="form-button" onClick={() => this.editProduct()}>Save Changes</button>}
                    </div>

                </form>
            </div>
        )
    }
}