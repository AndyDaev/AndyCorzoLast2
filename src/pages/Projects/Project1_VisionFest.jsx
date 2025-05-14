import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useLocation } from "react-router-dom";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import "./ProjectAltavoz.css";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-2.jpg?updatedAt=1747154460806";
const ProjectHeroImg2 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-hero-3.jpg?updatedAt=1747154460806";
const ProjectHeroImg3 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-hero.jpg?updatedAt=1747154460806";
const ProjectImg1 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-1.jpg?updatedAt=1747154460806";
const ProjectImg2 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-2.jpg?updatedAt=1747154460806";
const ProjectImg3 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-3.jpg?updatedAt=1747154460806";
const ProjectImg4 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-4.jpg?updatedAt=1747154460806";

const ES = {
  client: "Cliente",
  studio: "Estudio",
  year: "Año",
  copy: "Vision Fest: \n Festival Hyperpop",
  nextProject: "Proyecto siguiente",
  projectTitle: "Vision Fest - Festival Hyperpop!",
  projectDescription: "Una campaña visual que celebra la energía y la creatividad del movimiento hyperpop. A través de un diseño audaz y colorido, hemos creado una identidad que captura la esencia de este género musical emergente, fusionando elementos digitales y analógicos para crear una experiencia visual única.",
  ProjectText1: "Vision Fest es un festival que busca revolucionar la escena musical local, trayendo lo mejor del hyperpop a la ciudad. El diseño de marca incluye elementos visuales que reflejan la naturaleza experimental y vanguardista del género, desde la tipografía hasta la paleta de colores.",
  ProjectText2: "La campaña se centra en la creación de una experiencia inmersiva que conecta con la audiencia joven y digital. Cada elemento, desde el diseño de la identidad hasta la implementación en redes sociales, ha sido cuidadosamente diseñado para transmitir la energía y la innovación que define al Vision Fest.",
  projectYear: "2025",
  projectClient: "Vision Fest",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Demo en vivo",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Vision Fest: \n Hyperpop Festival",
  nextProject: "Next Project",
  projectTitle: "Vision Fest - Hyperpop Festival!",
  projectDescription: "A visual campaign celebrating the energy and creativity of the hyperpop movement. Through bold and colorful design, we've created an identity that captures the essence of this emerging music genre, fusing digital and analog elements to create a unique visual experience.",
  ProjectText1: "Vision Fest is a festival that aims to revolutionize the local music scene, bringing the best of hyperpop to the city. The brand design includes visual elements that reflect the experimental and avant-garde nature of the genre, from typography to color palette.",
  ProjectText2: "The campaign focuses on creating an immersive experience that connects with a young and digital audience. Each element, from identity design to social media implementation, has been carefully crafted to convey the energy and innovation that defines Vision Fest.",
  projectYear: "2025",
  projectClient: "Vision Fest",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
};

const Project1_VisionFest = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  const workList = language === "EN" ? workListEN : workListES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = currentId + 1 > 5 ? 1 : currentId + 1;

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <ReactLenis root>
        <div className="project">
          <div className="conainer">
            <div className="project-hero-img">
              <IKImage
                src={ProjectHeroImg}
                transformation={[
                  {
                    height: 800,
                    width: 1200,
                    quality: 100,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 90 }}
                alt="Project Hero Img"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="project-info">
              <div className="col">
                <div className="project-client">
                  <p>{langObj.client} &#x2192; {langObj.projectClient}</p>
                </div>
                <div className="project-studio">
                  <p>{langObj.studio} &#x2192; {langObj.projectStudio}</p>
                </div>
              </div>
              <div className="col">
                <div className="project-year">
                  <p>{langObj.year} &#x2192; {langObj.projectYear}</p>
                </div>
              </div>
            </div>

            <div className="project-copy">
              <div className="col">
                <h1 className="text-[var(--primary)]">
                  {langObj.copy}
                </h1>
              </div>

              <div className="col">
                <p className="project-info">
                  {langObj.projectDescription}
                </p>

                <div className="project-sub-info project-info">
                  <div className="sub-col">
                    <span>{langObj.projectCategory}</span>
                    <span>{langObj.projectSubCategory}</span>
                    <span>Typography</span>
                    <span>Animation</span>
                  </div>

                  <div className="sub-col">
                    <span>&#x2192; {langObj.projectLiveDemo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-hero-img-2">
              <IKImage
                src={ProjectHeroImg2}
                transformation={[
                  {
                    height: 800,
                    width: 1200,
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="project-copy">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.projectDescription}
                </p>
              </div>
            </div>

            <div className="project-imgs">
              <div className="img">
                <IKImage
                  src={ProjectImg1}
                  transformation={[
                    {
                      height: 600,
                      width: 900,
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="img">
                <IKImage
                  src={ProjectImg4}
                  transformation={[
                    {
                      height: 600,
                      width: 900,
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="project-copy">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.projectDescription}
                </p>
              </div>
            </div>

            <div className="project-imgs">
              <div className="img">
                <IKImage
                  src={ProjectImg3}
                  transformation={[
                    {
                      height: 600,
                      width: 900,
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 3"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="img">
                <IKImage
                  src={ProjectImg2}
                  transformation={[
                    {
                      height: 600,
                      width: 900,
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="project-hero-img-3">
              <IKImage
                src={ProjectHeroImg3}
                transformation={[
                  {
                    height: 800,
                    width: 1200,
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 3"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="next-project-cta">
              <Link to={`/project/${nextId}`}>
                <h1 className="text-[var(--primary)]">{langObj.nextProject}</h1>
              </Link>
            </div>
          </div>
        </div>
      </ReactLenis>
    </IKContext>
  );
};

const Project1_VisionFestPage = Transition(Project1_VisionFest);
export default Project1_VisionFestPage; 