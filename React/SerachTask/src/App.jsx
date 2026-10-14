
import Header from "./Components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import Body from "./Components/Body";

const App = () => {
  const [products, setProducts] = useState([]);

  // Restore saved filter settings
  const [savedFilters] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("filterSettings")) || {};
    } catch {
      return {};
    }
  });

  const [search, setSearch] = useState(savedFilters.search ?? "");
  const [categories, setCategories] = useState(
    savedFilters.categories ?? []
  );
  const [minprice, setMinprice] = useState(
    savedFilters.minprice ?? 0
  );
  const [maxprice, setMaxprice] = useState(
    savedFilters.maxprice ?? 3000
  );
  const [brand, setBrand] = useState(savedFilters.brand ?? []);
  const [ratings, setRatings] = useState(savedFilters.ratings ?? 0);
  const [price, setPrice] = useState(
    savedFilters.price ?? "Low to High"
  );

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=0"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const filteredProducts = data.products.filter(
          (product) => product.category !== "groceries"
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  // Save all filter settings whenever they change
  useEffect(() => {
    const filterSettings = {
      categories,
      brand,
      minprice,
      maxprice,
      ratings,
      search,
      price,
    };

    localStorage.setItem(
      "filterSettings",
      JSON.stringify(filterSettings)
    );
  }, [
    categories,
    brand,
    minprice,
    maxprice,
    ratings,
    search,
    price,
  ]);

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
        price={price}
        setPrice={setPrice}
      />
    </div>
  );
};

export default App;
