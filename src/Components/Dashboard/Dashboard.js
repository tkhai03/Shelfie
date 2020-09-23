import React from 'react'
import Product from '../Product/Product'



export default function Dashboard(props) {



        return(

            <div>
                {props.inventory.map((product, index) => (
                        <Product product = {product} key = {index}/>
                ))}

            </div>
        )

}