import React from 'react';
import { useTranslation } from 'react-i18next';

export const HelpCard = ({ icon, name, text, bgColor = 'bg-white', showButton = false }) => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={`max-w-sm p-6 mb-12 ${bgColor} border border-gray-200 rounded-lg shadow-sm dark:border-gray-700`}>
      <p className="w-7 h-7 text-3xl text-white dark:text-white mb-4">{icon}</p>
      <a href="/servicios">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-white dark:text-white drop-shadow-[2px_1px_0px_black]">
          {name}
        </h5>
      </a>
      <p className="mb-4 font-normal text-white dark:text-gray-400 md:text-lg lg:text-xl" >
        {text}
      </p>
      {showButton && (
        <button className="self-center md:self-start w-3/4 md:w-2/5 bg-[#051d40] text-white font-medium px-6 py-2 rounded-md border-2 border-blue-600 hover:bg-blue-600 transition mt-8">
          <a href="/nosotros">{t("aboutUs.button_text")}</a>
        </button>
      )}
    </div>
  );
};

