import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useLocation } from "react-router-dom";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import "./ProjectAltavoz.css";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_.webp";
const ProjectHeroImg2 = "https://ik.imagekit.io/andycorzowork/Projects/Free_Ticket_Mockup_2.jpg?updatedAt=1747159524727";
const ProjectHeroImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-2.webp";
const ProjectImg1 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-3.webp";
const ProjectImg2 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-4.webp";
const ProjectImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-5.webp";
const ProjectImg4 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-6.webp";
const ProjectImg5 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-7.webp";
const ProjectImg6 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-8.webp";
const ProjectImg7 = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_1.webp";

const ES = {
  client: "Cliente",
  studio: "Estudio",
  year: "Año",
  copy: "Altavoz: \n Teatro y Asociación Creativa",
  nextProject: "Siguiente Proyecto",
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
  VideoClub: "Algunos proyectos internos incluyen este, el VideoClub, un Evento Performativo que combina una historia guionizada sobre un videoclub anticuado y abandonado",
  VideoClub1: "Los actores adaptan los títulos de películas y géneros sugeridos en vivo por el público en actuaciones de teatro improvisado.",
  VideoClub2: "Diseñé el póster, las publicaciones para redes sociales y el merchandising para el evento",  
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Altavoz: \n Theater and Creative Association",
  nextProject: "Next Project",
  projectTitle: "Altavoz - Theater and Creative Association",
  projectDescription: "A brand identity designed to capture the fresh energy, creativity, and passion that Altavoz brings to contemporary theater established in Gijon, Asturias. Highlighting their latest productions and cultural events, this project emphasizes the fusion of performing arts and a new generation of artists, creating a dynamic and harmonic design.",
  ProjectText1: "Altavoz is a theater association that aims to revolutionize the local cultural scene. Through bold and contemporary brand design, we've created an identity that reflects the energy and passion of modern theater. The campaign includes brand design, merchandising, and promotional materials that capture the essence of each production.",
  ProjectText2: "The project focuses on creating a cohesive visual experience that connects with a young and diverse audience. From identity design to implementation across different platforms, each element has been carefully crafted to convey the innovation and creativity that defines Altavoz.",
  projectYear: "2025",
  projectClient: "Altavoz",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
  VideoClub: "Some internal projects include this one, the VideoClub, a performative event that combines a scripted story about an outdated and abandoned video rental store.",
  VideoClub1: "The actors adapt movie titles and genres suggested live by the audience into improvised theater performances.",
  VideoClub2: "I designed the poster, social media posts, and merchandise for the event.", 
  OtherEvents: "Other events include the Navidarte, a performance that combines theater and dance, Castiello ImproMatch, a performance that combines theater and improv in a constant battle for the best performance and the Open Doors Day (Jornada de puertas abiertas) where everyone can visit and appreciate the work of Altavoz members.",
};

function CurrentLocation() {
  let location = useLocation();
  console.log(location);
}

const ProjectHeroVideo = "/assets/Altavoz_PresentacionMarca (online-video-cutter.mp4";
const ProjectHeroVideoPoster = "https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_.webp";

const Project0_Altavoz = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = currentId + 1 >= 4 ? 0 : currentId + 1;

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
                src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Banner2.webp?updatedAt=1752168384533"
                transformation={[
                  {
                    quality: 100,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 100}}
                alt="Project Hero Img"
                className="w-full h-full object-cover"
                loading="lazy"
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

            <div className="">
              <video
                src={ProjectHeroVideo}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                poster={ProjectHeroVideoPoster}
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

            <div className="project-imgs single-img">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-2.webp?updatedAt=1748868969502"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>



            <div className="project-imgs">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_.webp?updatedAt=1748868969412"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 5"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-1.webp?updatedAt=1748868969484"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 6"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>


            <div className="project-copy">

            </div>


         {/*    El videoclub */}

            <div className="project-imgs single-img">
              <div className="img2">
                <IKImage
                  src={ProjectImg3}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>


            <div className="project-copy">
              <div className="col"></div>

                <div className="col text-[var(--primary)]">
                  <p>{langObj.VideoClub}</p>
                  <br />
                  <p>{langObj.VideoClub1}</p>
                  <br />
                  <p>{langObj.VideoClub2}</p>
                </div>
              </div>



            <div className="project-imgs single-img">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-8.webp?updatedAt=1748868969438"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            
            <div className="project-imgs single-img">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_-7.webp?updatedAt=1748868969594"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>



            <div className="project-imgs single-img">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Image%20_w-full_1.webp?updatedAt=1748868969618"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>


            <div className="project-copy">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.OtherEvents}
                </p>
              </div>
            </div>


        {/* Double images Navidarte y MeanGirls */}
            <div className="project-imgs">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/Navidarte2024.gif?updatedAt=1750504638182"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 5"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project0_Altavoz/ImproMatch.webp?updatedAt=1750506732226"
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 6"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            


            <div className="next-project-cta" style={{ flexDirection: 'column', gap: '0.10rem', justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
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

const Project0_AltavozPage = Transition(Project0_Altavoz);
export default Project0_AltavozPage;
