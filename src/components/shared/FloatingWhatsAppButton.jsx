import { SocialIcon } from "react-social-icons";

export const FloatingWhatsAppButton = () => {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <SocialIcon
        url="https://web.whatsapp.com/"
        href="https://wa.me/541156438774"
        target="_blank"
      />
    </div>
  );
};

