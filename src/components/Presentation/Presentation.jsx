import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { CardPresentation } from "./CardPresentation";

import marcos from "../../assets/img/marcos.jpg";
import lorenzo from "../../assets/img/lorenzo.png";
import quinto from "../../assets/img/quinto.jpg";

export const Presentation = () => {
  return (
    <section className="relative px-6 sm:px-24 lg:px-40 py-12 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-12">
        PRESENTANDO A NUESTRO EQUIPO
      </h1>

      <FaAsterisk className=" hidden md:block  absolute left-0 top-1/2 transform -translate-y-1/2 text-[#051d40] text-4xl mx-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <CardPresentation
          img={marcos}
          title="Marcos Puelles Lanús"
          subtitle="Socio fundador | Gerente general"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros sit amet nibh ornare tempus. In ut mauris scelerisque, sodales leo vehicula."
        />
        <CardPresentation
          img={quinto}
          title="Quinto Scuticchio"
          subtitle="Socio fundador | Consultor de negocios"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros sit amet nibh ornare tempus. In ut mauris scelerisque, sodales leo vehicula."
        />
        <CardPresentation
          img={lorenzo}
          title="Fernando Lorenzo"
          subtitle="Socio fundador | Dpto. Comercial"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros sit amet nibh ornare tempus. In ut mauris scelerisque, sodales leo vehicula."
        />
      </div>

      <FaAsterisk className="hidden md:block absolute right-0 top-[30%] text-[#051d40] text-4xl mx-5" />
    </section>
  );
};
