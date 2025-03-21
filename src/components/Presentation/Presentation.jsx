import React from "react";
import {useTranslation} from "react-i18next"
import { FaAsterisk } from "react-icons/fa";
import { CardPresentation } from "./CardPresentation";

import marcos from "../../assets/img/marcos.jpg";
import lorenzo from "../../assets/img/lorenzo.png";
import quinto from "../../assets/img/quinto.jpg";

export const Presentation = () => {
   const [t, i18n] = useTranslation("global")
  return (
    <section className="relative px-6 sm:px-24 lg:px-40 py-12 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-12">
      {t("presentation.title")}
      </h1>

      <FaAsterisk className=" hidden md:block  absolute left-0 top-1/2 transform -translate-y-1/2 text-[#051d40] text-4xl mx-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <CardPresentation
          img={marcos}
          title={t("presentation.title_1")}
          subtitle={t("presentation.subtitle_1")}
          description={t("presentation.description_1")}
        />
        <CardPresentation
          img={quinto}
          title={t("presentation.title_2")}
          subtitle={t("presentation.subtitle_2")}
          description={t("presentation.description_2")}
        />
        <CardPresentation
          img={lorenzo}
          title={t("presentation.title_3")}
          subtitle={t("presentation.subtitle_3")}
          description={t("presentation.description_3")}
        />
      </div>

      <FaAsterisk className="hidden md:block absolute right-0 top-[30%] text-[#051d40] text-4xl mx-5" />
    </section>
  );
};
