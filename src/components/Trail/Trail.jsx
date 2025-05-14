import React, { useEffect, useRef, useState, useContext } from 'react';
import { trail } from '../../utils/trail';
import './Trail.css';
import { LanguageContext } from '../../context/LanguageContext';


//Language Context

const ES = {
  trail: "Holaa!! Soy Andy un diseñador gráfico y creativo inspirado por la estética Hyperpop y la ciencia ficción",
  trail2: "\u2728 Mueve el cursor para echar un vistazo a mi trabajo \u2728",
};
const EN = {
  trail: "Hi! I'm Andy a Creative Graphic Designer inspired by Hyperpop aesthetics and Science Fiction",
  trail2: "\u2728 Move the cursor to see a glimpse of my work \u2728",
};

// New constants for mobile/tablet devices
const mobileES = {
  trail: "Holaa!! Soy Andy un diseñador gráfico y creativo inspirado por la estética Hyperpop y la ciencia ficción",
  trail2: "\u2728 Pulsa para echar un vistazo a mi trabajo \u2728",
};

const mobileEN = {
  trail: "Hi! I'm Andy a Creative Graphic Designer inspired by Hyperpop aesthetics and Science Fiction",
  trail2: "\u2728 Tap to see a glimpse of my work \u2728",
};

const Trail = () => {
  const trailContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Check if the device is mobile/tablet (has touch events)
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = trailContainerRef.current;
    if (!container) return;

    const config = {
      imageCount: 21,
      imageLifespan: 750,
      removalDelay: 50,
      mouseThreshold: 100,
      scrollThreshold: 50,
      idleCursorInterval: 300,
      inDuration: 750,
      outDuration: 1000,
      inEasing: "cubic-bezier(.07,.5,.5,1)",
      outEasing: "cubic-bezier(.87, 0, .13, 1)",
    };

    // Create a shuffled array of indices
    const createShuffledIndices = () => {
      const indices = Array.from({ length: trail.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      return indices;
    };

    let shuffledIndices = createShuffledIndices();
    let currentIndex = 0;
    const trailElements = [];

    let mouseX = 0,
      mouseY = 0,
      lastMouseX = 0,
      lastMouseY = 0;
    let isMoving = false,
      isCursorInContainer = false;
    let lastRemovalTime = 0,
      lastSteadyImageTime = 0,
      lastScrollTime = 0;
    let isScrolling = false,
      scrollTicking = false;

    const isInContainer = (x, y) => {
      const heroRect = container.closest('.hero').getBoundingClientRect();
      return (
        x >= heroRect.left && 
        x <= heroRect.right && 
        y >= heroRect.top && 
        y <= heroRect.bottom
      );
    };

    const setInitialMousePos = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      isCursorInContainer = isInContainer(mouseX, mouseY);
      document.removeEventListener("mouseover", setInitialMousePos, false);
    };
    document.addEventListener("mouseover", setInitialMousePos, false);

    const hasMovedEnough = () => {
      const distance = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
      );
      return distance > config.mouseThreshold;
    };

    const getNextImageIndex = () => {
      if (currentIndex >= shuffledIndices.length) {
        shuffledIndices = createShuffledIndices();
        currentIndex = 0;
      }
      return shuffledIndices[currentIndex++];
    };

    const createTrailImage = () => {
      if (!isCursorInContainer) return;

      const now = Date.now();

      if (isMoving && hasMovedEnough()) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        createImage();
        return;
      }

      if (!isMoving && now - lastSteadyImageTime >= config.idleCursorInterval) {
        lastSteadyImageTime = now;
        createImage();
      }
    };

    const createImage = () => {
      const img = document.createElement("img");
      img.classList.add("trail-img");

      const imageIndex = getNextImageIndex();
      const rotation = (Math.random() - 0.5) * 50;
      img.src = trail[imageIndex].src;
      img.alt = trail[imageIndex].alt;

      const heroRect = container.closest('.hero').getBoundingClientRect();
      const relativeX = mouseX - heroRect.left;
      const relativeY = mouseY - heroRect.top;

      img.style.left = `${relativeX}px`;
      img.style.top = `${relativeY}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
      img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
      });

      trailElements.push({
        element: img,
        rotation: rotation,
        removeTime: Date.now() + config.imageLifespan,
      });
    };

    const createScrollTrailImage = () => {
      if (!isCursorInContainer) return;

      lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
      lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

      createImage();

      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const removeOldImages = () => {
      const now = Date.now();

      if (now - lastRemovalTime < config.removalDelay || trailElements.length === 0)
        return;

      const oldestImage = trailElements[0];
      if (now >= oldestImage.removeTime) {
        const imgToRemove = trailElements.shift();

        imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
        imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

        lastRemovalTime = now;

        setTimeout(() => {
          if (imgToRemove.element.parentNode) {
            imgToRemove.element.parentNode.removeChild(imgToRemove.element);
          }
        }, config.outDuration);
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isCursorInContainer = isInContainer(mouseX, mouseY);

      if (isCursorInContainer) {
        isMoving = true;
        clearTimeout(window.moveTimeout);
        window.moveTimeout = setTimeout(() => {
          isMoving = false;
        }, 100);
      }
    };

    const handleScroll = () => {
      isCursorInContainer = isInContainer(mouseX, mouseY);

      if (isCursorInContainer) {
        isMoving = true;
        lastMouseX += (Math.random() - 0.5) * 10;

        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
          isMoving = false;
        }, 100);
      }
    };

    const handleScrollTrail = () => {
      const now = Date.now();
      isScrolling = true;

      if (now - lastScrollTime < config.scrollThreshold) return;

      lastScrollTime = now;

      if (!scrollTicking) {
        requestAnimationFrame(() => {
          if (isScrolling) {
            createScrollTrailImage();
            isScrolling = false;
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollTrail, { passive: true });

    const animate = () => {
      createTrailImage();
      removeOldImages();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mouseover", setInitialMousePos, false);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTrail);
    };
  }, []);

  return (
    <section ref={trailContainerRef} className="trail-container">
      <p className="align-middle m-2 mix-blend-difference">
        {isMobile ? (language === "EN" ? mobileEN.trail : mobileES.trail) : (language === "EN" ? EN.trail : ES.trail)}
      </p>
      <p className="align-middle mix-blend-difference">
        {isMobile ? (language === "EN" ? mobileEN.trail2 : mobileES.trail2) : (language === "EN" ? EN.trail2 : ES.trail2)}
      </p>
    </section>
  );
};

export default Trail; 