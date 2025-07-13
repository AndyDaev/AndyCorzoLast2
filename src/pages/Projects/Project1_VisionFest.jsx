import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import "./ProjectAltavoz.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import VideoPlaceholder from "../../components/VideoPlaceholder/VideoPlaceholder";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-15.webp?updatedAt=1748868773545";
const ProjectHeroVideo = "/assets/Vision/Animacion_Sonido.mp4";
const ProjectHeroImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-16.webp?updatedAt=1748868773725";
const ProjectImg1 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-15.webp?updatedAt=1748868773545";
const ProjectImg2 = "/assets/Vision/Animacion_Sonido.mp4";
const ProjectImg3 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-16.webp?updatedAt=1748868773725";
const ProjectImg4 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-2.webp?updatedAt=1748868771589";
const ProjectImg5 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_.webp?updatedAt=1748868774610";
const ProjectImg6 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-1.webp?updatedAt=1748868771656";
const ProjectImg7 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-3.webp?updatedAt=1748868771679";
const ProjectImg8 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-4.webp?updatedAt=1748868771348";
const ProjectImg9 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-5.webp?updatedAt=1748868771520";
const ProjectImg10 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-6.webp?updatedAt=1748868771767";
const ProjectImg11 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-8.webp?updatedAt=1748868771689";
const ProjectImg12 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-3.webp?updatedAt=1748868771679";
const ProjectImg13 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-13.webp?updatedAt=1748868771437";
const ProjectImg14 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-11.webp?updatedAt=1750089562924";
const ProjectImg15 = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-12.webp?updatedAt=1748868771571";
const ProjectImgPoster = "https://ik.imagekit.io/andycorzowork/Projects/Project_VisionFest/Image%20_w-full_-14.webp?updatedAt=1748868773623"

const ES = {
  client: "Cliente",
  studio: "Estudio",
  year: "Año",
  copy: "Vision Fest: \n Festival Hyperpop",
  nextProject: "Siguiente Proyecto",
  projectTitle: "Vision Fest - Festival Hyperpop!",
  projectDescription: "Una marca acompañada de una campaña visual que demuestra la creativida y originalidad del movimiento hyperpop. A través de un diseño moderno, tecnológico y colorido, hemos creado una identidad que captura la esencia de este género musical emergente, fusionando elementos digitales y analógicos para crear una experiencia visual única.",
  ProjectText1: "Vision Fest nace como respuesta a la necesidad de un espacio dedicado al hyperpop en la escena musical local. Este género, caracterizado por su estética futurista y sonidos experimentales, requería una identidad visual que estuviera a la altura de su innovación sonora. El diseño incorpora elementos glitch, gradientes vibrantes y tipografías distorsionadas que reflejan la naturaleza disruptiva del hyperpop.",
  ProjectText2: "La estrategia visual se basa en la creación de un universo digital que trasciende las pantallas. Desde el diseño de pósters hasta la implementación en redes sociales, cada pieza comunica la energía frenética y la estética cyber que define al género. Los colores neón, las formas fragmentadas y las animaciones dinámicas crean una experiencia inmersiva que conecta directamente con la generación digital nativa.",
  ProjectText3: "El resultado es una identidad que no solo promociona un festival, sino que establece un nuevo estándar visual para eventos de música electrónica experimental. La marca Vision Fest se convierte en un símbolo de innovación cultural, atrayendo tanto a artistas emergentes como a una audiencia ávida de experiencias musicales auténticas y vanguardistas.",
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
  ProjectText1: "Vision Fest emerges as a response to the need for a dedicated space for hyperpop in the local music scene. This genre, characterized by its futuristic aesthetic and experimental sounds, required a visual identity that matched its sonic innovation. The design incorporates glitch elements, vibrant gradients, and distorted typography that reflect the disruptive nature of hyperpop.",
  ProjectText2: "The visual strategy is based on creating a digital universe that transcends screens. From poster design to social media implementation, each piece communicates the frenetic energy and cyber aesthetic that defines the genre. Neon colors, fragmented shapes, and dynamic animations create an immersive experience that connects directly with the digital native generation.",
  ProjectText3: "The result is an identity that not only promotes a festival, but establishes a new visual standard for experimental electronic music events. The Vision Fest brand becomes a symbol of cultural innovation, attracting both emerging artists and an audience eager for authentic and avant-garde musical experiences.",
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
        <ScrollToTop />
        <div className="project">
          <div className="conainer">
            <div className="project-hero-img img" style={{ width: '100vw', maxWidth: '100vw', minHeight: '40vh', height: '50vh', overflow: 'hidden', position: 'relative' }}>
              <IKImage
                src={ProjectHeroImg}
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 90 }}
                alt="Project Hero Img"
                className="object-cover"
                style={{ width: '100vw', maxWidth: '100vw', height: '100%', minHeight: '40vh', objectFit: 'cover', display: 'block' }}
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


            <div className="project-video">
              <div className="img full-height-video-container">
                <VideoPlaceholder
                  src={ProjectImg2}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
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
              <div className="img w-full">
                <IKImage
                  src={ProjectImgPoster}
                  transformation={[
                    {
                      load: 'fast',
                      quality: 80,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 100 }}
                  alt="Project Image 2"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full aspect-auto">
                <IKImage
                  src={ProjectImg3}
                  transformation={[
                    {
                      width: 2160,
                      height: 4181,
                      quality: 100,
                      format: "webp",
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 3"
                  className="w-full h-auto object-contain"
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
              <div className="img w-full">
                <IKImage
                  src={ProjectImg4}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 4"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img w-full">
                <IKImage
                  src={ProjectImg5}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 5"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg6}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 6"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img w-full">
                <IKImage
                  src={ProjectImg7}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 7"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg8}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 8"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg9}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 9"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg10}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 10"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg11}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 11"
                  className="w-full h-auto"
                />
              </div>
            </div>

           

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg13}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 13"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg14}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 14"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="project-imgs">
              <div className="img2 w-full">
                <IKImage
                  src={ProjectImg15}
                  transformation={[
                    {
                      quality: 100,
                      format: "webp"
                    }
                  ]}
                  lqip={{ active: true, quality: 90 }}
                  alt="Project Image 15"
                  className="w-full h-auto"
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

const Project1_VisionFestPage = Transition(Project1_VisionFest);
export default Project1_VisionFestPage;
