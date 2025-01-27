import { MapCard } from "../MapCard/MapCard";
import { LuUserSearch, LuPackageSearch, LuSearchCheck } from "react-icons/lu";
import { TiInfo } from "react-icons/ti";
import { MdOutlineFactory } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { PiShippingContainerDuotone } from "react-icons/pi";
import { useTranslation } from "react-i18next";

import info from '../../assets/img/info.png'
import img from "../../assets/img/card2.png";
import fabrica from '../../assets/img/fabrica.png'
import proveedor from "../../assets/img/proveedor.png";
import negociacion from "../../assets/img/negociacion.png"
import seguir from '../../assets/img/seguir.png'
import calidad from '../../assets/img/calidad.png'


export const RoadMap = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className=" py-8">
            {/* Título */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-14 px-10">
                {t("RoadMap.title")}
            </h1>

            {/* Contenedor de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
                {/* Tarjeta 1 */}
                <MapCard
                    titulo={t("mapCard.title_1")}
                    text={t("mapCard.text_1")}
                    Icon={<TiInfo />}
                    url={info}
                    bgColor="bg-[#051d40]"
                />

                {/* Tarjeta 2 */}
                <MapCard
                    titulo={t("mapCard.title_2")}
                    text={t("mapCard.text_2")}
                    Icon={<LuUserSearch />}
                    url={proveedor}
                    bgColor="bg-[#002f66]"
                />

                {/* Tarjeta 3 */}
                <MapCard
                    titulo={t("mapCard.title_3")}
                    text={t("mapCard.text_3")}
                    Icon={<MdOutlineFactory />}
                    url={fabrica}
                    bgColor="bg-[#0c4793]"
                />

                {/* Tarjeta 4 */}
                <MapCard
                    titulo={t("mapCard.title_4")}
                    text={t("mapCard.text_4")}
                    Icon={<FaRegHandshake />}
                    url={negociacion}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 5 */}
                <MapCard
                    titulo={t("mapCard.title_5")}
                    text={t("mapCard.text_5")}
                    Icon={<LuSearchCheck />}
                    url={seguir}
                    bgColor="bg-[#7b98b3]"
                />

                {/* Tarjeta 6 */}
                <MapCard
                    titulo={t("mapCard.title_6")}
                    text={t("mapCard.text_6")}
                    Icon={<LuPackageSearch />}
                    url={calidad}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 7 */}
                <MapCard
                    titulo={t("mapCard.title_7")}
                    text={t("mapCard.text_7")}
                    Icon={<PiShippingContainerDuotone />}
                    url={img}
                    bgColor="bg-[#0c4793]"
                />
            </div>
        </div>
    );
};
