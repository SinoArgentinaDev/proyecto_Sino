import { useTranslation } from "react-i18next";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdContentPasteSearch } from "react-icons/md";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MapCard } from "../MapCard/MapCard";

export const Buiness = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className=" py-8">
            {/* Título */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-14 px-10">
                {t("RoadMap.title_4")}
            </h1>

            {/* Contenedor de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 lg:px-16">
                {/* Tarjeta 1 */}
                <MapCard
                    titulo={t("Business.title_1")}
                    text={t("Business.text_1")}
                    Icon={<RiCalendarScheduleLine />}
                    //url={info}
                    bgColor="bg-[#051d40]"
                />

                {/* Tarjeta 2 */}
                <MapCard
                    titulo={t("Business.title_2")}
                    text={t("Business.text_2")}
                    Icon={<IoIosPeople />}
                    //url={proveedor}
                    bgColor="bg-[#002f66]"
                />

                {/* Tarjeta 3 */}
                <MapCard
                    titulo={t("Business.title_3")}
                    text={t("Business.text_3")}
                    Icon={<LiaHandsHelpingSolid />}
                    //url={fabrica}
                    bgColor="bg-[#0c4793]"
                />

                {/* Tarjeta 4 */}
                <MapCard
                    titulo={t("Business.title_4")}
                    text={t("Business.text_4")}
                    Icon={<MdContentPasteSearch />}
                    //url={negociacion}
                    bgColor="bg-[#3181b7]"
                />
            </div>
        </div>
    );
};
