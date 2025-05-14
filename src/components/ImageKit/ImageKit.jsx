// ImageKit.js
import React, { useState, useEffect } from 'react';

/**
 * ImageKit React Component
 * 
 * Props:
 * @param {string} src - Original image URL or path
 * @param {string} urlEndpoint - Your ImageKit URL endpoint
 * @param {string} transformationPosition - Position of transformation parameters (default: 'path')
 * @param {object} transformation - Transformation parameters
 * @param {string} alt - Alt text for the image
 * @param {object} lqip - Low Quality Image Placeholder options
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {object} ...rest - Any other props to pass to the img element
 */
const ImageKit = ({
  src,
  urlEndpoint,
  transformationPosition = 'path',
  transformation = {},
  alt = '',
  lqip = { active: false, quality: 20, blur: 6 },
  width,
  height,
  className = '',
  ...rest
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [lqipUrl, setLqipUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Construct the base URL
    let baseUrl = urlEndpoint;
    
    // Remove any trailing slash from the URL endpoint
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    
    // Add transformations
    const transformationString = generateTransformationString(transformation);
    
    // Create the full URL based on transformation position
    let fullUrl;
    if (transformationPosition === 'query') {
      fullUrl = `${baseUrl}${src}?${transformationString}`;
    } else {
      // Default is 'path'
      fullUrl = `${baseUrl}/tr:${transformationString}${src}`;
    }
    
    setImageUrl(fullUrl);
    
    // Create LQIP URL if enabled
    if (lqip && lqip.active) {
      const lqipTransformation = {
        ...transformation,
        q: lqip.quality || 20,
        bl: lqip.blur || 6
      };
      
      const lqipTransformString = generateTransformationString(lqipTransformation);
      
      if (transformationPosition === 'query') {
        setLqipUrl(`${baseUrl}${src}?${lqipTransformString}`);
      } else {
        setLqipUrl(`${baseUrl}/tr:${lqipTransformString}${src}`);
      }
    }
  }, [src, urlEndpoint, transformationPosition, transformation, lqip]);

  // Helper function to generate transformation string
  const generateTransformationString = (transformObj) => {
    return Object.keys(transformObj)
      .map(key => `${key}-${transformObj[key]}`)
      .join(',');
  };

  // Handle image load complete
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`imagekit-image-container ${className}`} style={{ position: 'relative', width, height }}>
      {lqip && lqip.active && !isLoaded && lqipUrl && (
        <img
          src={lqipUrl}
          alt={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      <img
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoaded}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        {...rest}
      />
    </div>
  );
};

export default ImageKit;