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
  copy: "Tonkati: \n Diseño de Marca",
  nextProject: "Proyecto siguiente",
  projectTitle: "Tonkati - Diseño de Marca",
  projectDescription: "Una identidad de marca que celebra la cultura gastronómica contemporánea. A través de un diseño que combina elementos tradicionales con un enfoque moderno, hemos creado una marca que destaca en el competitivo mundo de la restauración.",
  ProjectText1: "Tonkati es un restaurante que busca redefinir la experiencia culinaria. El diseño de marca incorpora elementos que reflejan la innovación, la tradición y la pasión por la gastronomía, creando una identidad que resuena tanto con comensales como con la industria.",
  ProjectText2: "La campaña se centra en la creación de una experiencia visual coherente que conecta con la comunidad gastronómica. Desde el diseño del logo hasta la implementación en menús y material promocional, cada elemento ha sido diseñado para transmitir la excelencia y el espíritu innovador que define a Tonkati.",
  projectYear: "2025",
  projectClient: "Tonkati",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Demo en vivo",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Tonkati: \n Brand Design",
  nextProject: "Next Project",
  projectTitle: "Tonkati - Brand Design",
  projectDescription: "A brand identity that celebrates contemporary culinary culture. Through design that combines traditional elements with a modern approach, we've created a brand that stands out in the competitive world of dining.",
  ProjectText1: "Tonkati is a restaurant that aims to redefine the culinary experience. The brand design incorporates elements that reflect innovation, tradition, and passion for gastronomy, creating an identity that resonates with both diners and the industry.",
  ProjectText2: "The campaign focuses on creating a cohesive visual experience that connects with the culinary community. From logo design to implementation in menus and promotional materials, each element has been crafted to convey the excellence and innovative spirit that defines Tonkati.",
  projectYear: "2025",
  projectClient: "Tonkati",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
};

const Project3_Tonkati = () => {
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

const Project3_TonkatiPage = Transition(Project3_Tonkati);
export default Project3_TonkatiPage; 