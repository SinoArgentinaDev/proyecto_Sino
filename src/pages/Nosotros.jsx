import { useTranslation } from 'react-i18next';
import { Title } from '../components/shared/Title/Title';
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo';
import { About } from '../components/About/About';
import { Titulo } from '../components/Titulo/Titulo';
import { Contacto } from '../components/Contacto/Contacto';
import nosotrosUno from '../assets/videos/dos.mp4';
import nosotros from '../assets/videos/ntres.mp4';
import mision from '../assets/img/homeImg.png';
import vision from '../assets/img/sino2.jpg';
import { HorizontalCard } from '../components/HorizontalCard/HorizontalCard';
import { InvertCard } from '../components/HorizontalCard/InvertCard';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { Presentation } from '../components/Presentation/Presentation';
import { Layout } from '../components/layout/Layout';

export const Nosotros = () => {
  const [t] = useTranslation("global");

  return (
    <Layout>
      <div data-aos="fade-right" data-aos-delay="100"><Title title={t("banner_aboutUs.title")} text={t("banner_aboutUs.route")} /></div>
      <div data-aos="fade-left" data-aos-delay="100"><Titulo title={t("page_About.title")} title2={t("page_About.title_2")} /></div>
      <div data-aos="fade-up" data-aos-delay="100">
        <HorizontalCard
          url={mision}
          title={t("HorizontalCard.title")}
          texts={t("HorizontalCard.text", { returnObjects: true })}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <InvertCard
          url={vision}
          title={t("InvertCard.title")}
          texts={t("InvertCard.text", { returnObjects: true })}
        />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <AboutUsTwo
          videoSrc={nosotrosUno}
          title={t("about_card_two.title")}
          paragraph1={t("about_card_two.text_1")}
          paragraph2={t("about_card_two.text_2")}
          paragraph3={t("about_card_two.text_3")}
        />
      </div>
      <div data-aos="fade-left" data-aos-delay="100">
        <About
          videoSrc={nosotros}
          paragraph1={t("about_card.text_1")}
          paragraph2={t("about_card.text_2")}
          paragraph3={t("about_card.text_3")}
        />
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="100"><Presentation /></div>
      <div data-aos="fade-up" data-aos-delay="100"><WhyUs /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Contacto /></div>
    </Layout>
  );
};
