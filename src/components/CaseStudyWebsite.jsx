import React from "react";
import Navbar from "./Navbar";

const CaseStudyWebsite = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 font-serif">
          Designing a High-Converting Website
        </h1>
        <p className="text-gray-300 mb-8">
          Turn visitors into customers with a website designed for conversion, usability, and visual impact.
        </p>

        <img
          src="/OIP (1).webp"
          alt="Website Design"
          className="w-full h-[300px] object-contain rounded-xl mb-8"
        />

        <section className="text-gray-300 space-y-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            User-Centric Design
          </h2>
          <p>Focus on intuitive navigation, clean layouts, and clear calls-to-action to guide users through your site.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Conversion Optimization
          </h2>
          <p>Implement A/B testing, persuasive copy, and optimized landing pages to maximize conversions.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Performance & SEO
          </h2>
          <p>Ensure fast load times, mobile responsiveness, and SEO-friendly architecture to improve search rankings and user experience.</p>
        </section>

        <div className="mt-10">
          <a
            href="/blog"
            className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyWebsite;
