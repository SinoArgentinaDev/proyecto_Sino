import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../shared/Header/Header";
import { Footer } from "../shared/Footer/Footer";
import { FloatingWhatsAppButton } from "../shared/FloatingWhatsAppButton";

export const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full max-w-full xl:max-w-[1440px] mx-auto overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
};

