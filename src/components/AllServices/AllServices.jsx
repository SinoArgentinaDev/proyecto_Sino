import React, { useState } from "react";
import { SiShopify } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { HelpCard } from "../HelpCard/HelpCard";
import { RoadMap } from "../RoadMap/RoadMap";

export const AllServices = () => {
  const [t] = useTranslation("global");
  const [showRoadMap, setShowRoadMap] = useState(false);

  const handleCardClick = (id) => {
    setShowRoadMap(true);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Pequeña demora para asegurar que el RoadMap se renderiza primero
  };

  return (
  
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-[rgba(166,166,166,0.35)]">
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-10 mb-12">
        {t("allServices.title")}
      </h2>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <HelpCard
          icon={<SiShopify />}
          name={t("allServices.card_title_1")}
          text={t("allServices.card_text_1")}
          bgColor="bg-[#56aeff]"
          onToggle={() => handleCardClick("roadmap-shopify")}
        />

        <HelpCard
          icon={<GiCargoShip />}
          name={t("allServices.card_title_2")}
          text={t("allServices.card_text_2")}
          bgColor="bg-[#3181b7]"
          onToggle={() => handleCardClick("roadmap-ship")}
        />

        <HelpCard
          icon={<FaMapMarkedAlt />}
          name={t("allServices.card_title_3")}
          text={t("allServices.card_text_3")}
          bgColor="bg-[#145da0]"
          onToggle={() => handleCardClick("roadmap-map")}
        />

        <HelpCard
          icon={<IoAirplane />}
          name={t("allServices.card_title_4")}
          text={t("allServices.card_text_4")}
          bgColor="bg-[#0c4793]"
          onToggle={() => handleCardClick("roadmap-plane")}
        />
      </div>

      {/* Contenedor de RoadMap */}
      {showRoadMap && (
        <div className="flex justify-center mt-10 transition-all duration-300">
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <RoadMap />
          </div>
        </div>
      )}
    </div>
  );
};
