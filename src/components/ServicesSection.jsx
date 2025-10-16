import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ServiceSection = () => {
  const services = [
    {
      title: "Comprehensive Marketing Services",
      description:
        "We offer comprehensive marketing, web, and content services designed to fuel your growth. ",
      items: [
        "Our 360° solutions cover every aspect of digital promotion.",
        "Keyword Research & SEO",
        "Content Creation & Copywriting",
        "Conversion Rate Optimization",
        "Tailored Strategy for Each Business",
      ],
    },
    {
      title: "SEO & SEM",
      description:
        "We improve your search engine rankings",
      items: [
        " Drive qualified traffic through a structured approach to SEO and PPC campaigns.",
        "SEO Audit: Analyzing title tags, meta descriptions, content, site structure, and technical aspects",
        "Implementation: Optimizing on-page content, meta tags, and backlinks to boost authority",
        "Monitoring: Continuous tracking of rankings and user behavior to refine strategy",
      ],
    },
    {
      title: "Customized Solutions",
      description:
        "Whether you’re a startup in Pune or an established company in Mumbai, we have the tools and expertise to achieve your goals.",
      items: [
        "Full-stack marketing tailored to your brand",
        "Data-driven strategies for sustainable growth",
        "Performance monitoring and reporting",
        "Flexible solutions for startups and enterprises",
      ],
    },
  ];

  const scrollingCards = [...services, ...services];

  // Letter-by-letter animation for the heading
  const [animatedText, setAnimatedText] = useState("");
  const fullTitle = "Unlimited Digital Marketing, Unlimited Growth";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(fullTitle.slice(0, index + 1));
      index++;
      if (index === fullTitle.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black text-white">
      <Navbar />

      <section className="relative px-6 py-40 overflow-hidden min-h-screen flex flex-col items-center justify-center">
        {/* Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none">
          <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.5)_0%,rgba(250,204,21,0.2)_40%,transparent_70%)] blur-3xl" />
        </div>

        {/* Title with letter animation */}
        <h1 className="text-5xl sm:text-6xl text-center mb-6 relative z-10 font-dm-sans">
          <span className="bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900 text-transparent bg-clip-text font-serif font-bold">
            {animatedText}
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-center mb-10 relative z-10">
          At Crescentis, we offer a full-stack suite of marketing services designed to scale with your business — whether you're launching, growing, or reinventing.
        </p>

        {/* Features */}
        <div className="flex flex-col items-center gap-4 text-gray-300 text-md mb-10 relative z-10">
          <span>✅ Tailored marketing strategies for every business</span>
          <span>✅ Full SEO & SEM services for qualified traffic</span>
          <span>✅ Continuous monitoring and performance optimization</span>
        </div>

        {/* Button */}
        <div className="flex justify-center mb-16 relative z-10">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-black font-semibold shadow-lg shadow-yellow-500/50 hover:scale-105 transition">
            Start Your Growth Journey
          </button>
        </div>

        {/* Infinite Moving Cards */}
        <div className="w-full overflow-hidden relative z-10 mb-20">
          <div className="flex animate-slide space-x-6">
            {scrollingCards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-[320px] bg-gradient-to-br from-yellow-500/20 via-yellow-300/10 to-black rounded-2xl p-6 shadow-lg flex-shrink-0 transform transition hover:scale-105 hover:shadow-yellow-400/50"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900 text-transparent bg-clip-text">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-3 text-sm md:text-base">{card.description}</p>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-base space-y-1">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Crescentis. All rights reserved.
      </footer>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;
