import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Transition from "../../components/Transition/Transition";

import "./Projects.css";

import ProjectImg1 from "../../assets/projects/project1.jpg";
import ProjectImg2 from "../../assets/projects/project2.jpg";
import ProjectImg3 from "../../assets/projects/project3.jpg";
import ProjectImg4 from "../../assets/projects/project4.jpg";
import ProjectImg5 from "../../assets/projects/project5.jpg";
import ProjectImg6 from "../../assets/projects/project6.jpg";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    name: "Revive",
    category: "Brand Identity",
    img: ProjectImg1,
  },
  {
    name: "Echoes of Light",
    category: "Digital Illustration",
    img: ProjectImg2,
  },
  {
    name: "Urban Symphony",
    category: "Environmental Design",
    img: ProjectImg3,
  },
  {
    name: "Fragmented Reality",
    category: "3D Animation",
    img: ProjectImg4,
  },
  {
    name: "Luminous Flux",
    category: "Motion Graphics",
    img: ProjectImg5,
  },
  {
    name: "Reflections",
    category: "Interactive Media",
    img: ProjectImg6,
  },
];

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const containerRef = useRef(null);
  const _lenis = useLenis(() => {});

  useEffect(() => {
    const numberOfCopies = 5;
    const initialSet = Array(numberOfCopies)
      .fill()
      .flatMap((_, i) =>
        projectsData.map((project, j) => ({
          ...project,
          id: i * projectsData.length + j,
        }))
      );
    setProjectList(initialSet);
  }, []);

  useEffect(() => {
    if (!containerRef.current || projectList.length === 0) return;

    const tl = gsap.timeline();
    const projectItems = containerRef.current.querySelectorAll(".row");
    
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
          const newProjects = projectsData.map((project, index) => ({
            ...project,
            id: projectList.length + index
          }));
          setProjectList(prev => [...prev, ...newProjects]);
        }
      }
    });

    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  }, [projectList]);

  return (
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
              Projects
            </AnimatedCopy>
          </div>
          {projectList.map((project) => (
            <div className="row" key={project.id}>
              <div className="project-item">
                <Link to={`/project/${project.id}`}>
                  <div className="project-img">
                    <img src={project.img} alt={project.name} />
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
  );
};

export default Transition(Projects);
