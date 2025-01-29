import React from 'react';
import {useTranslation} from "react-i18next"

export const AboutUs = ({ 
  videoSrc, 
  showButton = false
}) => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 p-14">
      {/* Video Section */}
      <div className="relative w-full md:w-[40vw] h-[50vh] md:h-[80vh]">
        <video
          className="w-full h-full object-cover shadow-lg ml-4"
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center md:text-left tracking-widest text-[#051d40] mt-3">
        {t("aboutUs.title")}
        </h1>
        <p className="text-justify leading-relaxed text-xl">{t("aboutUs.text_1")}</p>
        <p className="text-justify leading-relaxed text-xl">{t("aboutUs.text_2")}</p>
        <p className="text-justify leading-relaxed text-xl">{t("aboutUs.text_3")}</p>
        
        {/* Condicional para mostrar el botón */}
        {showButton && (
          <button className="self-center md:self-start md:w-2/5 w-3/4 bg-[#051d40] text-white font-medium px-6 py-2 rounded-md border-2 border-blue-600 hover:bg-blue-600 transition mt-8">
            <a href="/nosotros">{t("aboutUs.button_text")}</a> 
          </button>
        )}
      </div>
    </div>
  );
};


