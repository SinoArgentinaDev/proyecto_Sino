import React from 'react';

export const InvertCard = ({ url, title, texts }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 p-8 md:p-12 lg:p-16 bg-white dark:bg-gray-800 ">
      {/* Image Section */}
      <div
        className="relative w-full h-[35vh] md:w-[550px] md:h-[340px] lg:h-[60vh]"
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

      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-center tracking-widest text-[#051d40] lg:my-14 md:my-6">
          {title}
        </h1>

        <div className="space-y-4 text-justify leading-relaxed text-lg lg:text-3xl lg:my-14 md:my-10">
          {/* Renderizado dinámico de textos */}
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
