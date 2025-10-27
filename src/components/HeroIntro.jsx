"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function HeroIntro() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-6 pt-[20px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="leading-tight font-serif font-bold tracking-tight text-[4rem] lg:text-[7rem] opacity-90"
        >
          {/* CRESCENTIS */}
          <motion.span
            animate={{
              filter: [
                "drop-shadow(0 0 6px rgba(255,215,0,0.6))",
                "drop-shadow(0 0 12px rgba(255,215,0,0.9))",
                "drop-shadow(0 0 6px rgba(255,215,0,0.6))",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              background:
                "linear-gradient(90deg, #bca41a, #e0d027, #fff8b0, #FFD700, #FFB800)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "block",
            }}
          >
            CRESCENTIS
          </motion.span>

          {/* MARKETING */}
          <motion.span
            animate={{
              filter: [
                "drop-shadow(0 0 5px rgba(255,215,0,0.6))",
                "drop-shadow(0 0 10px rgba(255,215,0,0.8))",
                "drop-shadow(0 0 5px rgba(255,215,0,0.6))",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              background:
                "linear-gradient(90deg, #bca41a, #e0d027, #fff8b0, #FFD700, #FFB800)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "block",
              fontSize: "80px",
              paddingTop:"0"
            }}
          >
            MARKETING
          </motion.span>

          {/* CO. */}
          <motion.span
            animate={{
              filter: [
                "drop-shadow(0 0 4px rgba(255,215,0,0.6))",
                "drop-shadow(0 0 8px rgba(255,215,0,0.8))",
                "drop-shadow(0 0 4px rgba(255,215,0,0.6))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              background:
                "linear-gradient(90deg, #bca41a, #e0d027, #fff8b0, #FFD700, #FFB800)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "block",
              fontSize: "4rem",
              letterSpacing: "0.1em",
            }}
          >
            CO.
          </motion.span>

          {/* Underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="block w-32 h-1 mx-auto mt-3 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(to right, #FFD700, #FFFACD, #FFD700)",
            }}
          />
        </motion.h1>

        {/* Button */}
        <Link to="/login">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="mt-8 px-10 py-3 bg-yellow-400 text-black text-xl rounded-xl shadow-lg hover:bg-yellow-300 transition font-bold font-serif"
          >
            Book a Strategy Call
          </motion.button>
        </Link>
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
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/20 blur-[150px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/15 blur-[250px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/10 blur-[400px]"></div>
      </motion.div>

      {/* Rotation Animation */}
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
