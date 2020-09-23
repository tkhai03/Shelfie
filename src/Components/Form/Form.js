import React, {Component} from 'react'
import axios from 'axios'


export default class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    // handleChange() {
    //     this.setState({
    //         [e.target.value]: e.target.value
    //     })
    // }

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

handleInventory(){
    
}

    render(){
        console.log(this.state)

        return(
            <div>
                <form className= "form">
                    <p>Image URL:</p>
                    <input placeholder='img url' name='imgurl' onChange={e => this.handleImgurlChange(e)}/>
                    <p>Product Name:</p>
                    <input placeholder='name' name='name' onChange={e => this.handleNameChange(e)}/>
                    <p>Price:</p>
                    <input placeholder='price' name='price' onChange={e => this.handlePriceChange(e)}/>
                    <div className="form-buttons">
                        <button className="form-button" onClick={() => this.deleteInput()}>Cancel</button>
                        <button className="form-button" onClick={() => this.handleInventory()}>Add to Inventory</button>
                    </div>

                </form>
            </div>
        )
    }
}