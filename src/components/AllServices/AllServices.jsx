import { SiShopify } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { HelpCard } from "../HelpCard/HelpCard";

export const AllServices = () => {
  
  const [t, i18n] = useTranslation("global")
  
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-[rgba(166,166,166,0.35)]">
        <h2 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-10 mb-12 drop-shadow-[2px_1px_0px_black]">
        {t("allServices.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HelpCard
          icon={<SiShopify />}
          name={t("allServices.card_title_1")}
          text={t("allServices.card_text_1")}
          bgColor="bg-[#56aeff]"
        />

        <HelpCard
          icon={<GiCargoShip />}
          name={t("allServices.card_title_2")}
          text={t("allServices.card_text_2")}
          bgColor="bg-[#3181b7]"
        />

        <HelpCard
          icon={<FaMapMarkedAlt />}
          name={t("allServices.card_title_3")}
          text={t("allServices.card_text_3")}
          bgColor="bg-[#145da0]"
        />

        <HelpCard
          icon={<IoAirplane />}
          name={t("allServices.card_title_4")}
          text={t("allServices.card_text_4")}
          bgColor="bg-[#0c4793]"
        />
      </div>
    </div>
  );
};
