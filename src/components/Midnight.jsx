import React, { useState } from "react";
import { motion } from "framer-motion";
import Founders from "./Founders";

export default function Midnight({ onBack }) { // accept onBack prop
  const [showFounders, setShowFounders] = useState(false);

  // If Next clicked → show Founders
  if (showFounders) {
    return <Founders onBack={() => setShowFounders(false)} />;
  }

  // Midnight content with improved descriptions
  const points = [
    {
      title: "Entrepreneurship-Driven DNA",
      desc: "We don’t just serve brands — we build them from the ground up, fostering creativity, innovation, and bold thinking to help each venture thrive in a competitive digital landscape.",
      style: { top: "10%", left: "10%" },
    },
    {
      title: "Cross-Functional Expertise",
      desc: "Our team combines expertise across software development, strategic planning, creative content, and e-commerce to deliver well-rounded, impactful solutions.",
      style: { top: "15%", right: "10%" },
    },
    {
      title: "Scalable Thinking",
      desc: "Every project we take on is designed to grow sustainably, from launching new brands to scaling existing ventures efficiently and effectively.",
      style: { bottom: "5%", left: "15%" },
    },
    {
      title: "Moonshot Ambition",
      desc: "Like Crescentis itself, we encourage ventures that challenge the status quo, aiming for transformative results rather than incremental changes.",
      style: { bottom: "15%", right: "15%" },
    },
  ];

  return (
    <motion.section
      className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
        <img src="/moony.png" alt="Moon" className="w-full h-full object-contain rounded-full animate-rotate" />
        <h1 className="absolute text-4xl md:text-6xl font-bold text-yellow-400 text-center animate-text-glow">CRESCENTIS</h1>
      </div>

      {points.map((point, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-yellow-400/20 border-l-4 border-yellow-400 p-6 rounded-3xl shadow-xl max-w-xs backdrop-blur-sm hover:scale-105 transition-transform"
          style={point.style}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + idx * 0.3 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-yellow-400">{point.title}</h3>
          <p className="text-white text-sm md:text-base mt-2 leading-relaxed">{point.desc}</p>
        </motion.div>
      ))}

      {/* Next button mounts Founders */}
      <motion.button
        onClick={() => setShowFounders(true)}
        className="absolute bottom-12 right-12 px-10 py-4 bg-yellow-400 text-black font-bold rounded-3xl shadow-lg hover:bg-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
      >
        Next
      </motion.button>

      {/* Back button navigates to About page */}
      <motion.button
        onClick={onBack} // call the onBack prop
        className="absolute bottom-12 left-12 px-10 py-4 bg-yellow-400 text-black font-bold rounded-3xl shadow-lg hover:bg-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
      >
        Back
      </motion.button>

      <style>{`
        @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-rotate { animation: rotate 60s linear infinite; }
        @keyframes textGlow { 0%,100%{text-shadow:0 0 10px rgba(255,215,0,0.8),0 0 25px rgba(255,215,0,0.5);}50%{text-shadow:0 0 25px rgba(255,230,50,1),0 0 50px rgba(255,230,50,0.7);} }
        .animate-text-glow { animation: textGlow 2.5s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
}
