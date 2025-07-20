import { AboutUs } from "../components/AboutUS/AboutUs";
import { Banner } from "../components/Banner/Banner";
import { Contacto } from "../components/Contacto/Contacto";
import { Portada } from "../components/Portada/Portada";
import { Servicios } from "../components/Servicios/Servicios";
import { Footer } from "../components/shared/Footer/Footer";
import { Header } from "../components/shared/Header/Header";
import videoUs from "../assets/videos/homeImg.mp4";
import { SocialIcon } from "react-social-icons";
import { ServiceHome } from "../components/ServicesHome/ServiceHome";

export const Home = () => {
  return (
    <div className="w-full max-w-full xl:max-w-[1440px] mx-auto">
      <Header />
      {/* Botón flotante de WhatsApp con ajustes responsivos */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <SocialIcon
          url="https://web.whatsapp.com/"
          href="https://wa.me/541156438774"
          target="_blank"
          className="w-12 h-12 md:w-14 md:h-14"
        />
      </div>
      <Portada />
      <AboutUs videoSrc={videoUs} showButton={true} />
      <ServiceHome />
      {/*<Banner />*/}
      {/*<Servicios />*/}
      <Contacto />
      <Footer />
    </div>
  );
};

