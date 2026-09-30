const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>

      <p>Brand: {product.brand}</p>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Rating: ⭐ {product.rating}</p>

      <p>
        Stock Status:{" "}
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;