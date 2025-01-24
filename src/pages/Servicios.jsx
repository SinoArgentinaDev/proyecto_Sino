import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Header } from '../components/shared/Header/Header'
import { Title } from '../components/shared/Title/Title'
import { Footer } from '../components/shared/Footer/Footer'
import { Titulo } from '../components/Titulo/Titulo'
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo'
import { Contacto } from '../components/Contacto/Contacto'
import servicios from '../assets/videos/SobreNosotros.mp4'
import { AllServices } from '../components/AllServices/AllServices';

export const Servicios = () => {
    return (
        <>
            <Header />
            <Title title='SERVICIOS' text='Home / Servicios' />
            <Titulo title="Sino Argentina Group: Asistencia Integral en Comercio" title2="Exterior: Simplificamos el Camino al Éxito" />
            {/* SocialIcon fijado en la pantalla */}
            <div className="fixed bottom-4 right-4 z-50">
                <SocialIcon url="https://web.whatsapp.com/" />
            </div>
            <AboutUsTwo videoSrc={servicios} title="Confianza y Éxito en tus operaciones con el Mercado Chino sin barreras ni riesgos" paragraph1="Conocemos la complejidad de encontrar el proveedor adecuado en China para poder importar sin caer en fraudes o estafas; así como la incertidumbre de saber si el comprador de tus productos en China es serio y cumplirá con las condiciones de compra para tus exportaciones hacia China." paragraph2="Estas dificultades que se presentan tanto en la importación desde China como en la venta de productos argentinos hacia allí, requieren de nuestra gestión para llevar a cabo con éxito las negociaciones y gestiones de compra/venta. " paragraph3="Estas dificultades que se presentan tanto en la importación desde China como en la venta de productos argentinos hacia allí, requieren de nuestra gestión para llevar a cabo con éxito las negociaciones y gestiones de compra/venta. " />
            <AllServices />
            <Contacto />
            <Footer />
        </>
    )
}
