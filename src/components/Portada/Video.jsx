import { AiOutlineDoubleRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Sidebar } from "../Siderbar/Sidebar";
import { Link } from "react-router-dom";
import portadav from "../../assets/videos/portada.mp4";

export const Video = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="relative w-full h-[100vh] bg-black">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        src={portadav}
        autoPlay
        loop
        muted
      />

      {/* Contenedor para el texto y el botón */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white ">
        {/* Etiqueta H1 centrada */}
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[75px] font-bold tracking-wide mt-24 text-center text-white drop-shadow-[2px_2px_0px_black] max-w-[80%] sm:max-w-[70%] md:max-w-[80%]">
          {t("cover.main-title")}
        </h1>

        {/* Botón con más separación */}
        <button className="bg-[#051d40] text-white font-bold tracking-widest px-6 py-2 rounded-full border-4 border-white hover:bg-blue-600 transition mt-8">
          <Link to="/servicios">{t("cover.button_text")}</Link>
        </button>

        {/* Ícono rotado */}
        <div className="mt-6">
          <AiOutlineDoubleRight className="text-[70px] transform rotate-90 " />
        </div>
      </div>

      {/* Sidebar centrado a la izquierda */}
      <div className="absolute inset-y-0 -left-2 -ml-6 flex items-center">
        <Sidebar />
      </div>

      {/* Social Icon de WhatsApp en la esquina inferior derecha */}
    </div>
  );
};
