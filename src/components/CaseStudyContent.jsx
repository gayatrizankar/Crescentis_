import React from "react";
import Navbar from "./Navbar";

const CaseStudyContent = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 font-serif">
          Content Marketing ROI
        </h1>
        <p className="text-gray-300 mb-8">
          Content is key for startups. Learn how to save money, build authority, and grow your brand through strategic content marketing.
        </p>

        <img
          src="/OIP.webp"
          alt="Content Marketing"
          className="w-full h-[300px] object-contain rounded-xl mb-8"
        />

        <section className="text-gray-300 space-y-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Strategy Development
          </h2>
          <p>Create a content calendar tailored to your audience, including blogs, social media posts, and newsletters.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            ROI Tracking
          </h2>
          <p>Measure engagement, conversions, and traffic to ensure your content investments are paying off.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Continuous Optimization
          </h2>
          <p>Refine content based on analytics, trends, and audience feedback to maximize impact and growth.</p>
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

export default CaseStudyContent;
