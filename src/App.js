import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import Founders from "./components/Founders";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </Router>
  );
}

export default App;
