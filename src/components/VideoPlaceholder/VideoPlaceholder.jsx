import React, { useState, useRef, useEffect } from 'react';
import './VideoPlaceholder.css';

const VideoPlaceholder = ({ 
  src, 
  className = '', 
  autoPlay = false, 
  loop = false, 
  muted = true, 
  playsInline = true, 
  poster = undefined,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (onLoad) onLoad();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      if (onError) onError();
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [onLoad, onError]);

  return (
    <div className={`video-placeholder ${className}`}>
      {isLoading && !hasError && (
        <div className="video-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      {hasError && (
        <div className="video-error">
          <p>Video could not be loaded</p>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        className={`video-element ${isLoading ? 'loading' : ''} ${hasError ? 'error' : ''}`}
        {...props}
      />
    </div>
  );
};

export default VideoPlaceholder; 