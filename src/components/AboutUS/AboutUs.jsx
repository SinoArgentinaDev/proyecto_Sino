import sobreNosotros from '../../assets/videos/SobreNosotros.mp4';

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 p-14">
      {/* Video Section */}
      <div className="relative w-full md:w-[40vw] h-[50vh] md:h-[90vh]">
        <video
          className="w-full h-full object-cover shadow-lg ml-4"
          src={sobreNosotros}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-4xl font-bold text-center md:text-left tracking-widest text-[#051d40] mt-3">
          SOBRE NOSOTROS
        </h1>
        <p className="text-justify leading-relaxed text-xl">
          Somos Sino Argentina Group, una empresa de comercio exterior con oficinas en la ciudad de Guangzhou, China, y en Buenos Aires, Argentina. Nuestra misión es asistir a las pymes argentinas para integrarse en el mercado Chino.
        </p>
        <p className="text-justify leading-relaxed text-xl">
          Ofrecemos un servicio integral de comercio exterior con el mercado Chino. Nos encargamos de facilitar todas las gestiones de importación y exportación tanto en China como en Argentina, con profesionales bilingües radicados en China, con excelente dominio del idioma chino y español.
        </p>
        <p className="text-justify leading-relaxed text-xl">
          En el caso de que estés planificando abrir el mercado Chino para tus exportaciones, nos encargamos de efectuar la investigación de mercado, identificando posibles clientes; facilitamos la negociación de venta y constatamos la veracidad y seriedad del importador chino. Una vez cerrada la venta, también nos encargamos de toda la logística desde cualquier localidad en Argentina hasta el destino final en China.
        </p>
        <button className="self-center md:self-start w-2/5 bg-[#051d40] text-white font-medium px-6 py-2 rounded-md border-2 border-blue-600 hover:bg-blue-600 transition mt-8">
          Saber más
        </button>
      </div>
    </div>
  );
};
