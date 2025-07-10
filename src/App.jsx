import "./App.css";
import { Routes, Route, useLocation, useParams, Navigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import Transition from './components/Transition/Transition';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Work/Projects';
import Project0_Altavoz from './pages/Projects/Project0_Altavoz';
import Project1_VisionFest from './pages/Projects/Project1_VisionFest';
import Project2_OkamiEsports from './pages/Projects/Project2_OkamiEsports';
import Project3_Tonkati from './pages/Projects/Project3_Tonkati';
import Project4_GijonThrowdown from './pages/Projects/Project4_GijonThrowdown';
import SampleProject from "./pages/Projects/SampleProject";
import Archive2 from './pages/archive2/Archive';
import Contact from './pages/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import FAQ from "./pages/FAQ/FAQ";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { workListEN, workListES } from "./data/workList";
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import Cookies from './pages/About/Cookies';
import LegalAdvice from './pages/About/LegalAdvice';
import Privacy from './pages/About/Privacy';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './pages/NotFound';

// Map of project components
const PROJECT_COMPONENTS = {
  "Project0_Altavoz": Project0_Altavoz,
  "Project1_VisionFest": Project1_VisionFest,
  "Project2_OkamiEsports": Project2_OkamiEsports,
  "Project3_Tonkati": Project3_Tonkati,
  "Project4_GijonThrowdown": Project4_GijonThrowdown,
};

// Preloader component
const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get the work images to preload
    const imagesToLoad = [...workListEN, ...workListES].map(item => item.image);
    const totalImages = imagesToLoad.length;
    let loadedImages = 0;

    // Show at least 1 second of preloader
    const minDisplayTime = 1000;
    const startTime = Date.now();

    // Create image objects for each URL to preload them
    imagesToLoad.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        setProgress(Math.floor((loadedImages / totalImages) * 100));
        
        // Check if all images loaded and minimum time elapsed
        if (loadedImages === totalImages) {
          const elapsed = Date.now() - startTime;
          if (elapsed >= minDisplayTime) {
            setLoaded(true);
            onLoaded();
          } else {
            setTimeout(() => {
              setLoaded(true);
              onLoaded();
            }, minDisplayTime - elapsed);
          }
        }
      };
      
      img.onerror = () => {
        loadedImages++;
        setProgress(Math.floor((loadedImages / totalImages) * 100));
        
        // Check if all images loaded (even with errors)
        if (loadedImages === totalImages) {
          const elapsed = Date.now() - startTime;
          if (elapsed >= minDisplayTime) {
            setLoaded(true);
            onLoaded();
          } else {
            setTimeout(() => {
              setLoaded(true);
              onLoaded();
            }, minDisplayTime - elapsed);
          }
        }
      };
      
      img.src = src;
    });
  }, [onLoaded]);

  return (
    <div className={`preloader ${loaded ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="loader-text">Andy Corzo</div>
        <div className="progress-bar">
          <div 
            className="progress-inner" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-text">{progress}%</div>
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <LanguageProvider>
        {isLoading ? (
          <Preloader onLoaded={handleLoaded} />
        ) : (
          <>
            {!isMobile && <CustomCursor />}
            <ScrollToTop />
            <Navbar />
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/work" element={<Projects />} />
               {/*  <Route path="/archive" element={<Archive2 />} /> */}
                <Route path="/project/:id" element={<ProjectRouter />} />
                <Route path="/project/sample" element={<SampleProject />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/legal" element={<LegalAdvice />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </>
        )}
      </LanguageProvider>
    </HelmetProvider>
  );
};

// Project Router component to handle dynamic project loading
const ProjectRouter = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const workList = language === "EN" ? workListEN : workListES;

  // Convert id to number and handle out-of-bounds IDs
  const currentId = parseInt(id);
  const maxId = workList.length; // Since we start from 0

  // If id is out of bounds, redirect to project 0
  if (isNaN(currentId) || currentId < 0 || currentId > maxId) {
    return <Navigate to="/project/0" replace />;
  }

  const project = workList.find(p => p.id === currentId);
  
  if (!project) {
    return <Navigate to="/project/0" replace />;
  }

  const ProjectComponent = PROJECT_COMPONENTS[project.component];
  if (!ProjectComponent) {
    return <Navigate to="/project/0" replace />;
  }

  return <ProjectComponent />;
};

export default App;
