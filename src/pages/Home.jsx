import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialIcon } from "react-social-icons";
import { AboutUs } from "../components/AboutUS/AboutUs";
import { Banner } from "../components/Banner/Banner";
import { Contacto } from "../components/Contacto/Contacto";
import { Portada } from "../components/Portada/Portada";
import { Servicios } from "../components/Servicios/Servicios";
import { Footer } from "../components/shared/Footer/Footer";
import { Header } from "../components/shared/Header/Header";
import videoUs from "../assets/videos/homeImg.mp4";
import videoCelular from "../assets/videos/homeMobile.mp4";
import { ServiceHome } from "../components/ServicesHome/ServiceHome";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="w-full max-w-full xl:max-w-[1440px] mx-auto">
      <div>
        <Header />
      </div>
      {/* Botón flotante de WhatsApp con ajustes responsivos */}
      <div
        className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <SocialIcon
          url="https://web.whatsapp.com/"
          href="https://wa.me/541156438774"
          target="_blank"
          className="w-12 h-12 md:w-14 md:h-14"
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Portada />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <AboutUs
          videoSrcDesktop={videoUs}
          showButton={true}
          videoSrcMobile={videoCelular}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ServiceHome />
      </div>
      {/*<Banner />*/}
      {/*<Servicios />*/}
      <div data-aos="fade-up" data-aos-delay="100">
        <Contacto />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Footer />
      </div>
    </div>
  );
};

