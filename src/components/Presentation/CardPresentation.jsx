import React from "react";

export const CardPresentation = ({ img, title, subtitle, description1, description2, description3, description4 }) => {
  return (
    <div className="max-w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Imagen */}
      <div className="w-full h-60 md:w-1/3 md:h-auto flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
        />
      </div>
      {/* Texto */}
      <div className="flex-1 bg-gray-100 px-6 py-4 flex flex-col justify-center">
        <div className="font-extrabold text-xl text-[#051d40] mb-1">{title}</div>
        <p className="text-base font-bold text-[#051d40] mb-2">{subtitle}</p>
        <p className="text-gray-700 text-base mb-1">{description1}</p>
        <p className="text-gray-700 text-base mb-1">{description2}</p>
        <p className="text-gray-700 text-base mb-1">{description3}</p>
        <p className="text-gray-700 text-base mb-1">{description4}</p>
      </div>
    </div>
  );
};
