import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory: []
        }
    }

    componentDidMount()

    getInventory() {
        axios.get('/api/inventory')
        .then(res => this.setState({inventory: res.data}))
    }



    render(){
        return(
            <div>
                {this.state.inventory.map((element) => {
                    return <Product key={element.id} />
                })}
            </div>
        )
    }
}