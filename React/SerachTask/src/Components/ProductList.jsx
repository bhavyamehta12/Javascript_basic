// import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
// import Search from './Search';

export default function ProductList({products=[],search}) {
    const filterProduct = search.trim() === ""
  ? products
  : products.filter((product) =>
      product.title.toLowerCase().includes(search.trim().toLowerCase())
    );
    
    console.log(search)
  return (
    <div id="product-results-container">
      <div id="results-header-bar">
        <div id="results-title">Product Results (120 items)</div>
        
        <div id="results-controls">
          <select className="sort-dropdown">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          <select className="sort-dropdown">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          <div id="view-toggles-wrapper">
            <button className="view-toggle-btn active">&#8862; Grid View</button>
            <button className="view-toggle-btn">&#9776; List View</button>
          </div>
        </div>
      </div>

      <div id="product-grid">
        {filterProduct.map((product)=>(
           <ProductCard key={product.id} img={product.thumbnail} title={product.title} description={product.description} rating={product.rating} price={product.price} />
        ))}
      </div>
      {/* <Search/>  */}
    </div>
  );
}