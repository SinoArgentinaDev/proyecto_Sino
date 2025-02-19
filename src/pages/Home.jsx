import { AboutUs } from "../components/AboutUS/AboutUs";
import { Banner } from "../components/Banner/Banner";
import { Contacto } from "../components/Contacto/Contacto";
import { Portada } from "../components/Portada/Portada";
import { Servicios } from "../components/Servicios/Servicios";
import { Footer } from "../components/shared/Footer/Footer";
import { Header } from "../components/shared/Header/Header";
import videoUs from "../assets/videos/us.mp4";
import { SocialIcon } from "react-social-icons";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="fixed bottom-4 right-4 z-50">
        <SocialIcon
          url="https://web.whatsapp.com/"
          href="https://wa.me/541156438774"
          target="_blank"
        />
      </div>
      <Portada />
      <AboutUs videoSrc={videoUs} showButton={true} />
      <Banner />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
};
