import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'


export default function Dashboard(props) {



        return(

            <div>
                {props.inventory.map((product, index) => (
                        <Product product = {product} key = {index}/>
                ))}

            </div>
        )

}