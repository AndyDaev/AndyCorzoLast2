import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
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
  copy: "Okami Esports: \n Club de Esports",
  nextProject: "Proyecto siguiente",
  projectTitle: "Okami Esports - Club de Esports",
  projectDescription: "Una identidad de marca que fusiona la cultura gaming con el diseño contemporáneo. A través de elementos visuales inspirados en la mitología japonesa y la estética gaming, hemos creado una marca que destaca en la escena competitiva de los esports.",
  ProjectText1: "Okami Esports es un club que busca establecer un nuevo estándar en la escena de los esports. El diseño de marca incorpora elementos que reflejan la precisión, la estrategia y la pasión por la competencia, creando una identidad que resuena tanto con jugadores como con espectadores.",
  ProjectText2: "La campaña se centra en la creación de una experiencia visual coherente que conecta con la comunidad gaming. Desde el diseño del logo hasta la implementación en uniformes y material promocional, cada elemento ha sido diseñado para transmitir la profesionalidad y el espíritu competitivo que define a Okami Esports.",
  projectYear: "2025",
  projectClient: "Okami Esports",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Demo en vivo",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Okami Esports: \n Esports Club",
  nextProject: "Next Project",
  projectTitle: "Okami Esports - Esports Club",
  projectDescription: "A brand identity that fuses gaming culture with contemporary design. Through visual elements inspired by Japanese mythology and gaming aesthetics, we've created a brand that stands out in the competitive esports scene.",
  ProjectText1: "Okami Esports is a club that aims to set a new standard in the esports scene. The brand design incorporates elements that reflect precision, strategy, and passion for competition, creating an identity that resonates with both players and spectators.",
  ProjectText2: "The campaign focuses on creating a cohesive visual experience that connects with the gaming community. From logo design to implementation in uniforms and promotional materials, each element has been crafted to convey the professionalism and competitive spirit that defines Okami Esports.",
  projectYear: "2025",
  projectClient: "Okami Esports",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
};

const Project2_OkamiEsports = () => {
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

const Project2_OkamiEsportsPage = Transition(Project2_OkamiEsports);
export default Project2_OkamiEsportsPage; 