import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Project2_Altavoz = () => {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/andresgarcia">
      <ReactLenis root>
        <ScrollToTop />
        {/* ... rest of the JSX ... */}
      </ReactLenis>
    </IKContext>
  );
};

export default Project2_Altavoz; 