import { workListEN, workListES } from "../../data/workList";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "tailwindcss";
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useLenis } from "lenis/react";
import Transition from "../../components/Transition/Transition";
import Trail from "../../components/Trail/Trail";
import { LanguageContext } from "../../context/LanguageContext";
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const ES = {
  projects: "Mis proyectos",
  hobbies: "Hobbies",
  branding: "Diseño de Marca",
  ux: "Diseño de Interfaz de Usuario",
  motionGraphics: "Gráficos de Movimiento",
  threeDDesign: "Diseño 3D",
};

const EN = {
  projects: "My Projects",
  hobbies: "Hobbies",
  branding: "Branding",
  ux: "UI/UX",
  motionGraphics: "Motion Graphics",
  threeDDesign: "3D Design",
};

const Home = () => {
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenis = useLenis();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  const workItems = language === "EN" ? workListEN : workListES;

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 2}`,
        scrub: 0.5,
      },
    });

    if (titles.length >= 3) {
      gsap.set(titles[0], { opacity: 1, scale: 1 });
      gsap.set(titles[1], { opacity: 0, scale: 0.75 });
      gsap.set(titles[2], { opacity: 0, scale: 0.75 });

      masterTimeline
        .to(
          titles[0],
          {
            opacity: 0,
            scale: 0.75,
            duration: 0.3,
            ease: "power2.out",
          },
          1
        )
        .to(
          titles[1],
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          },
          1.25
        )
        .to(
          titles[1],
          {
            opacity: 0,
            scale: 0.75,
            duration: 0.3,
            ease: "power2.out",
          },
          2.5
        )
        .to(
          titles[2],
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          },
          2.75
        );
    }

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    if (workHeaderSection && homeWorkSection) {
      ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        anticipatePin: 1,
        scrub: false
      });
      
      gsap.set(workHeaderSection, { 
        zIndex: 1
      });
      
      gsap.set(homeWorkSection, { 
        position: "relative",
        zIndex: 10
      });
    }

    return () => {
      if (pinTrigger) pinTrigger.kill();
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <Helmet>
        <title>{language === 'EN' ? 'Andy Corzo – Creative Portfolio' : 'Andy Corzo – Portafolio Creativo'}</title>
        <meta name="description" content={language === 'EN' ? 'Portfolio of Andy Corzo, creative designer. Branding, UI/UX, motion graphics, and more.' : 'Portafolio de Andy Corzo, diseñador creativo. Branding, UI/UX, motion graphics y más.'} />
        <meta property="og:title" content={language === 'EN' ? 'Andy Corzo – Creative Portfolio' : 'Andy Corzo – Portafolio Creativo'} />
        <meta property="og:description" content={language === 'EN' ? 'Portfolio of Andy Corzo, creative designer.' : 'Portafolio de Andy Corzo, diseñador creativo.'} />
        <meta property="og:image" content="/public/site-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andycorzo.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ReactLenis root>
        <div className="page home bg-white">
          <section className="hero bg-[#121212]">
            <div className="hero-img"></div>
            <div className="hero-header">
              <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
                Andy
              </AnimatedCopy>
              <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.8}>
                Corzo
              </AnimatedCopy>
            </div>
            <Trail />
          </section>

          <section ref={stickyWorkHeaderRef} className="sticky-work-header">
            <AnimatedCopy tag="h1" animateOnScroll="true">
              {langObj.projects}
            </AnimatedCopy>
          </section>

          <section ref={homeWorkRef} className="home-work">
            <div className="home-work-list">
              {workItems.map((work, index) => (
                <Link
                  to={work.route}
                  key={work.id}
                  className="home-work-item"
                >
                  <p className="primary sm">{`${String(index + 1).padStart(
                    2,
                    "0"
                  )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                  <h3>{work.title}</h3>
                  <div className="work-item-img">
                    <IKImage
                      src={work.image}
                      transformation={[
                        {
                          height: 500,
                          width: 800,
                          quality: 80,
                          format: "auto"
                        }
                      ]}  
                      lqip={{ active: true, quality: 20 }}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4>{work.category}</h4>
                </Link>
              ))}
            </div>
          </section>


          <section className="hobbies">
            <div className="hobby">
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                {langObj.branding}
              </AnimatedCopy>
            </div>
            <div className="hobby">
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                {langObj.ux}
              </AnimatedCopy>
            </div>
            <div className="hobby">
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                {langObj.motionGraphics}
              </AnimatedCopy>
            </div>
            <div className="hobby">
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                {langObj.threeDDesign}
              </AnimatedCopy>
            </div>
          </section>

          <ContactForm />
          <Footer />

          <button 
            onClick={scrollToTop}
            className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
            aria-label="Scroll to top"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 20V4M5 11L12 4L19 11" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </ReactLenis>
    </IKContext>
  );
};

const HomeWithTransition = Transition(Home);
export default HomeWithTransition;