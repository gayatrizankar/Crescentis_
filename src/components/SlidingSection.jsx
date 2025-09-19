"use client";
import React from "react";

export default function SlidingSection() {
  return (
    <section className="sliding-section relative w-full h-screen bg-black flex items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          A growth-driven digital marketing agency backed by data, storytelling, and performance.
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-4">
          Backed by Midnight Solutions Pvt. Ltd., Crescentis blends insight, creativity, and performance to help brands grow and shine. We don’t just market — we build presence, drive conversions, and shape perception.
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mt-8 mb-3">
          About Crescentis:
        </h3>
        <p className="text-gray-200 text-lg md:text-xl">
          Born under the umbrella of Midnight Solutions Pvt. Ltd., Crescentis is more than a marketing agency — we’re your brand’s growth partner. Inspired by the Latin root ‘crescō’, meaning ‘to grow’, we believe in scaling brands through a deep fusion of creativity, strategy, and technology.
        </p>
      </div>
    </section>
  );
}
