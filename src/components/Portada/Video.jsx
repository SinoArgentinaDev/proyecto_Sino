import portadav from '../../assets/videos/portada.mp4';
import { AiOutlineDoubleRight } from "react-icons/ai";

export const Video = () => {
  return (
    <div className="relative w-full h-[90vh] bg-black">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        src={portadav}
        autoPlay
        loop
        muted
        controls
      />

      {/* Contenedor para el texto y el botón */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        {/* Etiqueta H1 centrada */}
        <h1 className="text-[70px] font-bold tracking-wide mt-24 text-center">
          WHAT IS LOREM IPSUM?
        </h1>

        {/* Botón con más separación */}
        <button className="bg-[#051d40] text-white font-bold tracking-widest px-6 py-2 rounded-full border-4 border-white hover:bg-blue-600 transition mt-8">
          SERVICIOS
        </button>

        {/* Ícono rotado */}
        <div className='mt-6'>
        <AiOutlineDoubleRight className="text-[70px] transform rotate-90 " />
        </div>
        
      </div>
    </div>
  );
};
