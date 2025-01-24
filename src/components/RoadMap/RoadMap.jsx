import { MapCard } from "../MapCard/MapCard";
import { LuUserSearch, LuPackageSearch, LuSearchCheck } from "react-icons/lu";
import { TiInfo } from "react-icons/ti";
import { MdOutlineFactory } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { PiShippingContainerDuotone } from "react-icons/pi";

import info from '../../assets/img/info.png'
import img from "../../assets/img/card2.png";
import fabrica from '../../assets/img/fabrica.png'
import proveedor from "../../assets/img/proveedor.png";
import negociacion from "../../assets/img/negociacion.png"
import seguir from '../../assets/img/seguir.png'
import calidad from '../../assets/img/calidad.png'

export const RoadMap = () => {
    return (
        <div className=" py-8">
            {/* Título */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-14 px-10">
                PASO A PASO EN EL ANÁLISIS, NEGOCIACIÓN Y COMPRAS CON PROVEEDORES EN CHINA
            </h1>

            {/* Contenedor de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
                {/* Tarjeta 1 */}
                <MapCard
                    titulo="1. Recopilación de información:"
                    text="Se realiza una reunión en donde el cliente proporciona detalles sobre el producto a buscar (especificaciones técnicas, cantidad, calidad, etc.). Luego se definen los requisitos de certificación y cumplimiento normativo. Finalmente, se establece un presupuesto estimado."
                    Icon={<TiInfo />}
                    url={info}
                    bgColor="bg-[#051d40]"
                />

                {/* Tarjeta 2 */}
                <MapCard
                    titulo="2. Búsqueda y selección de proveedores:"
                    text="Se realiza una búsqueda exhaustiva en bases de datos especializadas y plataformas de comercio electrónico. Se contactan y evalúan múltiples proveedores en función de su reputación, capacidad de producción y precios.  Se solicita información detallada sobre los productos, muestras y catálogos. "
                    Icon={<LuUserSearch />}
                    url={proveedor}
                    bgColor="bg-[#002f66]"
                />

                {/* Tarjeta 3 */}
                <MapCard
                    titulo="3. Visita a fábricas:"
                    text="Si es necesario, se organizan visitas a las fábricas para verificar las condiciones de producción y la calidad de los productos."
                    Icon={<MdOutlineFactory />}
                    url={fabrica}
                    bgColor="bg-[#0c4793]"
                />

                {/* Tarjeta 4 */}
                <MapCard
                    titulo="4. Negociación de términos comerciales:"
                    text="Se negocian los precios, los plazos de entrega, las condiciones de pago, las garantías y los términos del contrato. Se redacta y revisa el contrato en conjunto con el cliente."
                    Icon={<FaRegHandshake />}
                    url={negociacion}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 5 */}
                <MapCard
                    titulo="5. Seguimiento de la producción:"
                    text="Se realiza un seguimiento constante del proceso de producción, asegurando que se cumplan los estándares de calidad y los plazos acordados."
                    Icon={<LuSearchCheck />}
                    url={seguir}
                    bgColor="bg-[#7b98b3]"
                />

                {/* Tarjeta 6 */}
                <MapCard
                    titulo="6. Inspección de calidad:"
                    text="Se contrata a una empresa de inspección independiente para verificar la calidad de los productos antes del envío."
                    Icon={<LuPackageSearch />}
                    url={calidad}
                    bgColor="bg-[#3181b7]"
                />

                {/* Tarjeta 7 */}
                <MapCard
                    titulo="7. Organización del envío: "
                    text="Se coordinan los detalles del envío, incluyendo el embalaje, el transporte y el despacho aduanero en origen. Luego, se efectúa el envío internacional efectuando el seguimiento de toda la Logística Internacional."
                    Icon={<PiShippingContainerDuotone />}
                    url={img}
                    bgColor="bg-[#0c4793]"
                />
            </div>
        </div>
    );
};
