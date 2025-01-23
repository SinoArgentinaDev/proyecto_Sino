import React from 'react';

export const HorizontalCard = ({ url, title, texts }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-20 p-16 bg-white dark:bg-gray-800">
      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center tracking-widest text-[#051d40] mt-3">
          {title}
        </h1>

        <div className="space-y-4 text-justify leading-relaxed text-xl">
          {/* Renderizado dinámico de textos */}
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative w-full md:w-[42vw] h-[40vh] md:h-[70vh]"
        style={{
          clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
        }}
      >
        <img
          className="w-full h-full object-cover shadow-lg"
          src={url}
          alt={title}
        />
      </div>
    </div>
  );
};
