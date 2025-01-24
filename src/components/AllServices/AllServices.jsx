import { SiShopify } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { HelpCard } from "../HelpCard/HelpCard";

export const AllServices = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-[rgba(166,166,166,0.35)]">
        <h2 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-10 mb-12">
        ¿QUÉ TENEMOS PARA OFRECERTE?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HelpCard
          icon={<SiShopify />}
          name="Análisis, Negociación y Compras con Proveedores en China"
          text="Sino Argentina Group es tu aliado estratégico en la búsqueda y selección de proveedores confiables en China., ajustándonos a tu presupuesto. Negociamos en tu nombre las mejores condiciones comerciales, garantizando la calidad de los productos y la entrega puntual."
          bgColor="bg-[#56aeff]"
        />

        <HelpCard
          icon={<GiCargoShip />}
          name="Logística Internacional"
          text="Ofrecemos un servicio de logística integral, abarcando desde la consolidación de carga y el despacho aduanero en origen, hasta la entrega final en destino. Nuestro conocimiento del mercado y nuestra amplia red de agentes nos permiten optimizar las rutas y reducir los costos de transporte, asegurando la integridad de tus mercancías en todo momento."
          bgColor="bg-[#3181b7]"
        />

        <HelpCard
          icon={<FaMapMarkedAlt />}
          name="Apertura de Mercados en China"
          text="¿Deseas expandir tu negocio al mercado chino? Sino Argentina Group te acompaña en cada paso del proceso. Realizamos estudios de mercado personalizados, identificamos potenciales clientes y distribuidores, y te brindamos el asesoramiento necesario para desarrollar una estrategia comercial exitosa."
          bgColor="bg-[#145da0]"
        />

        <HelpCard
          icon={<IoAirplane />}
          name="Viajes de Negocios a China"
          text="Organizamos viajes de negocios a la medida de tus necesidades, facilitando la agenda de reuniones con proveedores, clientes y potenciales socios comerciales. Nuestro equipo te acompañará durante toda tu estancia, brindándote asistencia en la traducción, la logística y la gestión de visas."
          bgColor="bg-[#0c4793]"
        />
      </div>
    </div>
  );
};
