import { AboutUs } from '../components/AboutUS/AboutUs';
import { Banner } from '../components/Banner/Banner';
import { Contacto } from '../components/Contacto/Contacto';
import { Portada } from '../components/Portada/Portada';
import { Servicios } from '../components/Servicios/Servicios';
import { Footer } from '../components/shared/Footer/Footer';
import { Header } from '../components/shared/Header/Header';
import videoUs from '../assets/videos/SobreNosotros.mp4'
export const Home = () => {
  return (
    <div>
      <Header />
      <Portada />
      <AboutUs
        videoSrc={videoUs}
        title="SOBRE NOSOTROS"
        paragraph1="Somos Sino Argentina Group, una empresa de comercio exterior con oficinas en la ciudad de Guangzhou, China, y en Buenos Aires, Argentina. Nuestra misión es asistir a las pymes argentinas para integrarse en el mercado Chino."
        paragraph2="Ofrecemos un servicio integral de comercio exterior con el mercado Chino. Nos encargamos de facilitar todas las gestiones de importación y exportación tanto en China como en Argentina, con profesionales bilingües radicados en China, con excelente dominio del idioma chino y español."
        paragraph3="En el caso de que estés planificando abrir el mercado Chino para tus exportaciones, nos encargamos de efectuar la investigación de mercado, identificando posibles clientes; facilitamos la negociación de venta y constatamos la veracidad y seriedad del importador chino. "
        showButton={true}
      />
      <Banner />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
};

