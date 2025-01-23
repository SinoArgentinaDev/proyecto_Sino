import { Navbar } from '../../Navbar/Navbar';
import sino_logo from '../../../assets/img/sinoLogo.png';
import flagUsa from '../../../assets/img/flag-usa.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md md:px-10">
      {/* Logo a la izquierda */}
      <img
        className="w-24 md:w-28"
        src={sino_logo}
        alt="Logo de la empresa"
      />

      {/* Contenedor para agrupar Navbar y bandera a la derecha */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <Navbar
          texto1="Home"
          texto2="Sobre nosotros"
          texto3="Servicios"
          texto4="Contacto"
        />
        <img
          className="w-8 md:w-10"
          src={flagUsa}
          alt="Bandera de EE.UU."
        />
      </div>
    </header>
  );
};
