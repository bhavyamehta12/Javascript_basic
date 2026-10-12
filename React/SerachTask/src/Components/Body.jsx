import React from 'react';
import Filter from './Filter';
import ProductList from './ProductList';

export default function BodyComponent({products,search}) {
  return (
    <div id="body-container">
      <Filter />
      <ProductList products={products} search={search}/>    </div>
  );
}