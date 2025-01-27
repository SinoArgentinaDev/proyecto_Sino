import { useState, useEffect } from "react";
import { Navbar } from "../../Navbar/Navbar";
import sino_logo from "../../../assets/img/sinoLogo.png";
import flagUsa from "../../../assets/img/flag-usa.svg";
import flagSpain from "../../../assets/img/flagspain.svg";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("global");

  // Estado para manejar la apertura del menú desplegable
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cargar el idioma desde localStorage al montar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Predeterminado: inglés
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  // Función para cambiar el idioma y guardar en localStorage
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Guardar en localStorage
    setIsMenuOpen(false); // Cerrar el menú después de seleccionar
  };

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md md:px-12">
      {/* Logo a la izquierda */}
      <img
        className="w-24 md:w-28"
        src={sino_logo}
        alt="Logo de la empresa"
      />

      {/* Contenedor para agrupar Navbar y menú de idiomas */}
      <div className="flex items-center space-x-6 md:space-x-20 relative">
        <Navbar />

        {/* Menú desplegable para seleccionar idioma */}
        <div className="relative">
          {/* Botón para abrir/cerrar el menú */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Idioma
          </button>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
              <button
                onClick={() => changeLanguage("es")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
              >
                <img className="w-6 h-6 mr-2" src={flagSpain} alt="Bandera de España" />
                Español
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
              >
                <img className="w-6 h-6 mr-2" src={flagUsa} alt="Bandera de EE.UU." />
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
