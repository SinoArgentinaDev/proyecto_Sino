import { IoMdGlobe } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { FaUserTie, FaSearchDollar } from "react-icons/fa";
import { CardWhy } from './CardWhy';
import { useTranslation } from "react-i18next";

export const WhyUs = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="bg-[rgba(166,166,166,0.15)] py-10">
      <h1 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mb-12">
        {t("whyUs.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 px-8 max-w-8xl mx-auto">
        <CardWhy icon={<IoMdGlobe/>} text={t("whyUs.text_card_1")} />
        <CardWhy icon={<IoLanguageOutline/>} text={t("whyUs.text_card_2")} />
        <CardWhy icon={<FaUserTie />} text={t("whyUs.text_card_3")}  />
        <CardWhy icon={<FaSearchDollar />} text={t("whyUs.text_card_4")} />
      </div>
    </div>
  );
};
