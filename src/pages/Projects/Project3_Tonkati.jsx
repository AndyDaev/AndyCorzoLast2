import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import "./ProjectAltavoz.css";
import VideoPlaceholder from "../../components/VideoPlaceholder/VideoPlaceholder";

import Transition from "../../components/Transition/Transition";

const ProjectHeroImg = "https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Image%20_w-full_.webp?updatedAt=1750422563833";
const ProjectHeroImg2 = "https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance5%201.webp?updatedAt=1750422561324";
const ProjectHeroImg3 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-hero.jpg?updatedAt=1747154460806";
const ProjectImg1 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-1.jpg?updatedAt=1747154460806";
const ProjectImg2 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-2.jpg?updatedAt=1747154460806";
const ProjectImg3 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-3.jpg?updatedAt=1747154460806";
const ProjectImg4 = "https://ik.imagekit.io/andycorzowork/Projects/sample-projects/sample-project-4.jpg?updatedAt=1747154460806";
const Gif = "https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/0d2937183829559.6548acd605f75.gif?updatedAt=1750424528893";

const ES = {
  client: "Cliente",
  studio: "Estudio",
  year: "Año",
  copy: "Tonkati: \n Identidad de Marca ",
  nextProject: "Siguiente Proyecto",
  projectTitle: "Tonkati - Diseño de Marca",
  projectDescription: "Una identidad de marca que celebra la cultura gastronómica propia de México de manera contemporánea. A través de un diseño que combina elementos geometricos con un enfoque moderno, hemos creado una marca que destaca en el competitivo mundo de la restauración y nos recuerda a las raíces de la comida latina.",
  projectDescription2: "Tonkati es un restaurante que busca redefinir la experiencia culinaria. El diseño de marca incorpora elementos que reflejan la innovación, la tradición y la pasión por la gastronomía, creando una identidad que resuena tanto con comensales como con la industria.",
  ProjectText1: "Tonkati es un restaurante que busca redefinir la experiencia culinaria. El diseño de marca incorpora elementos que reflejan la innovación, la tradición y la pasión por la gastronomía, creando una identidad que resuena tanto con comensales como con la industria.",
  ProjectText2: "La campaña se centra en la creación de una experiencia visual coherente que conecta con la comunidad gastronómica. Desde el diseño del logo hasta la implementación en menús y material promocional, cada elemento ha sido diseñado para transmitir la excelencia y el espíritu innovador que define a Tonkati.",
  Envases:"Estas macetas forman parte de un programa comunitario dentro del restaurante, donde las personas pueden aprender a elaborarlas por sí mismas. Esta iniciativa fomenta la sostenibilidad a través de la reutilización, y las macetas terminadas pueden donarse para ser utilizadas por el personal del restaurante o como elementos decorativos.", 
  Platos:"Tonkati es una identidad visual que conjuga la riqueza cultural de la cocina mexicana y latina con una propuesta contemporánea y artesanal. Mediante tipografías geométricas y limpias como Millicent y Avenir, y una paleta cálida de tonos terrosos y vibrantes, se evoca la calidez y autenticidad de sus raíces. Los patrones ancestrales aportan textura y profundidad, creando una narrativa visual sólida y coherente. El resultado es un diseño que celebra tradición y modernidad con equilibrio y elegancia.",
  projectYear: "2025",
  projectClient: "Tonkati",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "",
  projectLiveDemo: "Demo en vivo",
  projectTypography: "Tipografía",
  projectAnimation: "Animación",
};

const EN = {
  client: "Client",
  studio: "Studio",
  year: "Year",
  copy: "Tonkati: \n Brand Design",
  nextProject: "Next Project",
  projectTitle: "Tonkati - Brand Design",
  projectDescription: "A brand identity that celebrates contemporary culinary culture. Through design that combines traditional elements with a modern approach, we've created a brand that stands out in the competitive world of dining.",
  projectDescription2:"The design reflects the modern style of mexican and latin cousine through the implementation of geometric shapes that reminds us of the mayan patterns and the colors present in all the spicies and the flavors its cuisine.",
  ProjectText1: "Tonkati is a restaurant that aims to redefine the culinary experience. The brand design incorporates elements that reflect innovation, tradition, and passion for gastronomy, creating an identity that resonates with both diners and the industry.",
  ProjectText2: "The campaign focuses on creating a cohesive visual experience that connects with the culinary community. From logo design to implementation in menus and promotional materials, each element has been crafted to convey the excellence and innovative spirit that defines Tonkati.",
  Envases:"These pots are part of a community program within the restaurant, where people can learn to craft their own. This initiative encourages sustainability through reuse, and the finished pots can be donated for use by the restaurant staff or as decorative elements.", 
  Platos:"Tonkati is a visual identity that blends the rich culture of Mexican and Latin cuisine with a contemporary, handcrafted approach. Using clean, geometric fonts like Millicent and Avenir, along with a warm palette of earthy and vibrant tones, it evokes the warmth and authenticity of its roots. Ancestral patterns add texture and depth, creating a strong and coherent visual narrative. The result is a design that elegantly balances tradition and modernity.",
  projectYear: "2025",
  projectClient: "Tonkati",
  projectStudio: "Creative Works",
  projectCategory: "Branding",
  projectSubCategory: "Visual Design",
  projectLiveDemo: "Live Demo",
  projectTypography: "Typography",
  projectAnimation: "Animation",
};

const Project3_Tonkati = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = currentId + 1 > 4 ? 0 : currentId + 1;

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <ReactLenis root>
        <div className="project">
          <div className="conainer">
            <div className="project-hero-img img2" style={{ width: '100vw', maxWidth: '100vw', minHeight: '40vh', height: '50vh', overflow: 'hidden', position: 'relative' }}>
              <VideoPlaceholder
                src="/assets/Tonkati/Comp 1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ width: '100vw', maxWidth: '100vw', height: '100%', minHeight: '40vh', objectFit: 'cover', display: 'block' }}
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
                    <span>{langObj.projectTypography}</span>
                    <span>{langObj.projectAnimation}</span>
                  </div>

                  <div className="sub-col">
                    <span>&#x2192; {langObj.projectLiveDemo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="img-2 pb-6">
              <IKImage
                src={ProjectHeroImg2}
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="project-copy">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.projectDescription2}
                </p>
              </div>
            </div>



            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance6%201.webp?updatedAt=1750422561468"
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="img2 pb-6">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance7%201.webp?updatedAt=1750422561236"
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "auto"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>


            <div className="project-imgs pb-6">
              <div className="img2">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance3%201.webp?updatedAt=1750422561624"
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
                  src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance2%201.webp?updatedAt=1750422561562"
                  transformation={[
                    {
                      scale: 80,
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
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.projectDescription}
                </p>
              </div>
            </div>

            


            <div className="img2 pb-6">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/hgfhgffhg%201.webp?updatedAt=1750422561520"
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance9%201.webp?updatedAt=1750422561261"
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="project-copy">
              <div className="col"></div>

              <div className="col text-[var(--primary)]">
                <p>
                  {langObj.Envases}
                </p>
              </div>
            </div>



            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Behance11%201.webp?updatedAt=1750422561559 "
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="img2">
              <IKImage
                src="https://ik.imagekit.io/andycorzowork/Projects/Project_Tonkati/Image%20_w-full_.webp?updatedAt=1750422563833"
                transformation={[
                  {
                    load: 'fast',
                    quality: 80,
                    format: "webp"
                  }
                ]}
                lqip={{ active: true, quality: 20 }}
                alt="Project Hero Img 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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

const Project3_TonkatiPage = Transition(Project3_Tonkati);
export default Project3_TonkatiPage; 