import React from "react";
import Navbar from "./Navbar";

const CaseStudySEO = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 font-serif">
          How to Rank #1 on Google in Pune
        </h1>
        <p className="text-gray-300 mb-8">
          This step-by-step SEO guide is tailored for local businesses in Pune to boost visibility, improve search rankings, and drive qualified traffic.
        </p>

        <img
          src="/91-8.webp"
          alt="SEO Guide"
          className="w-full h-[300px] object-contain rounded-xl mb-8"
        />

        <section className="text-gray-300 space-y-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            SEO Audit
          </h2>
          <p>Detailed analysis of your current SEO performance, from title tags to site speed.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Implementation
          </h2>
          <p>Enhance on-page factors (content, keywords, meta tags) and earn quality backlinks to improve rankings.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Monitoring & Optimization
          </h2>
          <p>Continuously track rankings and user behavior with analytics, refining strategies for maximum ROI.</p>
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

export default CaseStudySEO;
