import { IoMdGlobe } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { FaUserTie, FaSearchDollar } from "react-icons/fa";
import { CardWhy } from './CardWhy';

export const WhyUs = () => {
  return (
    <div className="bg-[rgba(166,166,166,0.15)] py-10">
      <h1 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mb-12">
        POR QUÉ ELEGIRNOS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-4 max-w-6xl mx-auto">
        <CardWhy icon={<IoMdGlobe/>} text="En Sino Argentina Group, contamos con oficinas estratégicamente ubicadas en Guangzhou, China, y Buenos Aires, Argentina. Esta dualidad nos permite brindar un servicio integral que comprende cada detalle de las gestiones de importación y exportación, asegurando una conexión fluida y efectiva entre ambos mercados." />
        <CardWhy icon={<IoLanguageOutline/>} text="Nuestro equipo de profesionales bilingües, radicados en China, posee un dominio avanzado de los idiomas chino y español, lo que garantiza una comunicación clara y sin barreras culturales o idiomáticas. Esto nos posiciona como un socio confiable para tus negocios internacionales."/>
        <CardWhy icon={<FaUserTie />} text="Entendemos los desafíos de encontrar proveedores confiables en China y garantizar compradores serios para tus exportaciones. Nos especializamos en evitar fraudes y estafas, proporcionando soluciones personalizadas que aseguran el éxito de tus operaciones comerciales." />
        <CardWhy icon={<FaSearchDollar />} text="Desde la búsqueda de proveedores y clientes hasta la logística completa, nos encargamos de cada paso del proceso. Ofrecemos alternativas adaptadas a tus necesidades, negociamos las mejores condiciones y supervisamos cada detalle para que tus productos lleguen a su destino sin inconvenientes."/>
      </div>
    </div>
  );
};
