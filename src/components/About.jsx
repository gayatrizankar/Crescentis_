"use client";
import { motion } from "framer-motion";

export default function About() {
  // Text content on the left
  const leftText = [
    "WE ARE CRESCO DIGITAL:",
    "At Cresco Digital, we specialize in helping brands scale with creativity, strategy, and technology. Our approach blends artistry with data-driven solutions, ensuring measurable growth and a lasting digital impact."
  ];

  const companyPoints = [
    "Founded in 2015 with a mission to empower brands digitally",
    "Expertise in creativity, strategy, and technology",
    "Proven track record of measurable growth for clients",
    "Passionate team driven by innovation and results",
    "Global mindset with local understanding"
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col md:flex-row px-8 pt-32 font-sans">

      {/* Left Column - All Text */}
      <div className="relative z-10 md:w-1/2 text-left">
        {leftText.map((text, idx) => {
          const isHeading = idx === 0;

          if (isHeading) {
            const words = text.split(" ");
            return (
              <p
                key={idx}
                className="mb-6  font-bold text-4xl md:text-5xl"
                style={{
                  fontFamily: "serif bold",
                  background: "linear-gradient(90deg, #76670fff, #FFFACD, #FFFFFF, #5a430aff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                {words.map((word, wIdx) => (
                  <motion.span
                    key={wIdx}
                    variants={wordVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: wIdx * 0.15 + idx * 0.3, duration: 0.6, ease: "easeOut" }}
                    style={{ display: "inline-block", marginRight: "6px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            );
          }

          return (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.5, duration: 0.8, ease: "easeOut" }}
              className="mb-4 text-white text-lg md:text-xl"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {text}
            </motion.p>
          );
        })}

        {/* Company Points */}
        <ul className="space-y-4 mt-6">
          {companyPoints.map((point, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={pointVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl md:text-2xl text-white  flex items-center gap-3 font-dm-sans"
            >
              {/* Galaxy emoji bullets */}
              <span className="text-yellow-400 text-2xl">
                {["✅", "✅", "✅", "✅", "✅"][i % 5]}
              </span>
              {point}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Column - Moon */}
      <motion.div
        className="absolute top-[-520px] left-[280px] right-0 w-[1000px] h-[1000px] overflow-visible z-0"
        initial={{ x: 0, y: 0, scale: 1 }}
        whileInView={{ x: 400, y: 400, scale: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.img
          src="/moony.png"
          alt="Half Moon"
          className="w-full h-full object-contain relative z-10 sepia-[0.3] brightness-110 saturate-150"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        />

        {/* Glow layers */}
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/30 blur-[200px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/15 blur-[350px]"></div>
        <div className="absolute inset-0 rounded-full aspect-square bg-yellow-400/10 blur-[500px]"></div>
      </motion.div>

    </section>
  );
}
