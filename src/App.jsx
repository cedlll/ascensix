import { MotionConfig } from "framer-motion";
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
        <Nav />
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
