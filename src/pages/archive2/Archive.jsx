import { useEffect, useState, useRef, useContext } from "react";
import { ReactLenis } from "lenis/react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Archive.css";

import Transition from "../../components/Transition/Transition";
import Preview from "../../components/preview/Preview";
import { archivesEN, archivesES } from "../../data/archivesList";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
  const [archiveList, setArchiveList] = useState([]);
  const containerRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const archives = language === "EN" ? archivesEN : archivesES;
  
  useEffect(() => {
    const initialSet = Array(60)
      .fill()
      .flatMap((_, i) =>
        archives.map((archive, j) => ({
          ...archive,
          name: `${archive.name}`,
          id: i * archives.length + j,
        }))
      );
    setArchiveList(initialSet);
  }, [archives]);

  useEffect(() => {
    if (containerRef.current && archiveList.length > 0) {
      ScrollTrigger.create({
        scroller: containerRef.current,
        start: 0,
        end: "max",
        onLeave: (self) => {
          self.scroll(1);
          ScrollTrigger.update();
        },
        onLeaveBack: (self) => {
          self.scroll(ScrollTrigger.maxScroll(containerRef.current) - 1);
          ScrollTrigger.update();
        },
      });

      const archiveItems =
        containerRef.current.querySelectorAll(".archive-item");
      archiveItems.forEach((item) => {
        gsap.to(item, {
          repeat: 1,
          yoyo: true,
          ease: "none",
          scrollTrigger: {
            scroller: containerRef.current,
            trigger: item,
            start: "center bottom",
            end: "center top",
            scrub: true,
          },
        });
      });
    }
  }, [archiveList]);

  return (
    <ReactLenis root>
      <div
        className="archive"
        ref={containerRef}
        style={{
          height: "100vh",
          top: "-25em",
        }}
      >
        <div className="container">
          <div className="overlay"></div>

          <Preview />

          {archiveList.map((archive) => (
            <div className="row" key={archive.id}>
              <div className="archive-item">
                <div className="archive-details">
                  <h1 id="archive-name">{archive.name}</h1>
                  <p id="archive-category">{archive.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Archive);
