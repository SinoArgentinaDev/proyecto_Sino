import { Navbar } from '../../Navbar/Navbar';
import sino_logo from '../../../assets/img/sino_logo.png';
import flagUsa from '../../../assets/img/flag-usa.svg';

export const Header = () => {
  return (
    <header className=' flex items-center justify-between mb-8 px-10'>
      {/* Logo a la izquierda */}
      <img className='w-[200px]' src={sino_logo} alt="logo" />

      {/* Contenedor para agrupar Navbar y flagUsa a la derecha */}
      <div className='flex items-center space-x-8'>
        <Navbar texto1="Home" texto2='Sobre nosotros' texto3='Servicios' texto4='Contacto' />
        <img className='w-[40px]' src={flagUsa} alt="flagUsa" />
      </div>
    </header>
  );
};
