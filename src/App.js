import React from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import { GifProvider } from './GifContext';
import './App.css';

const App = () => {
  return (
    <GifProvider>
      <div className="container">
        <SearchBar />
        <GifList />
      </div>
    </GifProvider>
  );
};

export default App;
