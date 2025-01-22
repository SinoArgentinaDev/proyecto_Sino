import { AboutUs } from '../components/AboutUS/AboutUs';
import { Banner } from '../components/Banner/Banner';
import { Portada } from '../components/Portada/Portada';
import { Servicios } from '../components/Servicios/Servicios';
import { Header } from '../components/shared/Header/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <Portada />
      <AboutUs />
      <Banner />
      <Servicios/>
    </div>
  );
};

