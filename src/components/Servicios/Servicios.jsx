import React from 'react';
import { Card } from '../Card/Card';
import servicio1 from '../../assets/img/card1.png';
import servicio2 from '../../assets/img/card2.png';
import servicio3 from '../../assets/img/card3.png';


export const Servicios = () => {
    return (
        <div className="container mx-auto p-6">
            {/* Encabezado centrado */}
            <h1 className="text-4xl font-bold text-center tracking-widest text-[#051d40] mt-6 mb-8">
                SERVICIOS
            </h1>

            {/* Contenedor de las tarjetas */}
            <div className="flex flex-wrap justify-center gap-20">
                <Card
                    src={servicio2}
                    title="Logística Internacional"
                    text="Ofrecemos un servicio de logística integral, abarcando desde la consolidación de carga y el despacho aduanero en origen, hasta la entrega final en destino."
                    alt="Logistica"
                />
                <Card
                    src={servicio3}
                    title="Análisis, Negociación y Compras con Proveedores en China"
                    text="Nuestro equipo de expertos realiza un análisis exhaustivo del mercado, identificando a los fabricantes que mejor se ajustan a tus necesidades."
                    alt="Transporte"
                />
                <Card
                    src={servicio1}
                    title="Apertura de Mercados en China"
                    text="Realizamos estudios de mercado personalizados, identificamos potenciales clientes y distribuidores, y te brindamos el asesoramiento necesario para desarrollar una estrategia comercial exitosa."
                    alt="Aduana"
                />
            </div>
        </div>
    );
};
