import { AiOutlineDoubleRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Sidebar } from "../Siderbar/Sidebar";
import { Link } from "react-router-dom";
import portadav from "../../assets/img/serviciosImg.png";

export const Video = () => {
  const [t] = useTranslation("global");

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de fondo completamente visible */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={portadav}
        alt="Portada"
      />

      {/* Contenedor para el texto y el botón */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-[5vw] font-bold tracking-wide mt-16 text-center drop-shadow-[2px_2px_0px_black] max-w-[80%] overflow-hidden">
          {t("cover.main-title")}
        </h1>

        <Link to="/servicios" className="mt-6">
          <button className="bg-[#051d40] text-white font-bold tracking-widest px-6 py-2 rounded-full border-4 border-white hover:bg-blue-600 transition">
            {t("cover.button_text")}
          </button>
        </Link>

        <div className="mt-4">
          <AiOutlineDoubleRight className="text-[4vw] transform rotate-90" />
        </div>
      </div>

      {/* Sidebar posicionado a la izquierda sin desbordes */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Sidebar />
      </div>
    </div>
  );
};

