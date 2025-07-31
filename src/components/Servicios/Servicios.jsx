import React from 'react';
import {useTranslation} from "react-i18next"
import { Card } from '../Card/Card';



export const Servicios = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <div className="container mx-auto p-6" data-aos="fade-up" data-aos-delay="350">
            {/* Encabezado centrado */}
            <h1 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-6 mb-8">
               {t("services_lading.title")}
            </h1>

            {/* Contenedor de las tarjetas */}
            <div className="flex flex-wrap justify-center gap-24">
                <Card
                    src={servicio2}
                    title={t("services_lading.card_title_1")}
                    text={t("services_lading.card_text_1")}
                    alt="Logistica"
                />
                <Card
                    src={servicio3}
                    title={t("services_lading.card_title_2")}
                    text={t("services_lading.card_text_2")}
                    alt="Transporte"
                />
                <Card
                    src={servicio1}
                    title={t("services_lading.card_title_3")}
                    text={t("services_lading.card_text_3")}
                    alt="Aduana"
                />
            </div>
        </div>
    );
};
