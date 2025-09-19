"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function HeroIntro() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Navbar */}
     <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-6 pt-[40px]">
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-6xl md:text-8xl font-bold tracking-wide relative"
  style={{
    background: "linear-gradient(90deg, #bca41aff, #e0d027ff, #d1cc9dff, #FFD700, #FFB800)", // more golden gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  CRESCENTIS
  <motion.span
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
    className="block w-32 h-1 mx-auto mt-3 rounded-full origin-left"
    style={{
      background: "linear-gradient(to right, #FFD700, #FFEA00, #FFFACD, #FFD700, #FFB800)",
    }}
  />
</motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 text-base md:text-lg text-gray-300 max-w-lg"
        >
          We help brands shine brighter through strategy, design, and technology.  
          Turning visions into stories and stories into impact.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-8 px-10 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </motion.button>
      </div>

      {/* Rising Moon with Glow */}
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
        className="absolute bottom-[-520px] left-[280px] -translate-x-1/2 w-[1000px] h-[1000px] overflow-visible z-0"
      >
        <img
          src="/moony.png"
          alt="Moon"
          className="w-full h-full object-contain animate-spin-slow sepia-[0.3] brightness-110 saturate-150 relative z-10"
        />
        {/* Glow layers */}
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/20 blur-[150px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/15 blur-[250px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/10 blur-[400px]"></div>
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 80s linear infinite;
        }
      `}</style>
    </section>
  );
}
