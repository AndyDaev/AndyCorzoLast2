import { useState, useEffect } from "react";
import { IKImage, IKContext } from "imagekitio-react";

import "./Preview.css";

// Import the original array
import { previewImgs } from "./previewImages";
import tickSfx from "../../assets/sfx/tick.wav";

const defaultPreviewImg = previewImgs[0];
const buffer = 100; // Original buffer size
const preloadCount = 3; // Number of next images to preload

const Preview = () => {
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);
  
  // Force re-render when image changes
  const [rerender, setRerender] = useState(0);

  // Preload the next few images
  useEffect(() => {
    // Create array of next image indices to preload
    const nextIndices = [];
    for (let i = 1; i <= preloadCount; i++) {
      const nextIndex = (currentIndex + i) % previewImgs.length;
      nextIndices.push(nextIndex);
    }
    
    // Get image URLs for those indices
    const imagesToPreload = nextIndices.map(index => previewImgs[index]);
    setPreloadedImages(imagesToPreload);
    
    // Actual preloading - create image objects to cache them
    imagesToPreload.forEach(imgSrc => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, [currentIndex]);


  // Original scroll logic with fixes for rendering and sound
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const index = Math.floor(position / buffer) % previewImgs.length;
      
      if (index !== currentIndex) {
        const selectedPreviewImg = previewImgs[index];
        setPreviewImg(selectedPreviewImg);
        setCurrentIndex(index);
        setRerender(prev => prev + 1); // Force re-render
        
        // Play sound if allowed
        if (canPlaySound) {
          try {
            const tickSound = new Audio(tickSfx);
            tickSound.volume = 0.5;
            tickSound.play().catch(err => {
              console.debug("Sound couldn't play:", err.message);
            });
          } catch (err) {
            console.debug("Error creating sound:", err);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, canPlaySound]);

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <div className="archive-preview">
        {/* Current image */}
        <IKImage
          key={`${previewImg}-${rerender}`}
          src={previewImg}
          transformation={[{ height: 600, width: 900, quality: 80, format: "auto" }]}
          lqip={{ active: true, quality: 20 }}
          alt="currently selected source"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Hidden preloaded images */}
        <div style={{ display: 'none' }}>
          {preloadedImages.map((img, i) => (
            <IKImage
              key={`preload-${i}-${img}`}
              src={img}
              transformation={[{ height: 600, width: 900, quality: 80, format: "auto" }]}
              lqip={{ active: false }}
              alt={`preload-${i}`}
            />
          ))}
        </div>
      </div>
    </IKContext>
  );
};

export default Preview;
