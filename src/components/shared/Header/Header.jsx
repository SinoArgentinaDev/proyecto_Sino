import { useState } from "react";
import { Navbar } from "../../Navbar/Navbar";
import sino_logo from "../../../assets/img/logow.png";
import flagUsa from "../../../assets/img/flag-usa.svg";
import flagSpain from "../../../assets/img/flagspain.svg";
import useLanguage from "../../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";


export const Header = () => {
  const { currentLanguage, changeLanguage } = useLanguage(); // Usa el hook
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el menú desplegable
  const [t, i18n] = useTranslation("global");

  // Función para cambiar el idioma y cerrar el menú
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md md:px-12">

      {/* Navbar y menú de idiomas */}
      <div className="flex items-center space-x-6 md:space-x-20 relative">
        <Navbar />

        {/* Menú desplegable para seleccionar idioma */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            <BsTranslate className="w-5 h-5" />
            {t("button-lan.button_text")}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-50">
              <button
                onClick={() => handleLanguageChange("es")}
                className={`flex items-center px-4 py-2 hover:bg-gray-100 w-full ${currentLanguage === "es" ? "font-bold" : ""
                  }`}
              >
                <img className="w-6 h-6 mr-2" src={flagSpain} alt="Español" />
                {t("button-lan.spanish")}
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex items-center px-4 py-2 hover:bg-gray-100 w-full ${currentLanguage === "en" ? "font-bold" : ""
                  }`}
              >
                <img className="w-6 h-6 mr-2" src={flagUsa} alt="English" />
                {t("button-lan.english")}
              </button>
            </div>
          )}
        </div>
      </div>
       {/* Logo */}
       <img
          className="w-28"
          src={sino_logo}
          alt="Logo de la empresa"
        />
    </header>
  );
};
