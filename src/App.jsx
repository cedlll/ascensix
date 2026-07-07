import { MotionConfig } from "framer-motion";
import WipBanner from "./components/WipBanner";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBand from "./components/TrustBand";
import Positioning from "./components/Positioning";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div>
        <div className="fixed inset-x-0 top-0 z-40">
          <WipBanner />
          <Nav />
        </div>
        <main>
          <Hero />
          <TrustBand />
          <Positioning />
          <Services />
          <CaseStudies />
          <Testimonials />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
