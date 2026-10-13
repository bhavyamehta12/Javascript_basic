import Filter from './Filter';
import ProductList from './ProductList';

export default function Body({
  products,
  search,
  categories,
  setCategories,
  minprice,
  setMinprice,
  maxprice,
  setMaxprice,
  brand,
  setBrand,
  ratings,
  setRatings
}) {
  return (
    <div id="body-container">
      <Filter
        products={products}
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
      <ProductList
        products={products}
        search={search}
        categories={categories}
        minprice={minprice}
        maxprice={maxprice}
        brand={brand}
        ratings={ratings}
      />
    </div>
  );
}
