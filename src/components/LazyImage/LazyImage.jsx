import React from 'react';

const LazyImage = ({ 
  src, 
  srcSet, 
  alt, 
  className, 
  sizes = '100vw',
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
};

export default LazyImage; 