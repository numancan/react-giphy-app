import React, { useState, createContext } from 'react';

export const GifContext = createContext();

export const GifProvider = props => {
  const [gifs, setGifs] = useState([]);
  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {props.children}
    </GifContext.Provider>
  );
};
