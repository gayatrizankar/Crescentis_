import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Founders({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const founders = [
    {
      name: "Aryan Fulsunge",
      role: "Founder & CEO",
      desc: "Visionary leader driving Crescentis with bold strategies, innovation, and relentless passion to build thriving ventures.",
      img: "/founder1.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Tushar Durwe",
      role: "Co-Founder",
      desc: "Creative mind behind our brand storytelling and marketing strategies, shaping a strong global presence.",
      img: "/founder3.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Anirudth Singh",
      role: "Co-Founder",
      desc: "Technical and strategic innovator, building scalable solutions and leading our ventures to success.",
      img: "/founder2.jpg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  // Infinite auto-flip every 3.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, 3500); // increased flip interval
    return () => clearTimeout(timer);
  }, [currentIndex, founders.length]);

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    show: { opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, rotateY: 90, scale: 0.8, transition: { duration: 0.8, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="absolute top-10 left-10 px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition z-30"
        whileHover={{ scale: 1.1 }}
      >
        Back
      </motion.button>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-12 relative z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Meet Our Founders
      </motion.h2>

      {/* Flipping Card */}
      <div className="relative w-[350px] md:w-[450px] h-[550px] perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-0 bg-yellow-400/10 border border-yellow-400 rounded-2xl shadow-xl p-6 backdrop-blur-lg flex flex-col items-center justify-start hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-full h-72 overflow-hidden rounded-xl mb-6">
              <img
                src={founders[currentIndex].img}
                alt={founders[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.h3
              className="text-3xl font-bold text-yellow-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            >
              {founders[currentIndex].name}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-300 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            >
              {founders[currentIndex].role}
            </motion.p>
            <motion.p
              className="text-gray-200 mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            >
              {founders[currentIndex].desc}
            </motion.p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href={founders[currentIndex].linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-yellow-400 w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href={founders[currentIndex].twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="text-yellow-400 w-6 h-6 hover:scale-110 transition" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow */}
        <motion.button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length)}
          className="absolute top-1/2 -translate-y-1/2 bg-yellow-400/20 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20"
          style={{ left: "-90px" }} // increased distance
          whileHover={{ scale: 1.4, backgroundColor: "rgba(255,255,0,0.4)", rotate: -15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % founders.length)}
          className="absolute top-1/2 -translate-y-1/2 bg-yellow-400/20 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20"
          style={{ right: "-90px" }} // increased distance
          whileHover={{ scale: 1.4, backgroundColor: "rgba(255,255,0,0.4)", rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaArrowRight className="w-8 h-8 md:w-10 md:h-10" />
        </motion.button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 flex gap-2">
        {founders.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-yellow-400" : "bg-gray-600"}`}
            animate={{ scale: currentIndex === idx ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </motion.section>
  );
}
