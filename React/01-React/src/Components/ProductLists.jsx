import React from 'react'
import ProductCard from './ProductCard'

const ProductLists = () => {
  return (
    <>
      <ProductCard
  name="iPhone 17"
  price={79999}
  available={true}
/>

<ProductCard
  name="Samsung S26"
  price={74999}
  available={true}
/>

<ProductCard
  name="Pixel 10"
  price={69999}
  available={false}
/>
    </>
  )
}

export default ProductLists
