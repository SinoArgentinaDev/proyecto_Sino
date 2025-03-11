import React from "react";
import { CardPresentation } from "./CardPresentation";

import marcos from "../../assets/img/marcos.jpg";
import lorenzo from "../../assets/img/lorenzo.png";


export const Presentation = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center tracking-wide text-gray-800 mt-6 mb-12">
        PRESENTANDO A NUESTRO EQUIPO
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <CardPresentation
          img={marcos}
          title="Marcos Puelles Lanús"
          subtitle="Socio fundador | Gerente general"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros sit amet nibh ornare tempus. In ut mauris scelerisque, sodales leo vehicula."
        />
        <CardPresentation
          img={marcos}
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
    </section>
  );
};
