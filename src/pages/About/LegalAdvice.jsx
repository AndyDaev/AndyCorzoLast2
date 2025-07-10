import React, { useContext } from "react";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import "./Cookies.css";
import { LanguageContext } from "../../context/LanguageContext";
import { Helmet } from 'react-helmet-async';

const ES = {
  title: "AVISO LEGAL – andycorzo.com",
  description: `El presente Aviso Legal regula las condiciones generales de acceso y utilización del sitio web accesible en la dirección URL <a href='https://andycorzo.com' target='_blank' rel='noopener noreferrer'>andycorzo.com</a> (en adelante, el sitio web), que Andrés López Corzo pone a disposición de los usuarios de Internet.<br/><br/>
La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. En consecuencia, el usuario del sitio web debe leer atentamente el presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar la web, ya que el texto podría sufrir modificaciones a criterio del titular de la web, o a causa de un cambio legislativo, jurisprudencial o en la práctica empresarial.<br/><br/>
1.- <b>TITULARIDAD DEL SITIO WEB</b><br/>
Nombre o razón social: Andrés López Corzo<br/>
Nombre del titular: Andrés López Corzo<br/>
Domicilio social: Calle Silla del Rey 35<br/>
Localidad: Oviedo<br/>
Provincia: Asturias<br/>
C.P.: 33013<br/>
DNI: 71732427G<br/>
Correo electrónico de contacto: <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a><br/><br/>
2.- <b>OBJETO</b><br/>
El sitio web facilita a los usuarios el acceso a información y servicios prestados por Andrés López Corzo a aquellas personas u organizaciones interesadas en los mismos.<br/><br/>
3.- <b>ACCESO Y UTILIZACIÓN DE LA WEB</b><br/>
3.1.- Carácter gratuito del acceso y utilización de la web.<br/>
El acceso a la web tiene carácter gratuito para los usuarios.<br/><br/>
3.2.- Registro de usuarios.<br/>
Con carácter general, el acceso y utilización de la web no exige la previa suscripción o registro de los usuarios.<br/><br/>
4.- <b>CONTENIDOS DE LA WEB</b><br/>
El idioma utilizado por el titular en la web será el castellano. Andrés López Corzo no se responsabiliza de la no comprensión o entendimiento del idioma por parte del usuario ni de sus consecuencias.<br/><br/>
Andrés López Corzo podrá modificar los contenidos sin previo aviso, así como eliminarlos o cambiar su presentación, sin asumir responsabilidad alguna por ello.<br/><br/>
Se prohíbe el uso de los contenidos de la web para promocionar, contratar o divulgar publicidad sin la autorización de Andrés López Corzo, ni remitir publicidad valiéndose de los servicios disponibles en la web, independientemente de si la utilización es gratuita o no.<br/><br/>
Los enlaces que incorporen terceros hacia este sitio web deberán dirigir a su página principal, y no podrán mostrar contenidos falsos, inexactos o confusos, ni realizar acciones desleales o ilícitas contra Andrés López Corzo.<br/><br/>
5.- <b>LIMITACIÓN DE RESPONSABILIDAD</b><br/>
El acceso a la web y el uso de la información contenida es responsabilidad exclusiva del usuario. Andrés López Corzo no se responsabiliza de las consecuencias, daños o perjuicios derivados del acceso o uso de la web ni de posibles fallos de seguridad que puedan producirse por virus, fallos del navegador o uso de versiones no actualizadas.<br/><br/>
Tampoco se hace responsable de la fiabilidad y utilidad de los enlaces a otras webs ni del contenido al que pueda accederse a través de ellos.<br/><br/>
6.- <b>USO DE LA TECNOLOGÍA “COOKIE”</b><br/>
La web utiliza cookies. Puede consultar nuestra Política de Cookies, que respeta en todo momento la confidencialidad y privacidad del usuario.<br/><br/>
7.- <b>PROPIEDAD INTELECTUAL E INDUSTRIAL</b><br/>
Todos los derechos de propiedad intelectual e industrial del sitio web, así como de los contenidos, pertenecen a Andrés López Corzo. Cualquier uso distinto al estrictamente personal deberá contar con la autorización expresa y por escrito del titular.<br/><br/>
8.- <b>POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</b><br/>
Andrés López Corzo garantiza la protección y confidencialidad de los datos personales de acuerdo con el Reglamento (UE) 2016/679 (RGPD). Los datos serán tratados con las medidas de seguridad exigidas por la normativa vigente y se utilizarán únicamente para prestar los servicios solicitados.<br/><br/>
Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un correo electrónico a: <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a>.<br/><br/>
9.- <b>LEGISLACIÓN APLICABLE Y JURISDICCIÓN COMPETENTE</b><br/>
El presente Aviso Legal se interpretará conforme a la legislación española. Andrés López Corzo y el usuario se someten a los juzgados y tribunales del domicilio del usuario para cualquier disputa que pudiera derivarse del acceso o uso de la web. En caso de que el usuario resida fuera de España, ambas partes se someterán a los juzgados y tribunales del domicilio del titular de la web.`
};

