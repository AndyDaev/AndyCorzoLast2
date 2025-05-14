import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      if (cursorRef.current) {
        const { x, y } = mouseRef.current;
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
      frameRef.current = null;
    };

    const handleMouseEnter = (e) => {
      e.preventDefault();
      setIsActive(true);
    };

    const handleMouseLeave = (e) => {
      e.preventDefault();
      setIsActive(false);
    };

    const setupInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .nav-link, .home-work-item, [role="button"], .project-item, .work-item');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.style.cursor = 'none';
      });
    };

    // Initial setup
    setupInteractiveElements();

    // Setup MutationObserver to watch for DOM changes
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setupInteractiveElements();
        }
      });
    });

    // Start observing the document body for changes
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Add event listeners for cursor movement
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });

    // Handle mouse enter/leave for the entire document
    document.addEventListener('mouseenter', () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Clean up event listeners from all interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .nav-link, .home-work-item, [role="button"], .project-item, .work-item');
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });

      document.removeEventListener('mouseenter', () => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1';
        }
      });

      document.removeEventListener('mouseleave', () => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '0';
        }
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{ opacity: 1 }}
    />
  );
};

export default CustomCursor; 