import React from 'react'


const Product = (props) => {


    console.log(props)
    return (
        <div>
            {props.product.name}
            <button onClick={() => props.setThisProduct(props.product)}>EDIT</button>
            <button onClick={() => props.deleteProduct(props.product.id)}>DELETE</button>

        </div>
    )

}

export default Product