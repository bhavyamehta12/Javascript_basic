import React from 'react';

export default function Search({ search, setSearch }) {
  console.log("search:", search);
  console.log("setSearch:", setSearch);

  return (
    <div id="search-container">
      <div id="search-input-wrapper">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          id="search-input"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => {
            console.log("setSearch type:", typeof setSearch);
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}