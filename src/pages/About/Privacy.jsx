import React, { useContext } from "react";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import { LanguageContext } from "../../context/LanguageContext";
import "./Cookies.css";
import { Helmet } from 'react-helmet-async';

const ES = {
  title: "POLÍTICA DE PRIVACIDAD",
  description: `<span style='text-transform:uppercase'>Información Básica sobre Protección de Datos</span><br/>
<b>Responsable:</b> Andrés López Corzo<br/><br/>
<b>Finalidad:</b> Inscripciones en eventos como participantes o voluntarios, prestación de servicios solicitados o respuesta a consultas a través de los apartados de contacto de la web, gestión administrativa, contable y fiscal, así como el envío de comunicaciones informativas siempre que el usuario haya dado su consentimiento expreso.<br/><br/>
<b>Legitimación:</b> Ejecución de un contrato. Interés legítimo del responsable del tratamiento. Consentimiento del interesado.<br/><br/>
<b>Destinatarios:</b> No se cederán datos a terceros, salvo obligación legal.<br/><br/>
<b>Derechos:</b> Acceder, rectificar y suprimir los datos, así como otros derechos explicados en la información adicional, que puede ejercer escribiendo a: <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a><br/><br/>
<span style='text-transform:uppercase'>Información adicional sobre protección de datos</span><br/>
<b>¿Quién es el responsable del tratamiento de sus datos?</b><br/>
Identidad: Andrés López Corzo<br/>
DNI: 71732427G<br/>
Domicilio social: Calle Silla del Rey 35, 33013, Oviedo, Asturias<br/>
Correo electrónico: <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a><br/><br/>
<b>¿Con qué finalidad tratamos tus datos personales?</b><br/>
Tratamos la información que nos facilitan las personas interesadas para:<br/>
<ul>
  <li>Inscripciones en eventos como participante o voluntario.</li>
  <li>Prestar servicios solicitados o responder a consultas.</li>
  <li>Gestión administrativa, contable y fiscal.</li>
  <li>Envío de comunicaciones informativas si existe consentimiento expreso.</li>
</ul>
Cuando un usuario se conecta con esta web, está facilitando información personal (como IP, nombre, dirección postal, correo electrónico o teléfono) que será gestionada únicamente conforme a esta política de privacidad.<br/><br/>
<b>¿Cómo obtenemos tus datos?</b><br/>
Formulario de contacto o inscripción: Recogemos nombre, apellidos y email para responder a tus requerimientos o gestionar inscripciones.<br/>
Ubicación de los datos: En servidores de CLOUDMAX S.L.U., dentro de la UE.<br/><br/>
<b>Otras finalidades:</b><br/>
<ul>
  <li>Cumplimiento de la legalidad vigente y condiciones de uso.</li>
  <li>Mejorar los servicios web.</li>
  <li>Análisis estadístico mediante cookies (ver Política de Cookies).</li>
  <li>Gestión de redes sociales según las políticas de cada plataforma.</li>
</ul>
<span style='text-transform:uppercase'>Legitimación para el tratamiento</span><br/>
<ul>
  <li>Ejecución de contrato: Servicios solicitados.</li>
  <li>Consentimiento: Contacto, comentarios, inscripciones y comunicaciones comerciales.</li>
  <li>Interés legítimo: Mejora y control de calidad del servicio ofrecido.</li>
</ul>
<b>¿Durante cuánto tiempo conservaremos tus datos?</b><br/>
<ul>
  <li>Mientras no se solicite su supresión.</li>
  <li>Mientras exista relación contractual.</li>
  <li>Durante los años necesarios para cumplir con las obligaciones legales.</li>
</ul>
<b>¿A qué destinatarios se comunicarán tus datos?</b><br/>
No se cederán datos a terceros salvo obligación legal. Solo se comparten con prestadores de servicios que actúan como encargados de tratamiento y bajo acuerdo de confidencialidad. Actualmente:<br/>
Proveedor de hosting: CLOUDMAX S.L.U. (España)<br/><br/>
<b>¿Transferencias a terceros países?</b><br/>
No están previstas, excepto por servicios como Google Analytics que puedan transferir datos a EE.UU. conforme a sus propias políticas.<br/><br/>
<span style='text-transform:uppercase'>Derechos del usuario</span><br/>
Cualquier persona puede:<br/>
<ul>
  <li>Acceder a sus datos personales.</li>
  <li>Solicitar la rectificación de datos inexactos.</li>
  <li>Solicitar su supresión cuando ya no sean necesarios.</li>
  <li>Solicitar la limitación u oposición del tratamiento.</li>
  <li>Solicitar la portabilidad de sus datos.</li>
</ul>
Para ejercer estos derechos:<br/>
Envíe un email firmado con certificado digital a <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a> o una carta con copia del DNI a la dirección:<br/>
Calle Silla del Rey 35, 33013, Oviedo, Asturias.<br/><br/>
También puede presentar reclamación ante la Agencia Española de Protección de Datos: <a href='https://www.aepd.es' target='_blank' rel='noopener noreferrer'>www.aepd.es</a><br/><br/>
<span style='text-transform:uppercase'>2. PROCEDIMIENTO EN CASO DE ACTIVIDADES ILÍCITAS</span><br/>
Si un usuario detecta hechos que revelen el uso ilícito de contenido o actividades en el sitio web, deberá comunicarlo a Andrés López Corzo con una descripción detallada, y bajo su responsabilidad, garantizar la veracidad de dicha información.<br/><br/>
Jurisdicción: Juzgados y Tribunales de Oviedo, Asturias. Aplicación de la legislación española.<br/><br/>
<span style='text-transform:uppercase'>3. PUBLICACIONES</span><br/>
La información publicada en el sitio web no sustituye la legalidad vigente publicada en boletines oficiales. Su contenido tiene carácter orientativo, sin validez legal.<br/><br/>
Última actualización: Julio de 2025`
};

