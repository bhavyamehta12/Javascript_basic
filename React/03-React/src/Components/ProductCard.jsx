import React from 'react'

const ProductCard = ({ products }) => {
  return (
    <div>
        {products.map((item)=>{
          return(
            <div key={item.id}>
              <p><strong><b>Name :{item.name}</b></strong></p>
              <p><strong><b>Price :{item.price}</b></ strong></p>
            </div>
          )
        })}
    </div>
  )
}

export default ProductCard
