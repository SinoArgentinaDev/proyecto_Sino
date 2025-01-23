import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export const Navbar = ({ texto1, texto2, texto3, texto4 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Menú de navegación para pantallas grandes */}
      <ul className="hidden sm:flex items-center space-x-6 text-lg text-[#545454] tracking-wide">
        <li>
          <a href="/" className="hover:text-gray-700 transition-colors">
            {texto1}
          </a>
        </li>
        <li>
          <a href="/nosotros" className="hover:text-gray-700 transition-colors">
            {texto2}
          </a>
        </li>
        <li>
          <a href="/servicios" className="hover:text-gray-700 transition-colors">
            {texto3}
          </a>
        </li>
        <li>
          <a href="/contacto" className="hover:text-gray-700 transition-colors">
            {texto4}
          </a>
        </li>
      </ul>

      {/* Icono del menú hamburguesa para pantallas pequeñas */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          <TiThMenu />
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">
          {/* Botón para cerrar el menú */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-gray-700 focus:outline-none"
          >
            <IoClose />
          </button>

          <ul className="flex flex-col items-center space-y-6 text-xl text-gray-700">
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-all"
                onClick={toggleMenu}
              >
                {texto1}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-all"
                onClick={toggleMenu}
              >
                {texto2}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-all"
                onClick={toggleMenu}
              >
                {texto3}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-all"
                onClick={toggleMenu}
              >
                {texto4}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
