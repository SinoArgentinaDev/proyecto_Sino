import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { SocialIcon } from "react-social-icons";
import { Header } from "../components/shared/Header/Header";
import { Title } from "../components/shared/Title/Title";
import { Footer } from "../components/shared/Footer/Footer";
import { Titulo } from "../components/Titulo/Titulo";
import { AboutUsTwo } from "../components/AboutUsTwo/AboutUsTwo";
import { Contacto } from "../components/Contacto/Contacto";
import servicios from "../assets/videos/servi.mp4";
import { AllServices } from "../components/AllServices/AllServices";

export const Servicios = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="w-full max-w-full xl:max-w-[1440px] mx-auto">
      <div data-aos="fade-down" data-aos-delay="100">
        <Header />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <Title
          title={t("banner_service.title")}
          text={t("banner_service.route")}
        />
      </div>
      <div data-aos="fade-left" data-aos-delay="100">
        <Titulo
          title={t("service_page.title")}
          title2={t("service_page.title_2")}
        />
      </div>
      {/* SocialIcon fijado en la pantalla */}
      <div
        className="fixed bottom-4 right-4 z-50"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <SocialIcon
          url="https://web.whatsapp.com/"
          href="https://wa.me/541156438774"
          target="_blank"
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutUsTwo
          videoSrc={servicios}
          title={t("services_cardTwo.title")}
          paragraph1={t("services_cardTwo.text_1")}
          paragraph2={t("services_cardTwo.text_2")}
          paragraph3={t("services_cardTwo.text_3")}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AllServices />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Contacto />
      </div>
      <div data-aos="fade-down" data-aos-delay="100">
        <Footer />
      </div>
    </div>
  );
};
