import React, { useEffect, useState, useContext } from 'react';
import { GifContext } from '../GifContext';

const SearchBar = () => {
  const API_KEY = 'dc6zaTOxFJmzC';

  const { setGifs } = useContext(GifContext);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('trending?');

  useEffect(() => {
    getGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getGifs = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${query}api_key=${API_KEY}`
    );
    const data = await response.json();
    setGifs(data.data);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    setQuery(`search?q=${search}&`);
    setGifs([]);
  };

  const handleKeyPress = event => {
    event.keyCode === 13 && handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="search"
        onChange={updateSearch}
        onKeyUp={handleKeyPress}
      />
      <button type="submit" onClick={handleSearch}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
};

export default SearchBar;
