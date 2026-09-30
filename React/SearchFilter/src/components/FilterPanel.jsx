const FilterPanel = ({
  category,
  setCategory,
  brands,
  setBrands,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  rating,
  setRating,
  inStock,
  setInStock,
  sort,
  setSort,
  clearFilters,
}) => {
  const handleBrandChange = (brand) => {
    setBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }

      return [...prev, brand];
    });
  };

  return (
    <div>
      <h2>Filters</h2>

      <h3>Category</h3>

      <label>
        <input
          type="radio"
          value="All"
          checked={category === "All"}
          onChange={(e) => setCategory(e.target.value)}
        />
        All
      </label>

      <label>
        <input
          type="radio"
          value="Phone"
          checked={category === "Phone"}
          onChange={(e) => setCategory(e.target.value)}
        />
        Phone
      </label>

      <label>
        <input
          type="radio"
          value="Laptop"
          checked={category === "Laptop"}
          onChange={(e) => setCategory(e.target.value)}
        />
        Laptop
      </label>

      <label>
        <input
          type="radio"
          value="Headphones"
          checked={category === "Headphones"}
          onChange={(e) => setCategory(e.target.value)}
        />
        Headphones
      </label>

      <label>
        <input
          type="radio"
          value="Tablet"
          checked={category === "Tablet"}
          onChange={(e) => setCategory(e.target.value)}
        />
        Tablet
      </label>

      <h3>Brand</h3>

      {["Apple", "Samsung", "Google", "Dell", "Sony"].map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={brands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />
          {brand}
        </label>
      ))}

      <h3>Price</h3>

      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <h3>Rating</h3>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="0">All ratings</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
        <option value="2">2★ & above</option>
      </select>

      <h3>Stock</h3>

      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        In Stock Only
      </label>

      <h3>Sort</h3>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="ratingHigh">Rating: High → Low</option>
        <option value="nameAZ">Name: A → Z</option>
      </select>

      <br />

      <button onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;