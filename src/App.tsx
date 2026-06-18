import { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";
import CookieConsent from "./components/CookieConsent";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Reviews from "./sections/Reviews";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Contacts from "./sections/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState<"main" | "privacy-policy">("main");

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail === "privacy-policy") {
        setPage("privacy-policy");
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("navigate" as any, handler as any);
    return () => window.removeEventListener("navigate" as any, handler as any);
  }, []);

  if (page === "privacy-policy") {
    return (
      <HelmetProvider>
        <Helmet>
          <html lang="ru" />
          <title>Политика конфиденциальности — Классика</title>
          <meta name="description" content="Политика конфиденциальности барбершопа Классика в Краснодаре. Информация об обработке персональных данных, использовании cookie и защите информации." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <PrivacyPolicy onBack={() => setPage("main")} />
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="ru" />
        <title>Классика — Барбершоп в Краснодаре</title>
        <meta
          name="description"
          content="Мужские стрижки, моделирование бороды, уход за лицом и премиальный сервис в барбершопе Классика. Скидка 15% на первое посещение."
        />
        <meta
          name="keywords"
          content="барбершоп Краснодар, мужская стрижка Краснодар, барбершоп Классика, стрижка бороды Краснодар, бритьё головы, детская стрижка, моделирование бороды, премиальный барбершоп, лучший барбершоп Краснодар, недорогая стрижка Краснодар"
        />
        <meta
          property="og:title"
          content="Классика — Барбершоп в Краснодаре"
        />
        <meta
          property="og:description"
          content="Мужские стрижки, моделирование бороды, уход за лицом и премиальный сервис в барбершопе Классика. Скидка 15% на первое посещение."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
      </Helmet>

      <div className="min-h-screen bg-light">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Process />
          <Reviews />
          <CTA />
          <Contacts />
        </main>
        <Footer />
        <ScrollToTop />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <CookieConsent />
      </div>
    </HelmetProvider>
  );
}

export default App;
