import React from "react";

export const CardPresentation = ({ img, title, subtitle, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg flex flex-col items-center">
      {/* Imagen redonda */}
      <img
        className="w-full h-full object-cover rounded-t-lg"
        src={img}
        alt={title}
      />

      {/* Contenedor del texto redondeado */}
      <div className="w-full bg-gray-100 rounded-2xl px-6 py-4 -mt-3">
        <div className="font-extrabold text-xl text-[#051d40] mb-1">{title}</div>
        <p className="text-base font-bold text-[#051d40] mb-2">{subtitle}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
