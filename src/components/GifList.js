import React, { useContext } from 'react';
import Gif from './Gif';
import { GifContext } from '../GifContext';

const GifList = () => {
  const { gifs } = useContext(GifContext);

  return gifs.length ? (
    <ul className="gif-list">
      {gifs.map(gif => (
        <Gif gif={gif} key={gif.id} />
      ))}
    </ul>
  ) : (
    <i className="loading fas fa-spinner" />
  );
};

export default GifList;
