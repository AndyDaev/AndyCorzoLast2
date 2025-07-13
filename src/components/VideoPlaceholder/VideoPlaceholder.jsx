import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const VideoPlaceholder = ({ 
  src, 
  className = '', 
  style = {}, 
  autoPlay = false, 
  loop = false, 
  muted = true, 
  playsInline = false,
  preload = 'auto',
  poster = undefined,
  children,
  ...rest 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { language } = useContext(LanguageContext);
  
  const messages = {
    EN: {
      loading: "Loading video...",
      error: "Video could not be loaded"
    },
    ES: {
      loading: "Cargando video...",
      error: "No se pudo cargar el video"
    }
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`video-container ${className}`} style={{ position: 'relative', ...style }}>
      {/* Loading placeholder */}
      {isLoading && (
        <div 
          className="video-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: 'var(--primary)',
            fontSize: '1.2rem',
            fontWeight: '500',
            zIndex: 2
          }}
        >
          {messages[language === 'EN' ? 'EN' : 'ES'].loading}
        </div>
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div 
          className="video-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: '#666',
            fontSize: '1rem',
            zIndex: 2
          }}
        >
          {messages[language === 'EN' ? 'EN' : 'ES'].error}
        </div>
      )}
      
      {/* Video element */}
      <video
        src={src}
        className={className}
        style={style}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        poster={poster}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        {...rest}
      >
        {children}
      </video>
    </div>
  );
};

export default VideoPlaceholder; 