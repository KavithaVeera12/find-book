import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');


  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <p className='header'>Book Finder</p>
      <div className="search">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="btn btn-success" onClick={handleSearch}>
            Search
          </button>
        )}
        
      </div>
    </div>
  );
};

export default SearchBar;
