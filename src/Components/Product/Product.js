import React from 'react'


const Product = (props) => {


    console.log(props)
    return (
        <div className="product-box">
            <img className= "product-imgurl" src={props.product.imgurl} alt={`${props.product.name}`}  />
            <p className="product-text">{props.product.name}</p>
            <p className="product-text">{`$${props.product.price}`}</p>
            <div className="button-container">
                <button className="product-button" onClick={() => props.deleteProduct(props.product.id)}>DELETE</button>
                <button className="product-button" onClick={() => props.setThisProduct(props.product)}>EDIT</button>
            </div>

        </div>
    )

}

export default Product