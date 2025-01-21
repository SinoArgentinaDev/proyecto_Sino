import { Portada } from '../components/Portada/Portada';
import { Header } from '../components/shared/Header/Header';

export const Home = () => {
  return (
    <div>
      {/* El Header tendrá posición fija */}
      <Header />
      {/* Margen superior para evitar superposición */}
      <div>
      <Portada />
      </div>
    </div>
  );
};

