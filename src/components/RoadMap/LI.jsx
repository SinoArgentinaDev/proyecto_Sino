import { useTranslation } from "react-i18next";
import { LuPackageCheck, LuContainer } from "react-icons/lu";
import { HiOutlineDocumentCurrencyYen, HiOutlineDocumentCurrencyDollar  } from "react-icons/hi2";
import { FaShip, FaSearchLocation  } from "react-icons/fa";
import { TbPackageImport } from "react-icons/tb";
import { MapCard } from "../MapCard/MapCard";

export const LI = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div id="road-logistica" className=" py-8">
            {/* Título */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-14 px-10">
                {t("RoadMap.title_2")}
            </h1>

            {/* Contenedor de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 lg:px-16">
                {/* Tarjeta 1 */}
                <MapCard
                    titulo={t("LI.title_1")}
                    text={t("LI.text_1")}
                    Icon={<LuPackageCheck />}
                    //url={info}
                    bgColor="bg-[#051d40]"
                />

                {/* Tarjeta 2 */}
                <MapCard
                    titulo={t("LI.title_2")}
                    text={t("LI.text_2")}
                    Icon={<LuContainer />}
                    //url={proveedor}
                    bgColor="bg-[#002f66]"
                />

                {/* Tarjeta 3 */}
                <MapCard
                    titulo={t("LI.title_3")}
                    text={t("LI.text_3")}
                    Icon={<HiOutlineDocumentCurrencyYen />}
                    //url={fabrica}
                    bgColor="bg-[#0c4793]"
                />

                {/* Tarjeta 4 */}
                <MapCard
                    titulo={t("LI.title_4")}
                    text={t("LI.text_4")}
                    Icon={<FaShip />}
                    //url={negociacion}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 5 */}
                <MapCard
                    titulo={t("LI.title_5")}
                    text={t("LI.text_5")}
                    Icon={<FaSearchLocation  />}
                    //url={seguir}
                    bgColor="bg-[#7b98b3]"
                />

                {/* Tarjeta 6 */}
                <MapCard
                    titulo={t("LI.title_6")}
                    text={t("LI.text_6")}
                    Icon={<HiOutlineDocumentCurrencyDollar />}
                    //url={calidad}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 7 */}
                <MapCard
                    titulo={t("LI.title_7")}
                    text={t("LI.text_7")}
                    Icon={<TbPackageImport />}
                    //url={img}
                    bgColor="bg-[#0c4793]"
                />
            </div>
        </div>
    );
};
