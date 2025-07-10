import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import "./ProjectAltavoz.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/banner.webp?updatedAt=1752173091566";
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
  copy: "Gijon Throwdown \n crossfit",
  nextProject: "Siguiente Proyecto",
  projectTitle: "Royal Canin - Campaña Digital",
  projectDescription: "Diseño de la identidad de marca y programación web de una competición de Crossfit nacida en Gijón Asturias",
  ProjectText1: "Gijón Throwdown es una competición de CrossFit que celebra el esfuerzo, la dedicación y el carácter de atletas de todos los niveles. Nacida en Asturias, representa la fuerza del norte y el espíritu de comunidad. Más que un reto físico, es una experiencia que une.",
  ProjectText2: "La campaña se centra en la creación de contenido que conecta emocionalmente con la audiencia. Desde posts en redes sociales hasta videos virales, cada elemento ha sido diseñado para transmitir los valores de la marca y fortalecer la relación con la comunidad de amantes de mascotas.",
  projectYear: "2025",
  projectClient: "Roberto Ferreras Menéndez",
  projectStudio: "Andy Corzo Studio",
  projectCategory: "Digital",
  projectSubCategory: "Social Media",
  projectLiveDemo: "Accede a la web",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Royal Canin: \n Digital Campaign",
  nextProject: "Next Project",
  projectTitle: "Royal Canin - Digital Campaign",
  projectDescription: "A digital campaign that celebrates the relationship between pets and their owners. Through emotional content and engagement strategies, we've created an experience that connects with the pet-loving community.",
  ProjectText1: "Royal Canin is a brand that aims to strengthen its connection with the pet owner community. The digital campaign incorporates elements that reflect care, dedication, and passion for animal welfare, creating an experience that resonates with the target audience.",
  ProjectText2: "The campaign focuses on creating content that emotionally connects with the audience. From social media posts to viral videos, each element has been crafted to convey the brand's values and strengthen the relationship with the pet-loving community.",
  projectYear: "2025",
  projectClient: "Royal Canin",
  projectStudio: "Creative Works",
  projectCategory: "Digital",
  projectSubCategory: "Social Media",
  projectLiveDemo: "Live Demo",
};

const Project4_RoyalCanin = () => {
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
        <ScrollToTop />
        <div className="project">
          <div className="conainer">
            <div className="project-hero-img img-2">
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
                    <span></span>
                  </div>

                  <div className="sub-col">
                    <a className href="https://gijonthrowdown.es"><span>&#x2192; {langObj.projectLiveDemo}</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="img-2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/Wayfinding%20Wall%20with%20Men%20Mockup_7%201.webp?updatedAt=1750426230899"
                transformation={[
                  {
                    quality: 100,
                    format: "webp"
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

            <div className="img-2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/GijonThrowdown_ManualDeMarca-3%201.webp?updatedAt=1750426230832"
                transformation={[
                  {
                    quality: 100,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/GijonThrowdown_ManualDeMarca-4%201.webp?updatedAt=1750426230583"
                transformation={[
                  {
                    quality: 100,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/GijonThrowdown_ManualDeMarca-5%201.webp?updatedAt=1750426230648"
                transformation={[
                  {
                    quality: 100,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/Free%20Backside%20T-Shirt%20Mockup_!%201.webp?updatedAt=1750426230890"
                transformation={[
                  {
                    quality: 100,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
              />
            </div>

        



            <div className="project-imgs">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/Free_Stationery_Mockup_8%201.webp?updatedAt=1750426230858"
                  transformation={[
                    {
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project_GijonThrowdown/Bun%20-%20Free%20Business%20Card%20Mockup%208%202.webp?updatedAt=1750426230863"
                  transformation={[
                    {
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

            

           
            <div className="next-project-cta" style={{ flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <Link to={`/project/${nextId}`} style={{ textDecoration: 'none' }}>
                <h1 className="text-[var(--primary)]" style={{ fontSize: '4.5rem', fontWeight: 'bold' }}>{langObj.nextProject}</h1>
              </Link>
              <Link to={`/project/${(currentId - 1 + 5) % 5}`} style={{ textDecoration: 'none', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '2.2rem', color: 'var(--primary)', opacity: 0.85, fontWeight: 'normal' }}>
                  &larr; {language === 'EN' ? 'Previous Project' : 'Proyecto Anterior'}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ReactLenis>
    </IKContext>
  );
};

const Project4_RoyalCaninPage = Transition(Project4_RoyalCanin);
export default Project4_RoyalCaninPage; 