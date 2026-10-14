export default function Filter({
  categories,
  setCategories,
  minprice,
  setMinprice,
  maxprice,
  setMaxprice,
  brand,
  setBrand,
  ratings,
  setRatings,
}) {
  return (
    <div id="filters-container">
      <div id="filters-title">Filters</div>

      <div id="categories-section">
        <div className="filter-heading">
          Categories <span>&#9650;</span>
        </div>
        <label className="filter-option">
          <input
            type="checkbox"
            value="beauty"
            checked={categories.includes('beauty')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'beauty']);
              } else {
                setCategories((prev) => prev.filter((cat) => cat !== 'beauty'));
              }
            }}
          />{' '}
          Beauty
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="fragrances"
            checked={categories.includes('fragrances')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'fragrances']);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== 'fragrances')
                );
              }
            }}
          />{' '}
          Fragrances
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="furniture"
            checked={categories.includes('furniture')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'furniture']);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== 'furniture')
                );
              }
            }}
          />{' '}
          Furniture
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="skin-care"
            checked={categories.includes('skin-care')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'skin-care']);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== 'skin-care')
                );
              }
            }}
          />{' '}
          Skin-Care
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="laptops"
            checked={categories.includes('laptops')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'laptops']);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== 'laptops')
                );
              }
            }}
          />{' '}
          Laptops
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="vehicle"
            checked={categories.includes('vehicle')}
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((prev) => [...prev, 'vehicle']);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== 'vehicle')
                );
              }
            }}
          />{' '}
          Vehicle
        </label>
      </div>

      <div id="price-range-section">
        <div className="filter-heading">Price Range </div>

        <div id="price-inputs-wrapper">
          <div className="price-input-box">
            <span>Min</span>
            <input
              type="number"
              id="min-price-input"
              value={minprice}
              onChange={(e) => {
                const value = e.target.value;
                setMinprice(
                  value === '' ? 0 : Math.min(Number(value), maxprice)
                );
              }}
            />
          </div>
          <span>to</span>
          <div className="price-input-box">
            <span>Max</span>
            <input
              type="number"
              id="max-price-input"
              value={maxprice}
              onChange={(e) => {
                const value = e.target.value;
                setMaxprice(
                  value === '' ? 0 : Math.max(Number(value), minprice)
                );
              }}
            />
          </div>
        </div>
      </div>

      <div id="brand-section">
        <div className="filter-heading">
          Brand <span>&#9650;</span>
        </div>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Dior"
            checked={brand.includes('Dior')}
            onChange={(e) => {
              if (e.target.checked) {
                setBrand((prev) => [...prev, 'Dior']);
              } else {
                setBrand((prev) => prev.filter((item) => item !== 'Dior'));
              }
            }}
          />{' '}
          Dior
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Gucci"
            checked={brand.includes('Gucci')}
            onChange={(e) => {
              if (e.target.checked) {
                setBrand((prev) => [...prev, 'Gucci']);
              } else {
                setBrand((prev) => prev.filter((item) => item !== 'Gucci'));
              }
            }}
          />{' '}
          Gucci
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Calvin Klein"
            checked={brand.includes('Calvin Klein')}
            onChange={(e) => {
              if (e.target.checked) {
                setBrand((prev) => [...prev, 'Calvin Klein']);
              } else {
                setBrand((prev) =>
                  prev.filter((item) => item !== 'Calvin Klein')
                );
              }
            }}
          />{' '}
          Calvin Klein
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Essence"
            checked={brand.includes('Essence')}
            onChange={(e) => {
              if (e.target.checked) {
                setBrand((prev) => [...prev, 'Essence']);
              } else {
                setBrand((prev) => prev.filter((item) => item !== 'Essence'));
              }
            }}
          />{' '}
          Essence
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Knoll"
            checked={brand.includes('Knoll')}
            onChange={(e) => {
              if (e.target.checked) {
                setBrand((prev) => [...prev, 'Knoll']);
              } else {
                setBrand((prev) => prev.filter((item) => item !== 'Knoll'));
              }
            }}
          />{' '}
          Knoll
        </label>
      </div>

      <div id="customer-rating-section">
        <div className="filter-heading">
          Customer Rating <span>&#9650;</span>
        </div>
        <label className="filter-option">
          <input
            type="radio"
            name="rating"
            value="4"
            checked={ratings == '4'}
            onChange={(e) => setRatings(Number(e.target.value))}
          />
          4 Stars & above
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="rating"
            value="3"
            checked={ratings == '3'}
            onChange={(e) => setRatings(Number(e.target.value))}
          />
          3 Stars & above
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="rating"
            value="2"
            checked={ratings == '2'}
            onChange={(e) => setRatings(Number(e.target.value))}
          />
          2 Stars & above
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="rating"
            value="1"
            checked={ratings == '1'}
            onChange={(e) => setRatings(Number(e.target.value))}
          />
          Show All
        </label>
      </div>
    </div>
  );
}
