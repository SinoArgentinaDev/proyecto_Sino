import { SocialIcon } from 'react-social-icons';
import { Header } from '../components/shared/Header/Header';
import { Title } from '../components/shared/Title/Title';
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo';
import { About } from '../components/About/About';
import { Titulo } from '../components/Titulo/Titulo';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/shared/Footer/Footer';
import nosotros from '../assets/videos/SobreNosotros.mp4';
import mision from '../assets/img/mision.png';
import vision from '../assets/img/vision.png';
import { HorizontalCard } from '../components/HorizontalCard/HorizontalCard';
import { InvertCard } from '../components/HorizontalCard/InvertCard';
import { WhyUs } from '../components/WhyUs/WhyUs';

export const Nosotros = () => {
  return (
    <div>
      <Header />
      <Title title="SOBRE NOSOTROS" text="Home / Sobre Nosotros" />
      <Titulo title="Sino Argentina Group: Conectando Pymes Argentinas" title2="con el Mercado Chino" />
      {/* SocialIcon fijado en la pantalla */}
      <div className="fixed bottom-4 right-4 z-50">
        <SocialIcon url="https://web.whatsapp.com/" />
      </div>
      <AboutUsTwo
        videoSrc={nosotros}
        title="Confianza y Éxito en tus operaciones con el Mercado Chino sin barreras ni riesgos"
        paragraph1="Somos Sino Argentina Group, una empresa de comercio exterior con oficinas en la ciudad de Guangzhou, China, y en Buenos Aires, Argentina. Nuestra misión es asistir a las pymes argentinas para integrarse en el mercado Chino."
        paragraph2="Ofrecemos un servicio integral de comercio exterior con el mercado Chino. Nos encargamos de facilitar todas las gestiones de importación y exportación tanto en China como en Argentina, con profesionales bilingües radicados en China, con excelente dominio del idioma chino y español."
        paragraph3="Conocemos la complejidad de encontrar el proveedor adecuado en China para poder importar sin caer en fraudes o estafas; así como la incertidumbre de saber si el comprador de tus productos en China es serio y cumplirá con las condiciones de compra para tus exportaciones hacia China."
      />
      <About
        videoSrc={nosotros}
        paragraph1="Estas dificultades que se presentan tanto en la importación desde China como en la venta de productos argentinos hacia allí, requieren de nuestra gestión para llevar a cabo con éxito las negociaciones y gestiones de compra/venta."
        paragraph2="Sino Argentina Group se encarga de la búsqueda de proveedores profesionales, ofreciendo distintas alternativas de proveedores de acuerdo a tus requerimientos y negociando los mejores precios y condiciones de compra. Una vez cerrado el contrato de compra, nos encargamos de efectuar toda la logística para que tus productos lleguen a Argentina correctamente."
        paragraph3="En el caso de que estés planificando abrir el mercado Chino para tus exportaciones, nos encargamos de efectuar la investigación de mercado, identificando posibles clientes; facilitamos la negociación de venta y constatamos la veracidad y seriedad del importador chino. Una vez cerrada la venta, también nos encargamos de toda la logística desde cualquier localidad en Argentina hasta el destino final en China."
      />
      <HorizontalCard
        url={mision}
        title="MISIÓN"
        texts={[
          "Nuestra misión es simplificar y asegurar el proceso de comercio exterior entre Argentina y China. A través de nuestros servicios integrales, buscamos fortalecer a las pymes argentinas, brindándoles las herramientas y el conocimiento necesarios para llevar a cabo con éxito todas las gestiones de comercio exterior en el mercado chino.",
          "Con años de experiencia en el mercado chino, conociendo plenamente su lengua, su cultura y las particularidades de cada negociación, sabemos mitigar los riesgos y garantizamos la satisfacción de nuestros clientes en cada etapa de la operación.",
          "Nos comprometemos a ser socios estratégicos de nuestros clientes, ofreciendo soluciones adaptadas a sus necesidades específicas y ayudándolos a alcanzar sus objetivos comerciales de manera efectiva y segura.",
        ]}
      />
      <InvertCard
        url={vision}
        title="VISIÓN"
        texts={[
          "Sino Argentina Group aspira a ser el puente comercial definitivo entre Argentina y China, facilitando el acceso de las empresas argentinas al vasto mercado chino y optimizando sus operaciones comerciales",
          "Nos visualizamos como líderes en la gestión comercial con el mercado chino, siendo reconocidos por el dominio de la lengua y cultura china de nuestros profesionales situados en China, tanto de nacionalidad argentina como china, brindando confiabilidad y compromiso en cada transacción; y contribuyendo al fortalecimiento de las PYMES argentinas en el mercado chino.",
          "Creemos en un futuro donde el comercio bilateral entre Argentina y China se desarrolle con transparencia, eficiencia y confianza mutua, marcando un impacto positivo en las economías de ambos países.",
        ]}
      />
      <WhyUs />
      <Contacto />
      <Footer />
    </div>
  );
};
