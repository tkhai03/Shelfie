import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'



export default function Dashboard(props) {

    const deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(() => {props.getInventory()})
    }


        return(

            <div>
                {props.inventory.map((product, index) => (
                        <Product setThisProduct = {props.setThisProduct} deleteProduct = {deleteProduct} product = {product} key = {index}/>
                ))}

            </div>
        )

}