import { useState } from "react";
import products from "./data/products";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import ProductList from "./components/ProductList";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brands, setBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("0");
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("default");

  const filteredProducts = products
    .filter((product) => {
      const searchText = search.toLowerCase().trim();

      if (searchText === "") {
        return true;
      }

      return (
        product.name.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText)
      );
    })
    .filter((product) => {
      if (category === "All") {
        return true;
      }

      return product.category === category;
    })
    .filter((product) => {
      if (brands.length === 0) {
        return true;
      }

      return brands.includes(product.brand);
    })
    .filter((product) => {
      if (minPrice !== "" && product.price < Number(minPrice)) {
        return false;
      }

      if (maxPrice !== "" && product.price > Number(maxPrice)) {
        return false;
      }

      return true;
    })
    .filter((product) => {
      return product.rating >= Number(rating);
    })
    .filter((product) => {
      if (inStock) {
        return product.inStock;
      }

      return true;
    });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "priceLow") {
      return a.price - b.price;
    }

    if (sort === "priceHigh") {
      return b.price - a.price;
    }

    if (sort === "ratingHigh") {
      return b.rating - a.rating;
    }

    if (sort === "nameAZ") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setBrands([]);
    setMinPrice("");
    setMaxPrice("");
    setRating("0");
    setInStock(false);
    setSort("default");
  };

  return (
    <div>
      <h1>Product Explorer</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div>
        <FilterPanel
          category={category}
          setCategory={setCategory}
          brands={brands}
          setBrands={setBrands}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          rating={rating}
          setRating={setRating}
          inStock={inStock}
          setInStock={setInStock}
          sort={sort}
          setSort={setSort}
          clearFilters={clearFilters}
        />

        <div>
          <h2>
            Products Found: {sortedProducts.length}
          </h2>

          <ProductList products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;