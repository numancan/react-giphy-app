import React from 'react';

const Gif = ({ gif }) => {
  gif.user = gif.user || {
    avatar_url: '../anonymous.jpg',
    display_name: 'anonymous'
  };
  return (
    <li className="gif">
      <img
        src={gif.images.fixed_width.url}
        alt="gif"
        style={{
          height: parseInt(gif.images.fixed_width.height)
        }}
      />
      <div className="gif-bottom">
        <img className="avatar" src={gif.user.avatar_url} alt="" />
        <h5>{gif.user.display_name}</h5>
      </div>
    </li>
  );
};

export default Gif;
