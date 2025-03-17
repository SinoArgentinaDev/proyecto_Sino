import { SocialIcon } from 'react-social-icons';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/shared/Header/Header';
import { Title } from '../components/shared/Title/Title';
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo';
import { About } from '../components/About/About';
import { Titulo } from '../components/Titulo/Titulo';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/shared/Footer/Footer';
import nosotrosUno from '../assets/videos/dos.mp4';
import nosotros from '../assets/videos/ntres.mp4';
import mision from '../assets/img/homeImg.png';
import vision from '../assets/img/vision2.jpg';
import { HorizontalCard } from '../components/HorizontalCard/HorizontalCard';
import { InvertCard } from '../components/HorizontalCard/InvertCard';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { Presentation } from '../components/Presentation/Presentation';


export const Nosotros = () => {
  const [t] = useTranslation("global");

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <Title title={t("banner_aboutUs.title")} text={t("banner_aboutUs.route")} />
      <Titulo title={t("page_About.title")} title2={t("page_About.title_2")} />

      {/* Botón flotante de WhatsApp responsivo */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <SocialIcon
          url="https://web.whatsapp.com/"
          href="https://wa.me/541156438774"
          target="_blank"
        />
      </div>

      <HorizontalCard
        url={mision}
        title={t("HorizontalCard.title")}
        texts={t("HorizontalCard.text", { returnObjects: true })}
      />
      <InvertCard
        url={vision}
        title={t("InvertCard.title")}
        texts={t("InvertCard.text", { returnObjects: true })}
      />

      <AboutUsTwo
        videoSrc={nosotrosUno}
        title={t("about_card_two.title")}
        paragraph1={t("about_card_two.text_1")}
        paragraph2={t("about_card_two.text_2")}
        paragraph3={t("about_card_two.text_3")}
      />
      <About
        videoSrc={nosotros}
        paragraph1={t("about_card.text_1")}
        paragraph2={t("about_card.text_2")}
        paragraph3={t("about_card.text_3")}
      />

      {/*<Presentation />*/}
      <WhyUs />
      <Contacto />
      <Footer />
    </div>
  );
};
