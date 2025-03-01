import React from 'react';
import { Links } from './Links';
import sino_logo from '../../../assets/img/SIno.png';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <footer className="bg-[#051d40] text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <img src={sino_logo} alt="logo" className="w-28 mb-2" />
          <p className="text-base text-white font-semibold text-center tracking-wide 
               md:text-left">
            {t("footer.title")}
          </p>
        </div>

        {/* Links - Explora */}
        <Links
          titulo={t("footer.section_title")}
          links={t("footer.section_links", { returnObjects: true })}
        />

        {/* Links - Visítanos  aas*/}
        <Links
          titulo={t("footer.section_title2")}
          links={t("footer.section_links2", { returnObjects: true })}
        />

        {/* Links - Legal */}
        <Links
          titulo={t("footer.section_title3")}
          links={t("footer.section_links3", { returnObjects: true })}
        />
      </div>

      {/* Footer inferior */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-sm text-white">
          <span>©</span> {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};
