import ProductCard from './ProductCard';

export default function ProductList({
  products = [],
  search,
  categories = [],
  minprice,
  maxprice,
  brand,
  ratings
}) {
  const filterProduct = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      categories.length === 0 || categories.includes(product.category);

    const matchesPrices = product.price >= minprice && product.price <= maxprice;

    const matchesBrand = brand.length===0 || brand.includes(product.brand);
    const matchesRatings = product.rating>=ratings
    return matchesSearch && matchesCategory && matchesPrices && matchesBrand && matchesRatings;
    
  });
  
  return (
    <div id="product-results-container">
      <div id="results-header-bar">
        <div id="results-title">Product Results ({filterProduct.length})</div>

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
            <button className="view-toggle-btn active">
              &#8862; Grid View
            </button>
            <button className="view-toggle-btn">&#9776; List View</button>
          </div>
        </div>
      </div>

      <div id="product-grid">
        {filterProduct.map((product) => (
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
