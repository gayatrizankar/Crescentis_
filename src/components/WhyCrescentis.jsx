"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoreValues3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Built for Scale from Day One",
      description: "We're engineered to grow with you — from your first campaign to your next round of funding. Our systems and strategies adapt seamlessly as your business evolves. Every decision is data-driven to maximize growth opportunities and ROI. We focus on long-term sustainability while achieving short-term wins.",
      icon: "🌙"
    },
    {
      title: "Hybrid Model = Full Control",
      description: "Branding, marketing, and digital under one roof ensures faster turnarounds. You stay in control while our team ensures creative excellence. We provide full transparency with clear reporting at every step. This approach reduces bottlenecks and accelerates growth.",
      icon: "🌙"
    },
    {
      title: "Small Team, Big Focus",
      description: "You'll never feel like client #17. Our dedicated team treats your brand as a priority. Every strategy and execution is tailored specifically for you. Small size ensures agility, quality, and exceptional attention to detail. We focus on delivering excellence consistently.",
      icon: "🌙"
    },
    {
      title: "Moonshot Mentality",
      description: "We don't do average. We think big, test fast, and execute smarter. Every campaign is an opportunity to push creative and strategic boundaries. Our mindset ensures continuous learning and improvement. We aim for bold results that make a real impact.",
      icon: "🌙"
    },
    {
      title: "Transparent, No-Nonsense Workflow",
      description: "You'll always know what's happening, what's next, and how it's performing. Complete transparency with detailed reporting and proactive updates. Every task, timeline, and milestone is communicated clearly. Efficiency, trust, and smooth collaboration are guaranteed.",
      icon: "🌙"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center perspective-1000 overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-100 to-amber-100 font-dm-sans font-serif font-bold">
          What Sets Us Light Years Apart
        </h2>

        <div className="relative w-full max-w-4xl h-96 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 500, damping: 30 }}
              className="absolute inset-0 bg-gray-900/50 backdrop-blur-md rounded-xl p-8 flex flex-col justify-center shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-4xl mb-4">{features[currentIndex].icon}</span>
              <h3 className="text-2xl sm:text-5xl md:text-4xl  mb-6 text-yellow-400 font-dm-sans font-serif font-bold">
                {features[currentIndex].title}
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                {features[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
