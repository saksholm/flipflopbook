import React from 'react';

const PostImage = (props) => {
  return (
    <div className="PostImage">
      <img className="image" src={ props.url } alt="Photograph" />
    </div>
  );
}

export default PostImage;
