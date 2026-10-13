import React from 'react';

export default function ProductCard({ img,title,description,rating,price }) {
  return (
    <div className="product-card">
      <div>
        <div className="product-image-box">
          <img src={img} alt={title}/>
        </div>
        <div className="product-title">{title}</div>
        <div className="product-desc">{description}</div>
        <div className="product-rating">{rating}</div>
      </div>
      <div className="product-footer">
        <span className="product-price">{price}</span>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}