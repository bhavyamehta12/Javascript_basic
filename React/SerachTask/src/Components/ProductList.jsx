import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({
  products = [],
  search,
  categories = [],
  minprice,
  maxprice,
  brand = [],
  ratings,
  price,
  setPrice,
}) {
  const filterProduct = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      categories.length === 0 ||
      categories.includes(product.category);

    const matchesPrices =
      product.price >= minprice &&
      product.price <= maxprice;

    const matchesBrand =
      brand.length === 0 ||
      brand.includes(product.brand);

    const matchesRatings = product.rating >= ratings;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrices &&
      matchesBrand &&
      matchesRatings
    );
  });
  const sortedProducts = [...filterProduct].sort((a, b) => {
    if (price === "Low to High") {
      return a.price - b.price;
    }

    if (price === "High to Low") {
      return b.price - a.price;
    }

    return 0;
  });
useEffect(() => {
  localStorage.setItem(
    "sortedProducts",
    JSON.stringify(sortedProducts)
  );
}, [sortedProducts]);
  return (
    <div id="product-results-container">
      <div id="results-header-bar">
        <div id="results-title">
          Product Results ({sortedProducts.length})
        </div>

        <div id="results-controls">
          <select
            className="sort-dropdown"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="Low to High">
              Price: Low to High
            </option>
            <option value="High to Low">
              Price: High to Low
            </option>
          </select>
        </div>
      </div>

      <div id="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            img={product.thumbnail}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}