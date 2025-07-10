import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import "./ProjectAltavoz.css";

import Transition from "../../components/Transition/Transition";

const ES = {
  workInProgress: "Trabajo en Progreso",
  comingSoon: "Próximamente",
  nextProject: "Proyecto siguiente"
};

const EN = {
  workInProgress: "Work in Progress",
  comingSoon: "Coming Soon",
  nextProject: "Next Project"
};

const Project4_WorkInProgress = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  const workList = language === "EN" ? workListEN : workListES;
  
  // Get the current project ID and calculate the next project ID
  const currentId = parseInt(id);
  const nextId = 0; // Always go back to first project

  return (
    <ReactLenis root>
      <div className="project" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        <div className="conainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2em' }}>
          <h1 style={{ fontSize: '3em', marginBottom: '1em' }}>{langObj.workInProgress}</h1>
          <p style={{ fontSize: '1.5em', marginBottom: '2em' }}>{langObj.comingSoon}</p>
          
          <div className="next-project-cta">
            <Link to={`/project/${nextId}`}>
              <h1 className="text-[var(--primary)]">{langObj.nextProject}</h1>
            </Link>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

const Project4_WorkInProgressPage = Transition(Project4_WorkInProgress);
export default Project4_WorkInProgressPage; 