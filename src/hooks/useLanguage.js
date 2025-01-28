import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambiar idioma con i18next
    localStorage.setItem("language", lang); // Guardar en localStorage
  };

  // Obtener el idioma actual
  const currentLanguage = i18n.language;

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
