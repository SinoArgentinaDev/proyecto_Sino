import React from 'react';

export const HorizontalCard = ({ url, title, texts }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 p-8 md:p-12 lg:p-16 bg-white dark:bg-gray-800">
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 md:space-y-6 text-gray-800">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-center tracking-widest text-[#051d40] mt-3 drop-shadow-[2px_1px_0px_black]">
          {title}
        </h1>

        <div className="space-y-3 md:space-y-4 text-justify leading-relaxed text-lg lg:text-2xl">
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative w-full md:w-[45%] h-[35vh] md:h-[60vh] lg:h-[70vh]"
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
