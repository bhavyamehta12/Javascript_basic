import React from 'react'
import images from './images.jpg'
import '../App.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
        <img src={images} />  
        <h2>Wireless Headphones</h2>
        <div className="rating">
            <span className="stars">★★★★☆</span>
            <span className="rating-number">4.0 (120 reviews)</span>
        </div>

        <p>High-quality sound.</p>

        <h3>₹2,499</h3>

        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
