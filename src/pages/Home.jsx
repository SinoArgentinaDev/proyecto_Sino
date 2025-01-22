import { AboutUs } from '../components/AboutUS/AboutUs';
import { Banner } from '../components/Banner/Banner';
import { Contacto } from '../components/Contacto/Contacto';
import { Portada } from '../components/Portada/Portada';
import { Servicios } from '../components/Servicios/Servicios';
import { Footer } from '../components/shared/Footer/Footer';
import { Header } from '../components/shared/Header/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <Portada />
      <AboutUs />
      <Banner />
      <Servicios/>
      <Contacto/>
      <Footer/>
    </div>
  );
};

