import React from 'react'
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';
import { Header } from '../components/shared/Header/Header'
import { Title } from '../components/shared/Title/Title'
import { Footer } from '../components/shared/Footer/Footer'
import { Titulo } from '../components/Titulo/Titulo'
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo'
import { Contacto } from '../components/Contacto/Contacto'
import servicios from '../assets/videos/servicios.mp4'
import { AllServices } from '../components/AllServices/AllServices';
import { RoadMap } from '../components/RoadMap/RoadMap';

export const Servicios = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <>
            <Header />
            <Title title={t("banner_service.title")} text={t("banner_service.route")} />
            <Titulo title={t("service_page.title")} title2={t("service_page.title_2")} />
            {/* SocialIcon fijado en la pantalla */}
            <div className="fixed bottom-4 right-4 z-50">
                <SocialIcon url="https://web.whatsapp.com/" />
            </div>
            <AboutUsTwo videoSrc={servicios} 
            title={t("services_cardTwo.title")} 
            paragraph1={t("services_cardTwo.text_1")} 
            paragraph2={t("services_cardTwo.text_2")}  
            paragraph3={t("services_cardTwo.text_3")}  />
            <AllServices />
            <RoadMap />
            <Contacto />
            <Footer />
        </>
    )
}