const EN = {
  title: "Legal Notice – andycorzo.com",
  description: `This Legal Notice regulates the general terms and conditions for access and use of the website accessible at the URL <a href='https://andycorzo.com' target='_blank' rel='noopener noreferrer'>andycorzo.com</a> (hereinafter, the "website"), which <b>Andrés López Corzo</b> makes available to Internet users.<br/><br/>
The use of the website implies full and unconditional acceptance of each and every provision included in this Legal Notice. Consequently, the user must read this Legal Notice carefully on each occasion they intend to use the website, as it may be subject to modifications at the discretion of the owner of the website, or due to legislative, jurisprudential, or business practice changes.<br/><br/>
<span style='text-transform:uppercase'>1. WEBSITE OWNER</span><br/>
<ul>
  <li><b>Full Name:</b> Andrés López Corzo</li>
  <li><b>Address:</b> Calle Silla del Rey 35, 33013, Oviedo, Asturias, Spain</li>
  <li><b>ID Number (DNI):</b> 71732427G</li>
  <li><b>Email:</b> <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a></li>
</ul><br/>
<span style='text-transform:uppercase'>2. PURPOSE</span><br/>
<p>The website provides users with access to information and services offered by Andrés López Corzo to individuals and organizations interested in them.</p><br/>
<span style='text-transform:uppercase'>3. ACCESS AND USE</span><br/>
<span style='text-transform:uppercase'>3.1 Free Access</span><br/>
<p>Access to the website is free of charge for users.</p><br/>
<span style='text-transform:uppercase'>3.2 User Registration</span><br/>
<p>In general, access and use of the website do not require prior user registration or subscription.</p><br/>
<span style='text-transform:uppercase'>4. WEBSITE CONTENT</span><br/>
<p>The language used by the owner on the website is Spanish. Andrés López Corzo is not responsible for the lack of understanding or comprehension of the language by the user or its consequences.</p><br/>
<p>Andrés López Corzo may modify the content without prior notice, as well as delete or change its presentation, without assuming any responsibility for it.</p><br/>
<p>The use of the website's content to promote, contract, or disseminate advertising without the authorization of Andrés López Corzo is prohibited, as is sending advertising using the services available on the website, regardless of whether the use is free or not.</p><br/>
<p>Links incorporated by third parties to this website must direct to its main page and may not display false, inaccurate, or confusing content, nor engage in unfair or illegal actions against Andrés López Corzo.</p><br/>
<span style='text-transform:uppercase'>5. LIMITATION OF LIABILITY</span><br/>
<p>Access to the website and the use of the information contained therein is the sole responsibility of the user. Andrés López Corzo is not responsible for the consequences, damages, or harm arising from access to or use of the website, nor for possible security failures that may occur due to viruses, browser malfunctions, or the use of outdated versions.</p><br/>
<p>Nor is he responsible for the reliability and usefulness of links to other websites or the content that may be accessed through them.</p><br/>
<span style='text-transform:uppercase'>6. USE OF “COOKIES” TECHNOLOGY</span><br/>
<p>The website uses cookies. You can consult our Cookie Policy, which always respects the user's confidentiality and privacy.</p><br/>
<span style='text-transform:uppercase'>7. INTELLECTUAL AND INDUSTRIAL PROPERTY</span><br/>
<p>All intellectual and industrial property rights to the website and its content belong to Andrés López Corzo. Any use other than strictly personal use must have the express and written authorization of the owner.</p><br/>
<span style='text-transform:uppercase'>8. PRIVACY POLICY AND DATA PROTECTION</span><br/>
<p>Andrés López Corzo guarantees the protection and confidentiality of personal data in accordance with Regulation (EU) 2016/679 (GDPR). Data will be processed with the security measures required by current regulations and will be used solely to provide the requested services.</p><br/>
<p>Users may exercise their rights of access, rectification, cancellation, and opposition by sending an email to: <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a>.</p><br/>
<span style='text-transform:uppercase'>9. APPLICABLE LAW AND JURISDICTION</span><br/>
<p>This Legal Notice shall be interpreted in accordance with Spanish law. Andrés López Corzo and the user submit to the courts and tribunals of the user's domicile for any dispute that may arise from access to or use of the website. If the user resides outside Spain, both parties submit to the courts and tribunals of the website owner's domicile.</p>`
};

const LegalAdvice = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  return (
    <ReactLenis root className="bg-white" key={language}>
      <Helmet>
        <title>{langObj.title}</title>
        <meta name="description" content={language === 'EN' ? 'Legal notice for andycorzo.com. Terms and conditions for use of the website.' : 'Aviso legal de andycorzo.com. Condiciones de uso del sitio web.'} />
        <meta property="og:title" content={langObj.title} />
        <meta property="og:description" content={language === 'EN' ? 'Legal notice for andycorzo.com.' : 'Aviso legal de andycorzo.com.'} />
        <meta property="og:image" content="/public/site-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://andycorzo.com/legal`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="page about mt-4">
        <div className="cookies-policy-container">
          <AnimatedCopy animateOnScroll={true} tag="h1" className="about-title mt-4">
            {langObj.title}
          </AnimatedCopy>
          <div className="cookies-policy-content" dangerouslySetInnerHTML={{ __html: langObj.description }} />
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(LegalAdvice); 