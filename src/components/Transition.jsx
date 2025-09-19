import React, { useEffect, useState } from "react";

export default function Transition() {
  const [moonLeaving, setMoonLeaving] = useState(false);
  const [showNextSection, setShowNextSection] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMoonLeaving(true), 2000); // stay 2s
    const timer2 = setTimeout(() => setShowNextSection(true), 3500); // after moon slides

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-[200vh] bg-black overflow-hidden flex flex-col">
      {/* Rotating Moon */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] z-0 overflow-visible transition-all duration-[1500ms] ${
          moonLeaving ? "bottom-[-1200px]" : "bottom-[-540px]"
        }`}
      >
        <img
          src="/moony.png"
          alt="Moon"
          className="w-full h-full object-contain animate-spin-slow relative z-10"
        />
        <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-[200px]"></div>
        <div className="absolute inset-0 rounded-full bg-yellow-400/15 blur-[350px]"></div>
        <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-[500px]"></div>
      </div>

      {/* Next Section */}
      {showNextSection && (
        <div className="absolute top-[100vh] w-full flex flex-col items-center justify-center px-16 py-32 transition-opacity duration-1000 opacity-100">
          <h2 className="text-5xl font-bold text-yellow-400 mb-6">Next Slide</h2>
          <p className="text-gray-300 max-w-xl mb-6 text-center">
            The moon has left the hero, and this content appears smoothly.
          </p>
          <button className="px-10 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>
      )}

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
