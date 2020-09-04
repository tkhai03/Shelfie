import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }





    render(){
        return(
            <div>
                Form
                <input></input>
                <input></input>
                <input></input>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}