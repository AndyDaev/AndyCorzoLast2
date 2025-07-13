import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import "./ProjectAltavoz.css";
import VideoPlaceholder from "../../components/VideoPlaceholder/VideoPlaceholder";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_.webp?updatedAt=1747859769957";
const ProjectHeroImg2 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-8.webp";
const ProjectHeroImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-3.webp";
const ProjectImg1 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-6.webp?updatedAt=1747859766081";
const ProjectImg2 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-5.webp?updatedAt=1747859767315";
const ProjectImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-3.webp?updatedAt=1747859769620";
const ProjectImg4 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-7.webp?updatedAt=1747859766808";
const ProjectImg5 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-4.webp?updatedAt=1747859766736";
const ProjectImg6 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-1.webp?updatedAt=1747859767869";
const ProjectImg7 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-2.webp?updatedAt=1747859766371";
const ProjectImg8 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Okami/Image%20_w-full_-2.webp?updatedAt=1747859766371";

const ES = {
  client: "Cliente",
  studio: "Estudio",
  year: "Año",
  copy: "Okami Esports: \n Club de Esports",
  nextProject: "Siguiente Proyecto",
  projectTitle: "Okami Esports - Club de Esports",
  projectDescription: "Identidad de marca de un equipo de Esports emergente nacido en España que fusiona la cultura gaming con el diseño tradicional japonés. A través de elementos visuales inspirados en la mitología japonesa y la estética gaming, hemos creado una marca que destaca en la escena competitiva de los Esports.",
  ProjectText1: "Okami Esports es un club que busca establecer un nuevo estándar en la escena de los esports. El diseño de marca incorpora elementos que reflejan la precisión, la estrategia y la pasión por la competencia, creando una identidad que resuena tanto con jugadores como con espectadores.",
  ProjectText2: "El diseño se centra en la creación de una experiencia visual coherente que conecta con la comunidad gaming. Desde el diseño del logo hasta la implementación en uniformes y material promocional, cada elemento ha sido diseñado para transmitir la profesionalidad y el espíritu competitivo que define a Okami Esports.",
  projectYear: "2024",
  projectClient: "Okami Esports",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Diseño",
  projectSubCategory2: "Animación",
  streamingAssets:"Animaciones para directos en Twitch"
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Okami Esports: \n Esports Club",
  nextProject: "Next Project",
  projectTitle: "Okami Esports - Esports Club",
  projectDescription: "A brand identity that fuses gaming culture with traditional japanese design. Through visual elements inspired by Japanese mythology and gaming aesthetics, we've created a brand that stands out in the competitive esports scene.",
  ProjectText1: "Okami Esports is a club that aims to set a new standard in the esports scene. The brand design incorporates elements that reflect precision, strategy, and passion for competition, creating an identity that resonates with both players and spectators.",
  ProjectText2: "The design focuses on creating a cohesive visual experience that connects with the gaming community. From logo design to implementation in uniforms and promotional materials, each element has been crafted to convey the professionalism and competitive spirit that defines Okami Esports.",
  projectYear: "2025",
  projectClient: "Okami Esports",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectSubCategory2: "Animation",
  projectLiveDemo: "Live Demo",
};

const Project2_OkamiEsports = () => {
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
                src={ProjectHeroImg}
                transformation={[
                  {
                    load: 'eager',
                    quality: 100,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 100 }}
                alt="Project Hero Img"
                className="w-full h-full object-cover"
                loading="lazy"
                srcSet={[
                  { width: 480 },
                  { width: 768 },
                  { width: 1200 }
                ]}
                sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
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
                    <span>{langObj.projectSubCategory2}</span>
                  </div>

                  <div className="sub-col">
                    <span> {langObj.projectLiveDemo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-hero img2">
              <VideoPlaceholder
                src="/assets/Okami/1213_AndresLC_LogoFondoAnimado.mp4"
                className="object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={undefined}
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
              <div className="img2">
                <IKImage
                  src={ProjectImg1}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
                />
              </div>

              <div className="img">
                <IKImage
                  src={ProjectImg4}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
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
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg5}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 8"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="img2">
                <IKImage
                  src={ProjectImg2}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="Project Image 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img3">
                <IKImage
                  src={ProjectHeroImg3}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 100,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Hero Img 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
                />
              </div>

              <div className="img2 ">
                <IKImage
                  src={ProjectImg6}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 100,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Hero Img 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
                />
              </div>

              <div className="img2 ">
                <IKImage
                  src={ProjectImg8}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 100,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Hero Img 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  srcSet={[
                    { width: 480 },
                    { width: 768 },
                    { width: 1200 }
                  ]}
                  sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
                />
              </div>
            </div>

            <div className="project-hero-img-2 img2" style={{ width: 'fit-content', height: 'fit-content', margin: '0 auto' }}>
              <VideoPlaceholder
                src="/assets/Okami/1213_AndresLC_EmpezandoRetransmision copy.mp4"
                className="object-fit"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                poster={undefined}
              />
            </div>

            <div className="project-copy p-">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.streamingAssets}
                </p>
              </div>
            </div>

            <div className="project-hero-img-2 img2" style={{ width: 'fit-content', height: 'fit-content', margin: '0 auto' }}>
              <VideoPlaceholder
                src="/assets/Okami/1213_AndresLC_AnimacionStingerTransicion.mp4"
                className="object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="project-imgs">
              <div className="img">
                <VideoPlaceholder
                  src="/assets/Okami/1213_AndresLC_LogoSinFondoAnimado.mp4"
                  className="object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="img">
                <VideoPlaceholder
                  src="/assets/Okami/1213_AndresLC_TextoAnimado.mp4"
                  className="object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
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

export default Project2_OkamiEsports;