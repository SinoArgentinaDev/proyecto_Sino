import React from 'react';

export const Title = ({title, text}) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between bg-[#002f66]/[0.09] w-full h-auto sm:h-24 px-6 sm:px-14 py-4 shadow-[inset_0_4px_8px_0_rgba(0,0,0,0.15)]"
    >
      {/* Título */}
      <h1 className="text-3xl sm:text-3xl font-extrabold tracking-wide text-[#051d40]">
        {title}
      </h1>

      {/* Ruta de navegación */}
      <p className="text-sm sm:text-base tracking-wide text-[#545454] mt-2 sm:mt-0">
        {text}
      </p>
    </div>
  );
};
