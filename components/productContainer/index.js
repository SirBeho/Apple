import React from 'react'

const ProductContainer = ({children, clase}) => {
    return (
        <div className={clase}>
            {children}
        </div>
    )
}

export default ProductContainer