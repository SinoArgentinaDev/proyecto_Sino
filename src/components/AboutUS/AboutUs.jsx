import React from "react";
import { useTranslation } from "react-i18next";

export const AboutUs = ({ videoSrc, showButton = false }) => {
  const [t] = useTranslation("global");

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 lg:p-14">
      <div className="relative w-full h-[60vh] md:w-[600px] md:h-[590px] lg:h-[80vh]">
        <video
          className="w-full h-full object-cover shadow-lg ml-0 md:ml-4"
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-gray-800 ">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-extrabold text-center md:text-left tracking-widest text-[#051d40] mt-3">
          {t("aboutUs.title")}
        </h1>
        <p className="text-justify leading-relaxed text-lg md:text-xl lg:text-3xl ">
          {t("aboutUs.text_1")}
        </p>
        <p className="text-justify leading-relaxed text-lg md:text-xl lg:text-3xl">
          {t("aboutUs.text_2")}
        </p>
        <p className="text-justify leading-relaxed text-lg md:text-xl lg:text-3xl">
          {t("aboutUs.text_3")}
        </p>

        {showButton && (

          <a href="/nosotros">
            <button className="self-center md:self-start w-3/4 md:w-2/5 bg-[#051d40] text-white font-medium px-6 py-2 rounded-md border-2 border-blue-600 hover:bg-blue-600 transition mt-6">
              {t("aboutUs.button_text")}</button></a>
        )}
      </div>
    </div>
  );
};
