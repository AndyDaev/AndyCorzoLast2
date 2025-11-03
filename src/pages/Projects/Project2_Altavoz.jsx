import { ReactLenis } from "lenis/react";
import { IKImage, IKContext } from 'imagekitio-react';
import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { workListEN, workListES } from "../../data/workList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Project2_Altavoz = () => {
  // ImageKit configuration with fallbacks
  const imageKitPublicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY || 'public_fWd6+RnXiyu4OLZt83KMQIfuBXs=';
  const imageKitUrlEndpoint = (import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/andycorzowork').replace(/\/$/, '');

  return (
    <IKContext
      publicKey={imageKitPublicKey}
      urlEndpoint={imageKitUrlEndpoint}
      transformationPosition="path"
    >
      <ReactLenis root>
        <ScrollToTop />
        {/* ... rest of the JSX ... */}
      </ReactLenis>
    </IKContext>
  );
};

export default Project2_Altavoz; 