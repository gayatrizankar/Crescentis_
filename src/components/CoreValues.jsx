"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CoreValues = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: "Growth Over Comfort",
      description:
        "We believe real magic happens outside the comfort zone. Whether it's testing bold strategies, adopting new technologies, or challenging the status quo — we stay uncomfortable on purpose. Because growth isn't just what we do; it's who we are.",
      icon: "🌱",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Creative with a Cause",
      description:
        "For us, creativity isn't just about looking good — it's about doing good work. Every design, word, and idea has a goal: to move people, drive action, and make brands unforgettable. We blend aesthetics with intent, storytelling with results.",
      icon: "🎨",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Radical Transparency",
      description:
        "No fluff. No fog. Just clear, honest communication — internally and with our clients. We don't believe in hiding behind jargon or inflated numbers. What you see is what you get — because trust is built on truth.",
      icon: "🔍",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Performance-Obsessed",
      description:
        "Vanity metrics don't excite us — real impact does. We track, analyze, optimize, and repeat. Every campaign is built to perform and backed by data. We're relentless about results because our clients deserve nothing less.",
      icon: "📊",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Clients = Partners",
      description:
        "We don't 'service' clients — we collaborate with partners. From kickoff to launch and beyond, we work shoulder to shoulder with you. We listen, adapt, and co-create with a shared mission and mutual respect at the core.",
      icon: "🤝",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Moonshot Thinking",
      description:
        "Safe doesn't scale. We dream in bold, pitch ideas that scare us (a little), and execute with precision. Because in a world full of noise, only brave brands stand out — and we're here to help them soar.",
      icon: "🚀",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-yellow-900/30 -z-10"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-yellow-400/20 blur-md"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/3 right-12 w-8 h-8 rounded-full bg-blue-400/20 blur-md"
      />

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-200 to-yellow-300 font-serif font-bold">
            Our Core Values
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto max-w-md"
          />
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            At Crescentis, our values aren't just principles — they're promises.
            These guide how we collaborate, communicate, and create results for
            the brands we believe in.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Decorative line */}
          <div className="hidden lg:block absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-12 origin-top" />

          {/* Value selector */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:w-2/5">
            {values.map((value, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveValue(idx)}
                className={`flex-shrink-0 flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  activeValue === idx
                    ? `border-transparent bg-gradient-to-br ${value.color} shadow-lg`
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                } ${idx % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
              >
                <div className="text-2xl">{value.icon}</div>
                <h3 className="text-left font-medium">{value.title}</h3>
              </motion.button>
            ))}
          </div>

          {/* Active value display */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-3/5 relative"
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 relative overflow-hidden lg:-ml-12 lg:mt-12">
              {/* Floating corner accent */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${values[activeValue].color} opacity-20 blur-3xl`}
              />

              <div className="flex flex-col lg:flex-row gap-6">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  className={`text-4xl p-4 rounded-xl bg-gradient-to-br ${values[activeValue].color} shadow-lg self-start lg:self-center`}
                >
                  {values[activeValue].icon}
                </motion.div>
                <div className="lg:pt-4">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    {values[activeValue].title}
                  </h3>
                  <p className="mt-4 text-white/80 text-lg leading-relaxed">
                    {values[activeValue].description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-1 w-16 bg-gradient-to-r ${values[activeValue].color} rounded-full`}
                  />
                  <div className="ml-4 text-sm text-white/50">
                    {activeValue + 1} / {values.length}
                  </div>
                </div>
                <div className="flex gap-2">
                  {values.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveValue(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeValue === idx
                          ? `bg-gradient-to-br ${values[activeValue].color} scale-125`
                          : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
