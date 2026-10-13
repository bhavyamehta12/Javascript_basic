import { useRef, useEffect } from "react";

export default function Search({ search, setSearch }) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div id="search-container">
      <div id="search-input-wrapper">
        <span className="search-icon">🔍</span>

        <input
          ref={searchInputRef}
          type="text"
          id="search-input"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}