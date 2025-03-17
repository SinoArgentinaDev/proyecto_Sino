import React, { useState, useEffect, useRef } from "react";
import { SiShopify } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { HelpCard } from "../HelpCard/HelpCard";
import { OpenMarket } from "../RoadMap/OpenMarket";
import { ANCPC } from "../RoadMap/ANCPC";
import { LI } from "../RoadMap/LI";
import { Buiness } from "../RoadMap/Business";

export const AllServices = () => {
  const [t] = useTranslation("global");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const componentRef = useRef(null);

  useEffect(() => {
    if (selectedComponent && componentRef.current) {
      setTimeout(() => {
        componentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedComponent]);

  const handleCardClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "shopify":
        return <ANCPC />;
      case "ship":
        return <LI />;
      case "map":
        return <OpenMarket />;
      case "plane":
        return <Buiness />;
      default:
        return null;
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-[rgba(166,166,166,0.35)]">
      <h2 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-10 mb-12">
        {t("allServices.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <HelpCard
          icon={<SiShopify />}
          name={t("allServices.card_title_1")}
          text={t("allServices.card_text_1")}
          bgColor="bg-[#56aeff]"
          onToggle={() => handleCardClick("shopify")}
        />

        <HelpCard
          icon={<GiCargoShip />}
          name={t("allServices.card_title_2")}
          text={t("allServices.card_text_2")}
          bgColor="bg-[#3181b7]"
          onToggle={() => handleCardClick("ship")}
        />

        <HelpCard
          icon={<FaMapMarkedAlt />}
          name={t("allServices.card_title_3")}
          text={t("allServices.card_text_3")}
          bgColor="bg-[#145da0]"
          onToggle={() => handleCardClick("map")}
        />

        <HelpCard
          icon={<IoAirplane />}
          name={t("allServices.card_title_4")}
          text={t("allServices.card_text_4")}
          bgColor="bg-[#0c4793]"
          onToggle={() => handleCardClick("plane")}
        />
      </div>

      {selectedComponent && (
        <div ref={componentRef} className="flex justify-center mt-10 transition-all duration-300">
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            {renderComponent()}
          </div>
        </div>
      )}
    </div>
  );
};
