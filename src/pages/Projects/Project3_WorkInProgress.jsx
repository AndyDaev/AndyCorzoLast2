import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Project3_WorkInProgress = () => {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/andresgarcia">
      <ReactLenis root>
        <ScrollToTop />
        {/* ... rest of the JSX ... */}
      </ReactLenis>
    </IKContext>
  );
};

export default Project3_WorkInProgress; 