import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Menu from "./components/Menu/Menu";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Work2 from "./pages/Work2/Projects";

import { AnimatePresence } from "framer-motion";
import Altavoz from "./pages/Project/Altavoz";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/Work2/Projects";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
 {/*      <Menu /> */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/altavoz" element={<Altavoz />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
