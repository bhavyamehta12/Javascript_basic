import React from 'react';

export default function Filter() {
  return (
    <div id="filters-container">
      <div id="filters-title">Filters</div>

      <div id="categories-section">
        <div className="filter-heading">Categories <span>&#9650;</span></div>
        <label className="filter-option"><input type="checkbox" /> Electronics</label>
        <label className="filter-option"><input type="checkbox" /> Clothing</label>
        <label className="filter-option"><input type="checkbox" /> Home & Kitchen</label>
        <label className="filter-option"><input type="checkbox" /> Books</label>
      </div>

      <div id="price-range-section">
        <div className="filter-heading">Price Range <span>&#9650;</span></div>
        <input type="range" id="price-slider" min="0" max="500" />
        <div id="price-inputs-wrapper">
          <div className="price-input-box">
            <span>Min</span>
            <input type="text" id="min-price-input" defaultValue="$0" />
          </div>
          <span>to</span>
          <div className="price-input-box">
            <span>Max</span>
            <input type="text" id="max-price-input" defaultValue="$500" />
          </div>
        </div>
      </div>

      <div id="brand-section">
        <div className="filter-heading">Brand <span>&#9650;</span></div>
        <label className="filter-option"><input type="checkbox" /> Brand A</label>
        <label className="filter-option"><input type="checkbox" /> Brand B</label>
        <label className="filter-option"><input type="checkbox" /> Brand C</label>
      </div>

      <div id="customer-rating-section">
        <div className="filter-heading">Customer Rating <span>&#9650;</span></div>
        <label className="filter-option"><input type="checkbox" /> 4 stars & up</label>
        <label className="filter-option"><input type="checkbox" /> 3 stars & up</label>
        <label className="filter-option"><input type="checkbox" /> 2 stars & up</label>
      </div>

      <div id="filters-footer">
        <button id="apply-filters-btn">Apply Filters</button>
        <button id="clear-all-btn">Clear All</button>
      </div>
    </div>
  );
}