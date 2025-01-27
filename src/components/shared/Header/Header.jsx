import { Navbar } from '../../Navbar/Navbar';
import sino_logo from '../../../assets/img/sinoLogo.png';
import flagUsa from '../../../assets/img/flag-usa.svg';
import flagSpain from '../../../assets/img/flagspain.svg'
import {useTranslation} from "react-i18next"

export const Header = () => {
  
  const [t, i18n] = useTranslation("global")

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md md:px-12">
      {/* Logo a la izquierda */}
      <img
        className="w-24 md:w-28"
        src={sino_logo}
        alt="Logo de la empresa"
      />

      {/* Contenedor para agrupar Navbar y bandera a la derecha */}
      <div className="flex items-center space-x-6 md:space-x-20">
        <Navbar />
        <button onClick={() => i18n.changeLanguage("es")}>
          <img
            className="w-8 md:w-10"
            src={flagSpain}
            alt="Bandera de España"
          />
        </button>
        <button onClick={() => i18n.changeLanguage("en")}>
          <img
            className="w-8 md:w-10"
            src={flagUsa}
            alt="Bandera de EE.UU."
          />
        </button>
      </div>
    </header>
  );
};
