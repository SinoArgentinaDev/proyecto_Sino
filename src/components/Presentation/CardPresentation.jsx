import React from "react";

export const CardPresentation = ({ img, title, subtitle, description }) => {
  return (
    <div className="max-w-md  rounded-2xl shadow-lg flex flex-col items-center">
      {/* Contenedor de la imagen con tamaño fijo */}
      <div className="w-full h-[380px] overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
        />
      </div>

      {/* Contenedor del texto */}
      <div className="w-full bg-gray-100 rounded-2xl px-6 py-4 -mt-3">
        <div className="font-extrabold text-2xl text-[#051d40] mb-1 tracking-wide">{title}</div>
        <p className="text-lg font-bold text-[#051d40] mb-2 tracking-wide">{subtitle}</p>
        <p className="text-gray-700 text-base tracking-wide">{description}</p>
      </div>
    </div>
  );
};
