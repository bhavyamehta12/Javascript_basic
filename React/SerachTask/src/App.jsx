import Header from './Components/Header';
import './App.css';
import { useState, useEffect } from 'react';
import Body from './Components/Body';

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [minprice, setMinprice] = useState(0);
  const [maxprice, setMaxprice] = useState(3000);
  const [brand, setBrand] = useState([]);
  const [ratings, setRatings] = useState(0);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        const filteredProducts = data.products.filter(
          (product) => product.category !== 'groceries'
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="main">
      <Header search={search} setSearch={setSearch} />
      <Body
        products={products}
        search={search}
        categories={categories}
        setCategories={setCategories}
        minprice={minprice}
        setMinprice={setMinprice}
        maxprice={maxprice}
        setMaxprice={setMaxprice}
        brand={brand}
        setBrand={setBrand}
        ratings={ratings}
        setRatings={setRatings}

      />
    </div>
  );
};

export default App;
