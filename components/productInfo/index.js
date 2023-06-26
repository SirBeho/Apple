import React from 'react'
import '@/components/productInfo/productInfo.css';
const ProductInfo = (
    {
        state,
        product,
        name,
        prce
    }) => {
    return (
        <div className='ip-text'>

            <h4>{state}</h4>
            <h3>{product}</h3>
            <h2>{name}</h2>
            <p>{prce}</p>

            <div className='ip-buttons'>
                <button>Buy</button>
                <a>{'Learn more >'}</a>
            </div>

        </div>
    )
}

export default ProductInfo