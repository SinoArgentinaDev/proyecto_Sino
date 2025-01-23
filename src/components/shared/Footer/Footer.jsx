import React from 'react';
import { Links } from './Links';
import sino_logo from '../../../assets/img/sinoLogo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#051d40] text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <img src={sino_logo} alt="logo" className="w-24 mb-4" />
          <p className="text-base text-white font-semibold text-center tracking-wide 
               md:text-left">
            Conectando Pymes Argentinas con el Mercado Chino
          </p>
        </div>

        {/* Links - Explora */}
        <Links
          titulo="Explora"
          links={['Home', 'Sobre nosotros', 'Servicios', 'Contacto']}
        />

        {/* Links - Visítanos */}
        <Links
          titulo="Visítanos"
          links={['San Martin 523', 'Ciudad de Buenos Aires', 'Argentina']}
        />

        {/* Links - Legal */}
        <Links
          titulo="Legal"
          links={['info@sinoargentina.com', '1800 000 123']}
        />
      </div>

      {/* Footer inferior */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-sm text-white">
          <span>©</span> 2025 Sino Argentino Group. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
