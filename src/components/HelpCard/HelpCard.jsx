import React from 'react';
import { useTranslation } from 'react-i18next';

export const HelpCard = ({id,  icon, name, text, bgColor = 'bg-white', onToggle }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={`max-w-sm p-6 mb-6 ${bgColor} border border-gray-200 rounded-lg shadow-sm`}>
      <p className="w-7 h-7 text-3xl text-white mb-4">{icon}</p>

      {/* Título con evento onClick */}
      <h5 
        className="mb-3 text-2xl font-semibold tracking-tight text-white cursor-pointer hover:underline"
        onClick={onToggle} // Activa o desactiva el RoadMap
      >
        {name}
      </h5>

      <p className="mb-4 font-normal text-white md:text-lg lg:text-xl">
        {text}
      </p>
    </div>
  );
};
