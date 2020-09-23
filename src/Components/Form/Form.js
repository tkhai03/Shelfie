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

handleNameChange(e){
    this.setState({
        name: e.target.value
    })
}

handlePriceChange(e){
    this.setState({
        price: e.target.value
    })
}

handleImgurlChange(e){
    this.setState({
        imgurl: e.target.value
    })
}

deleteInput(){
    this.setState({
        name: '',
        price: 0,
        imgurl: ''
    })
}

handleInventory(){
    
}

    render(){
        console.log(this.state)

        return(
            <div>
                Form
                <input placeholder='name' name='name' onChange={e => this.handleNameChange(e)}/>
                <input placeholder='price' name='price' onChange={e => this.handlePriceChange(e)}/>
                <input placeholder='img url' name='imgurl' onChange={e => this.handleImgurlChange(e)}/>
                <button onClick={() => this.deleteInput()}>Cancel</button>
                <button onClick={() => this.handleInventory()}>Add to Inventory</button>
            </div>
        )
    }
}