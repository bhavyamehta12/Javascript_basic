// import React from 'react'
import Header from './Components/Header'
import './App.css'
import { useState,useEffect } from 'react'
import Body from './Components/Body'
import ProductList from './Components/ProductList'

const App = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function fetchProducts() {
            try {
            const response = await fetch(
                "https://dummyjson.com/products/category/smartphones"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setProducts(data.products);
            } catch (error) {
            console.error(error);
            }
        }

        fetchProducts();
    }, []);
  return (
    <div className='main'>
      <Header search={search} setSearch={setSearch} />
      <Body products={products} search={search}/>
    </div>
  )
}

export default App