const EN = {
  title: "Privacy Policy",
  description: `<span style='text-transform:uppercase'>Basic Information on Data Protection</span><br/>
<b>Data Controller:</b> Andrés López Corzo<br/><br/>
<b>Purpose:</b> Event registrations as participants or volunteers, provision of requested services, responses to contact form inquiries, administrative, accounting, and tax management of contracted services through the website, as well as sending informational communications if the user has given express consent.<br/><br/>
<b>Legal Basis:</b> Performance of a contract. Legitimate interest of the data controller. Consent of the data subject.<br/><br/>
<b>Recipients:</b> No data will be transferred to third parties, except when legally required.<br/><br/>
<b>Rights:</b> You have the right to access, rectify, and delete your data, as well as other rights detailed below. You can exercise them by contacting <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a>.<br/><br/>
<span style='text-transform:uppercase'>Additional Information on Data Protection</span><br/>
<span style='text-transform:uppercase'>Who is responsible for your data?</span><br/>
<ul>
  <li><b>Identity:</b> Andrés López Corzo</li>
  <li><b>ID Number:</b> 71732427G</li>
  <li><b>Address:</b> Calle Silla del Rey 35, 33013, Oviedo, Asturias, Spain</li>
  <li><b>Email:</b> <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a></li>
</ul><br/>
<span style='text-transform:uppercase'>Why do we process your personal data?</span><br/>
<p>We use the data you provide to register you for events, respond to inquiries, provide services, manage administration and billing, and send updates if consented. We may also process data for:</p>
<ul>
  <li>Ensuring compliance with legal terms of use.</li>
  <li>Improving the services offered on the website.</li>
  <li>Analyzing non-identifiable data through cookies (see our Cookies Policy).</li>
  <li>Managing our presence on social media in accordance with each platform’s policies.</li>
</ul><br/>
<span style='text-transform:uppercase'>How do we collect your data?</span><br/>
<p>Via contact or registration forms. Data is stored on CLOUDMAX S.L.U. servers within the EU.</p><br/>
<span style='text-transform:uppercase'>Legal Basis for Processing</span><br/>
<ul>
  <li><b>Contract:</b> To provide requested services.</li>
  <li><b>Consent:</b> Required for contact or comments.</li>
  <li><b>Legitimate interest:</b> To improve our services.</li>
</ul><br/>
<span style='text-transform:uppercase'>How long will we keep your data?</span><br/>
<ul>
  <li>Until deletion is requested by the data subject.</li>
  <li>As long as the commercial relationship is maintained.</li>
  <li>For as long as necessary to comply with legal obligations.</li>
</ul><br/>
<span style='text-transform:uppercase'>Will your data be shared?</span><br/>
<p>We do not sell, rent, or transfer personal data to third parties without prior consent. If collaboration with a third party is necessary, it will only be done with strict privacy guarantees and user notification. Data is shared only with:</p>
<ul>
  <li><b>Hosting Provider:</b> CLOUDMAX S.L.U. (Spain)</li>
</ul><br/>
<span style='text-transform:uppercase'>Are there international data transfers?</span><br/>
<p>No international transfers are planned, except for services like Google Analytics, where data may be stored in the U.S.</p><br/>
<span style='text-transform:uppercase'>Your Rights</span><br/>
<p>You have the right to:</p>
<ul>
  <li>Access your personal data.</li>
  <li>Request correction of inaccurate data.</li>
  <li>Request deletion or restriction of processing.</li>
  <li>Request data portability.</li>
  <li>Object to data processing under certain circumstances.</li>
</ul>
<p>To exercise your rights, send a digitally signed email to <a href='mailto:andycorzowork@gmail.com'>andycorzowork@gmail.com</a> or a letter with a copy of your ID to Calle Silla del Rey 35, 33013, Oviedo, Asturias, Spain.</p>
<p>If you feel your rights have been violated, you may file a complaint with the Spanish Data Protection Agency: <a href='https://www.aepd.es' target='_blank' rel='noopener noreferrer'>www.aepd.es</a>.</p><br/>
<span style='text-transform:uppercase'>2. Procedure for Reporting Unlawful Activities</span><br/>
<p>If any user or third party believes that unlawful activities are being carried out through this website, they must notify Andrés López Corzo, properly identifying themselves and specifying the alleged infringements. Legal disputes will be governed by Spanish law and resolved in the Courts of Oviedo, Asturias.</p><br/>
<span style='text-transform:uppercase'>3. Publications</span><br/>
<p>The administrative information available on the website is for guidance only and does not replace the official publication of laws and regulations in public official journals, which are the only legally valid documents.</p><br/>
<p><em>Page updated in July 2025.</em></p>`
};

const Privacy = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  return (
    <ReactLenis root className="bg-white" key={language}>
      <Helmet>
        <title>{langObj.title}</title>
        <meta name="description" content={language === 'EN' ? 'Privacy policy for andycorzo.com. Learn how we protect your data.' : 'Política de privacidad de andycorzo.com. Aprende cómo protegemos tus datos.'} />
        <meta property="og:title" content={langObj.title} />
        <meta property="og:description" content={language === 'EN' ? 'Privacy policy for andycorzo.com.' : 'Política de privacidad de andycorzo.com.'} />
        <meta property="og:image" content="/public/site-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://andycorzo.com/privacy`} />
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

export default Transition(Privacy); 