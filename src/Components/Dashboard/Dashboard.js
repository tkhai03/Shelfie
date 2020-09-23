import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props){
        super(props)

    }





    render(){
        return(
            <div>
                {this.props.inventory.map((product, index) => {
                    return (
                        <Product product = {product} key = {index}/>
                    )
                })}
                <Product/>
            </div>
        )
    }
}