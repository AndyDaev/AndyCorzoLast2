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
  copy: "Altavoz: \n Teatro y Asociación Creativa",
  nextProject: "Proyecto siguiente",
  projectTitle: "Altavoz - Teatro y Asociación Creativa",
  projectDescription: "Una campaña diseñada para capturar la innovación, creatividad y energía que Altavoz trae al teatro contemporáneo. Destacando las últimas producciones y eventos culturales, este proyecto enfatiza la fusión del arte escénico y el diseño visual, creando una experiencia visualmente impactante y envolvente.",
  ProjectText1: "Altavoz es una asociación teatral que busca revolucionar la escena cultural local. A través de un diseño de marca audaz y contemporáneo, hemos creado una identidad que refleja la energía y la pasión del teatro moderno. La campaña incluye diseño de marca, merchandising y materiales promocionales que capturan la esencia de cada producción.",
  ProjectText2: "El proyecto se centra en la creación de una experiencia visual coherente que conecta con la audiencia joven y diversa. Desde el diseño de la identidad hasta la implementación en diferentes plataformas, cada elemento ha sido cuidadosamente diseñado para transmitir la innovación y la creatividad que define a Altavoz.",
  projectYear: "2025",
  projectClient: "Altavoz",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Demo en vivo",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Altavoz: \n Theater and Creative Association",
  nextProject: "Next Project",
  projectTitle: "Altavoz - Theater and Creative Association",
  projectDescription: "A campaign designed to capture the innovation, creativity, and energy that Altavoz brings to contemporary theater. Highlighting their latest productions and cultural events, this project emphasizes the fusion of performing arts and visual design, creating a visually striking and engaging experience.",
  ProjectText1: "Altavoz is a theater association that aims to revolutionize the local cultural scene. Through bold and contemporary brand design, we've created an identity that reflects the energy and passion of modern theater. The campaign includes brand design, merchandising, and promotional materials that capture the essence of each production.",
  ProjectText2: "The project focuses on creating a cohesive visual experience that connects with a young and diverse audience. From identity design to implementation across different platforms, each element has been carefully crafted to convey the innovation and creativity that defines Altavoz.",
  projectYear: "2025",
  projectClient: "Altavoz",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
};

function CurrentLocation() {
  let location = useLocation();
  console.log(location);
}

const Project0_Altavoz = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  const workList = language === "EN" ? workListEN : workListES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = (currentId + 1) % workList.length;

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
                  {langObj.ProjectText1}
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
                  {langObj.ProjectText2}
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

const Project0_AltavozPage = Transition(Project0_Altavoz);
export default Project0_AltavozPage;
