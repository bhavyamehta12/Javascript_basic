import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        <h2>{props.name}</h2> 
        <p>{props.price}</p>
        <p>{props.available}</p>
    </div>
  )
}

export default ProductCard
