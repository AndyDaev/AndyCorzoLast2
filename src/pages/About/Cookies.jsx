import React, { useContext } from "react";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import { LanguageContext } from "../../context/LanguageContext";
import "./Cookies.css";
import { Helmet } from 'react-helmet-async';

const ES = {
  title: "Política de Cookies",
  description: `En la web <a href='https://andycorzo.com/' target='_blank' rel='noopener noreferrer'>andycorzo.com</a> utilizamos cookies para facilitar la relación de los visitantes con nuestro contenido y para permitir elaborar estadísticas sobre las visitas que recibimos. En cumplimiento de la Directiva 2009/136/CE, desarrollada en nuestro ordenamiento por el apartado segundo del artículo 22 de la Ley de Servicios de la Sociedad de la Información, y siguiendo las directrices de la Agencia Española de Protección de Datos, procedemos a informarle detalladamente del uso que se realiza en nuestra web.<br/><br/>

<span style='text-transform:uppercase'>¿Qué son las cookies?</span><br/>
Se denominan cookies a unos pequeños archivos que se graban en el navegador utilizado por cada visitante de nuestra web para que el servidor pueda recordar la visita de ese usuario con posterioridad cuando vuelva a acceder a nuestros contenidos. Esta información no revela su identidad, ni dato personal alguno, ni accede al contenido almacenado en su equipo, pero sí que permite a nuestro sistema identificarle como un usuario determinado que ya visitó la web con anterioridad, visualizó determinadas páginas, etc., y además permite guardar sus preferencias personales e información técnica como, por ejemplo, las visitas realizadas o páginas concretas que visite.<br/><br/>

<span style='text-transform:uppercase'>Finalidad de las cookies</span><br/>
La finalidad de las cookies es facilitar al usuario un acceso más rápido a los servicios seleccionados.<br/><br/>

<span style='text-transform:uppercase'>Gestión de cookies en el navegador</span><br/>
Si no desea que se guarden cookies en su navegador o prefiere recibir una notificación cada vez que una cookie solicite instalarse, puede configurar sus opciones de navegación para que se haga de esa forma. La mayoría de los navegadores permiten la gestión de las cookies de tres formas diferentes:
<ul>
  <li>Las cookies son siempre rechazadas.</li>
  <li>El navegador pregunta si el usuario desea instalar cada cookie.</li>
  <li>Las cookies son siempre aceptadas.</li>
</ul>

Su navegador también puede incluir la posibilidad de seleccionar con detalle las cookies que desea que se instalen en su equipo. En concreto, el usuario puede normalmente aceptar alguna de las siguientes opciones:
<ul>
  <li>Rechazar las cookies de determinados dominios.</li>
  <li>Rechazar las cookies de terceros.</li>
  <li>Aceptar cookies como no persistentes (se eliminan cuando el navegador se cierra).</li>
  <li>Permitir al servidor crear cookies para un dominio diferente.</li>
</ul>

Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo, puede hacerlo mediante la configuración de las opciones del navegador instalado en su ordenador.<br/><br/>

<span style='text-transform:uppercase'>Configuración de navegadores más utilizados</span><br/>
<ul>
  <li><b><span style='text-transform:uppercase'>Internet Explorer:</span></b> Herramientas → Opciones de Internet → Privacidad → Configuración. Para más información, puede consultar el <a href='https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies' target='_blank' rel='noopener noreferrer'>Soporte de Microsoft</a> o la ayuda del navegador.</li>
  <li><b><span style='text-transform:uppercase'>Firefox:</span></b> Herramientas → Opciones → Privacidad → Historial → Configuración personalizada. Para más información, puede consultar el <a href='https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-' target='_blank' rel='noopener noreferrer'>Soporte de Mozilla</a> o la ayuda del navegador.</li>
  <li><b><span style='text-transform:uppercase'>Chrome:</span></b> Configuración → Mostrar opciones avanzadas → Privacidad → Configuración de contenido. Para más información, puede consultar el <a href='https://support.google.com/chrome/answer/95647?hl=es' target='_blank' rel='noopener noreferrer'>Soporte de Google</a> o la ayuda del navegador.</li>
  <li><b><span style='text-transform:uppercase'>Safari:</span></b> Preferencias → Seguridad. Para más información, puede consultar el <a href='https://support.apple.com/es-es/guide/safari/sfri11471/mac' target='_blank' rel='noopener noreferrer'>Soporte de Apple</a> o la ayuda del navegador.</li>
</ul>

Respecto de las cookies de terceros, es decir, aquellas que son ajenas a nuestro sitio web, no podemos hacernos responsables del contenido ni de la veracidad de las políticas de privacidad que ellos incluyen, por lo que la información que le ofrecemos es siempre con referencia a la fuente.<br/><br/>

Esta política de cookies podrá ser modificada en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptarla a las instrucciones dictadas por la Agencia Española de Protección de Datos, por lo que se aconseja a los usuarios que la revisen periódicamente.<br/><br/>

Cuando se produzcan cambios significativos en esta política de cookies, se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.`
};

