import { useTranslation } from "react-i18next";
import { LuUserSearch,} from "react-icons/lu";
import { AiOutlineFileSearch, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiHistogram } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { MapCard } from "../MapCard/MapCard";

export const OpenMarket= () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className=" py-8">
            {/* Título */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-14 px-10">
                {t("RoadMap.title_3")}
            </h1>

            {/* Contenedor de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 lg:px-16">
                {/* Tarjeta 1 */}
                <MapCard
                    titulo={t("OpenMarket.title_1")}
                    text={t("OpenMarket.text_1")}
                    Icon={<AiOutlineFileSearch />}
                    //url={info}
                    bgColor="bg-[#051d40]"
                />

                {/* Tarjeta 2 */}
                <MapCard
                    titulo={t("OpenMarket.title_2")}
                    text={t("OpenMarket.text_2")}
                    Icon={<LuUserSearch />}
                    //url={proveedor}
                    bgColor="bg-[#002f66]"
                />

                {/* Tarjeta 3 */}
                <MapCard
                    titulo={t("OpenMarket.title_3")}
                    text={t("OpenMarket.text_3")}
                    Icon={<GiHistogram />}
                    //url={fabrica}
                    bgColor="bg-[#0c4793]"
                />

                {/* Tarjeta 4 */}
                <MapCard
                    titulo={t("OpenMarket.title_4")}
                    text={t("OpenMarket.text_4")}
                    Icon={<FaPeopleArrows />}
                    //url={negociacion}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 5 */}
                <MapCard
                    titulo={t("OpenMarket.title_5")}
                    text={t("OpenMarket.text_5")}
                    Icon={<AiOutlineFundProjectionScreen />}
                    //url={seguir}
                    bgColor="bg-[#7b98b3]"
                />

                {/* Tarjeta 6 */}
                <MapCard
                    titulo={t("OpenMarket.title_6")}
                    text={t("OpenMarket.text_6")}
                    Icon={<MdSupportAgent />}
                    //url={calidad}
                    bgColor="bg-[#3181b7]"
                />
            </div>
        </div>
    );
};
