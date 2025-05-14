import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useLocation } from "react-router-dom";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import "./SampleProject.css";

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
  copy: "Dynamic Vision: <br /> TechCorp x Innovate Media",
  nextProject: "Proyecto siguiente",
  projectTitle: "Altavoz - Teatro y Asociación Creativa",
  projectDescription: "Diseño de Marca + Merch",
  projectYear: "2025",
  projectClient: "Acme Industries",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Demo en vivo",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Dynamic Vision: <br /> TechCorp x Innovate Media",
  nextProject: "Next Project",
  projectTitle: "Altavoz - Theater and Creative Association",
  projectDescription: "Branding + Merch",
  projectYear: "2025",
  projectClient: "Acme Industries",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
};

function CurrentLocation() {
  let location = useLocation();
  console.log(location);
}

const SampleProject = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = currentId + 1 > 5 ? 1 : currentId + 1; // Rotate back to 1 after reaching 5

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
                  <p>Client &#x2192; Acme Industries</p>
                </div>
                <div className="project-studio">
                  <p>Studio &#x2192; Creative Works</p>
                </div>
              </div>
              <div className="col">
                <div className="project-year">
                  <p>Year &#x2192; 2023</p>
                </div>
              </div>
            </div>

            <div className="project-copy">
              <div className="col">
                <h1 className="text-[var(--primary)]">
                  Dynamic Vision: <br />
                  TechCorp x Innovate Media
                </h1>
              </div>

              <div className="col">
                <p className="project-info">
                  A campaign designed to capture the innovation, creativity, and
                  energy that TechCorp brings to the forefront of technology.
                  Highlighting the cutting-edge developments for their latest
                  product launch, this project emphasizes the fusion of technology
                  and art, creating a visually striking and engaging experience.
                </p>

                <div className="project-sub-info project-info">
                  <div className="sub-col">
                    <span>Branding</span>
                    <span>Visual Design</span>
                    <span>Typography</span>
                    <span>Animation</span>
                  </div>

                  <div className="sub-col">
                    <span>&#x2192; Live Demo</span>
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
                  A visual campaign celebrating the innovation, creativity, and
                  impact of cutting-edge technology at the Global Tech Expo. After
                  a year of virtual events, this project brought technology to
                  life with dynamic visuals and bold messaging, showcasing the
                  future of innovation. The campaign captured the energy and
                  excitement of the tech world, highlighting key moments that
                  defined the event.
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
                  A visual campaign celebrating the innovation, creativity, and
                  impact of cutting-edge technology at the Global Tech Expo. After
                  a year of virtual events, this project brought technology to
                  life with dynamic visuals and bold messaging, showcasing the
                  future of innovation. The campaign captured the energy and
                  excitement of the tech world, highlighting key moments that
                  defined the event.
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

const SampleProjectPage = Transition(SampleProject);
export default SampleProjectPage;
