import React from "react";
import Navbar from "./Navbar";

const portfolioItems = [
  {
    title: "Tech Startup (Pune)",
    subtitle: "SEO & Content",
    points: [
      "3× increase in organic traffic",
      "40% jump in qualified leads",
      "Optimized website structure and content",
      "Targeted keyword strategy implementation",
    ],
  },
  {
    title: "Retail Brand (Mumbai)",
    subtitle: "Social Ads & Branding",
    points: [
      "Brand engagement grew by 60%",
      "Online sales rose 50%",
      "Launch of targeted ad campaigns on social media",
      "Brand identity redesign for better recognition",
    ],
  },
  {
    title: "Healthcare App (India-wide)",
    subtitle: "Web Revamp & SEM",
    points: [
      "Redesigned site improved conversions by 30%",
      "Strategic PPC ads generated new user signups",
      "Enhanced UX for smoother user journey",
      "SEO optimization for competitive keywords",
    ],
  },
];

const Portfolio = () => {
  const descriptionLines = [
    "Case studies and client success stories reveal the true impact of our work.",
    "In our portfolio, you’ll see real examples of how we’ve helped businesses in Pune, Mumbai, and beyond achieve impressive growth.",
    "For instance, we guided a local tech startup to double its organic traffic through targeted SEO and content strategy.",
    "We also boosted an e-commerce brand’s monthly sales by 50% with a combination of social media advertising and UX improvements.",
    "Each case study outlines the challenges, strategy, and results, demonstrating our ability to deliver tangible outcomes.",
    "Browse our portfolio to see the stories behind these successes.",
  ];

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 relative overflow-hidden">
      <Navbar />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 mb-6 font-serif animate-fadeIn">
          Portfolio / Case Studies
        </h2>
        <div className="space-y-3">
          {descriptionLines.map((line, idx) => (
            <p
              key={idx}
              className="text-gray-300 opacity-0 animate-slideIn"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Portfolio Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/70 border border-yellow-400/40 rounded-2xl shadow-lg p-6 flex flex-col transform scale-90 opacity-0 animate-popIn"
            style={{ animationDelay: `${idx * 0.3}s` }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900 font-serif">
              {item.title}
            </h3>
            <h4 className="text-yellow-400 font-semibold mb-3">{item.subtitle}</h4>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              {item.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        .animate-slideIn {
          opacity: 0;
          transform: translateY(20px);
          animation: slideIn 0.8s forwards;
        }
        .animate-popIn {
          opacity: 0;
          transform: scale(0.9);
          animation: popIn 0.5s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
