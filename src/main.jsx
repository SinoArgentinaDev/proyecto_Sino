import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
import App from "./App.jsx";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

// Obtener idioma desde localStorage, si no está, usar "es"
const savedLanguage = localStorage.getItem("language") || "es";

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, // Idioma inicial
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
