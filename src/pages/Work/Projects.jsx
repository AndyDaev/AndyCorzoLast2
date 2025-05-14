import { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import { IKContext, IKImage } from 'imagekitio-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Transition from "../../components/Transition/Transition";
import { LanguageContext } from "../../context/LanguageContext";
import "./Projects.css";

// Separate static and animated versions of images
const ProjectImg1 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};
const ProjectImg2 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};
const ProjectImg3 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};
const ProjectImg4 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};
const ProjectImg5 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};
const ProjectImg6 = {
  static: "https://ik.imagekit.io/andycorzowork/default-image.jpg?updatedAt=1746036225150",
  gif: "https://ik.imagekit.io/andycorzowork/1697428676765.gif?updatedAt=1747161996892"
};

const projectsDataEN = [
  {
    id: 0,
    name: "Altavoz - Theater and Creative Association",
    category: "BRAND DESIGN + MERCH",
    img: ProjectImg1,
  },
  {
    id: 1,
    name: "Vision Fest - Hyperpop Festival!",
    category: "BRAND DESIGN + MERCH",
    img: ProjectImg2,
  },
  {
    id: 2,
    name: "Okami Esports - Esports Club",
    category: "BRAND DESIGN + MERCH",
    img: ProjectImg3,
  },
  {
    id: 3,
    name: "Tonkati - Exotic Food - Mexican Restaurant",
    category: "BRAND DESIGN + MERCH",
    img: ProjectImg4,
  },
  {
    id: 4,
    name: "Royal Canin New Beginnings",
    category: "REBRANDING WORK",
    img: ProjectImg5,
  },
];
const projectsDataES = [
  {
    id: 0,
    name: "Altavoz - Teatro y Asociación Creativa",
    category: "DISEÑO DE MARCA + MERCH",
    img: ProjectImg1,
  },
  {
    id: 1,
    name: "Vision Fest - Festival Hyperpop!",
    category: "DISEÑO DE MARCA + MERCH",
    img: ProjectImg2,
  },
  {
    id: 2,
    name: "Okami Esports - Club de Esports",
    category: "DISEÑO DE MARCA + MERCH",
    img: ProjectImg3,
  },
  {
    id: 3,
    name: "Tonkati - Comida Exótica - Restaurante Mexicano",
    category: "DISEÑO DE MARCA + MERCH",
    img: ProjectImg4,
  },
  {
    id: 4,
    name: "Royal Canin New Beginnings",
    category: "REBRANDING WORK",
    img: ProjectImg5,
  },
];

const ES = {
  title: "Proyectos"
};

const EN = {
  title: "Projects"
};

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const containerRef = useRef(null);
  const _lenis = useLenis(() => {});
  const copyCounter = useRef(0);
  const { language } = useContext(LanguageContext);
  const projectsData = language === "EN" ? projectsDataEN : projectsDataES;
  const langObj = language === "EN" ? EN : ES;

  useEffect(() => {
    const numberOfCopies = 5;
    const initialSet = Array(numberOfCopies)
      .fill()
      .flatMap((_, copyIndex) =>
        projectsData.map((project) => ({
          ...project,
          uniqueId: `${copyIndex}-${project.id}-${Date.now()}`,
        }))
      );
    setProjectList(initialSet);
  }, [projectsData]);

  useEffect(() => {
    if (!containerRef.current || projectList.length === 0) return;

    // Initial animation for rows
    const tl = gsap.timeline();
    const projectItems = containerRef.current.querySelectorAll(".row");
    
    // Animate rows in
    tl.fromTo(projectItems, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    );

    const scrollTrigger = ScrollTrigger.create({
      scroller: ".projects",
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.progress > 0.75) {
          copyCounter.current += 1;
          const newProjects = projectsData.map((project) => ({
            ...project,
            uniqueId: `${copyCounter.current}-${project.id}-${Date.now()}`,
          }));
          setProjectList(prev => [...prev, ...newProjects]);
        }
      }
    });

    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  }, [projectList, projectsData]);

  const handleMouseEnter = (e) => {
    const container = e.currentTarget;
    const staticImg = container.querySelector('.static-img');
    const gifImg = container.querySelector('.gif-img');
    
    if (staticImg && gifImg) {
      gsap.to(staticImg, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gifImg.style.display = 'block';
          gsap.to(gifImg, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    }
  };

  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    const staticImg = container.querySelector('.static-img');
    const gifImg = container.querySelector('.gif-img');
    
    if (staticImg && gifImg) {
      gsap.to(gifImg, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gifImg.style.display = 'none';
          gsap.to(staticImg, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    }
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <ReactLenis root>
        <div className="projects" ref={containerRef}>
          <div className="container">
            <div className="projects-header">
              <AnimatedCopy 
                tag="h1" 
                animateOnScroll={false} 
                delay={1}
                className="projects-title"
              >
                {langObj.title}
              </AnimatedCopy>
            </div>
            {projectList.map((project) => (
              <div className="row" key={project.uniqueId}>
                <div className="project-item">
                  <Link to={`/project/${project.id}`}>
                    <div 
                      className="projects-img"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Static image */}
                      <IKImage
                        src={project.img.static}
                        transformation={[
                          {
                            height: 500,
                            width: 800,
                            quality: 80,
                            format: "auto"
                          }
                        ]}
                        lqip={{ active: true, quality: 20 }}
                        alt={project.name}
                        className="static-img w-full h-full object-cover"
                        loading="eager"
                      />
                      {/* GIF image */}
                      <IKImage
                        src={project.img.gif}
                        transformation={[
                          {
                            height: 500,
                            width: 800,
                            quality: 80,
                            format: "auto"
                          }
                        ]}
                        lqip={{ active: true, quality: 20 }}
                        alt={project.name}
                        className="gif-img w-full h-full object-cover absolute top-0 left-0 opacity-0"
                        loading="lazy"
                        style={{ display: 'none' }}
                      />
                    </div>
                  </Link>
                  <div className="project-info">
                    <div className="project-name">{project.name}</div>
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReactLenis>
    </IKContext>
  );
};

export default Transition(Projects);