const EN = {
  title: "Cookie Policy – andycorzo.com",
  description: `At <a href='https://andycorzo.com/' target='_blank' rel='noopener noreferrer'>andycorzo.com</a>, we use cookies to facilitate the relationship between visitors and our content, as well as to compile statistics about the visits we receive. In compliance with Directive 2009/136/EC, as incorporated into Spanish law by Article 22.2 of the Law on Information Society Services, and in accordance with the guidelines of the Spanish Data Protection Agency, we inform you in detail about the use of cookies on our website.<br/><br/>
Cookies are small files stored in the browser of each visitor to our website, allowing the server to remember that user’s visit later when they access our content again. This information does not reveal your identity or any personal data, nor does it access the content stored on your device. However, it allows our system to identify you as a specific user who has previously visited the site, viewed certain pages, etc., and it also enables saving your personal preferences and technical information such as the number of visits or specific pages visited.<br/><br/>
The purpose of cookies is to provide the user with quicker access to the selected services.<br/><br/>
If you do not wish to store cookies in your browser or prefer to receive a notification each time a cookie requests to be installed, you can set your browser options accordingly. Most browsers allow cookie management in one of the following ways:<br/>
<ul>
  <li>Always reject cookies.</li>
  <li>Ask the user whether to accept each cookie.</li>
  <li>Always accept cookies.</li>
</ul>
Your browser may also allow you to specify which cookies you wish to accept:<br/>
<ul>
  <li>Reject cookies from certain domains.</li>
  <li>Reject third-party cookies.</li>
  <li>Accept cookies as non-persistent (deleted when the browser is closed).</li>
  <li>Allow the server to create cookies for a different domain.</li>
</ul>
To allow, view, block, or delete cookies installed on your device, you can adjust the settings in your browser. You can find information on how to configure the most commonly used browsers at the following links:<br/>
<ul>
  <li><b>Internet Explorer:</b> Tools → Internet Options → Privacy → Settings. See <a href='https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies' target='_blank' rel='noopener noreferrer'>Microsoft Support</a> or the browser’s Help section.</li>
  <li><b>Firefox:</b> Tools → Options → Privacy → History → Custom Settings. See <a href='https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' target='_blank' rel='noopener noreferrer'>Mozilla Support</a> or the browser’s Help section.</li>
  <li><b>Chrome:</b> Settings → Show advanced options → Privacy → Content Settings. See <a href='https://support.google.com/chrome/answer/95647?hl=en' target='_blank' rel='noopener noreferrer'>Google Support</a> or the browser’s Help section.</li>
  <li><b>Safari:</b> Preferences → Security. See <a href='https://support.apple.com/guide/safari/sfri11471/mac' target='_blank' rel='noopener noreferrer'>Apple Support</a> or the browser’s Help section.</li>
</ul>
Regarding third-party cookies (those not managed by our website), we are not responsible for their privacy policies or the accuracy of the information they provide. Our information about such cookies is always referenced to the source.<br/><br/>
This Cookie Policy may be updated due to legislative or regulatory changes, or in order to adapt to the instructions issued by the Spanish Data Protection Agency. Therefore, users are advised to review it periodically.<br/><br/>
When significant changes are made to this Cookie Policy, users will be notified either via the website or by email (if registered).`
};

const Cookies = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  return (
    <ReactLenis root className="bg-white" key={language}>
      <Helmet>
        <title>{langObj.title}</title>
        <meta name="description" content={language === 'EN' ? 'Cookie policy for andycorzo.com. Learn how we use cookies to improve your experience.' : 'Política de cookies de andycorzo.com. Aprende cómo usamos cookies para mejorar tu experiencia.'} />
        <meta property="og:title" content={langObj.title} />
        <meta property="og:description" content={language === 'EN' ? 'Cookie policy for andycorzo.com.' : 'Política de cookies de andycorzo.com.'} />
        <meta property="og:image" content="/public/site-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://andycorzo.com/cookies`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="page about mt-4">
        <div className="cookies-policy-container">
          <AnimatedCopy animateOnScroll={true} tag="h1" className="about-title mt-4">
            {langObj.title}
          </AnimatedCopy>
          {language === "ES" ? (
            <div className="cookies-policy-content"
              dangerouslySetInnerHTML={{ __html: langObj.description }} />
          ) : (
            <div className="cookies-policy-content"
              dangerouslySetInnerHTML={{ __html: langObj.description }} />
          )}
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Cookies); 