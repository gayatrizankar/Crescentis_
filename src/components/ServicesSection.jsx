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
        <div className="w-full overflow-hidden relative z-10 mb-[20px]">
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
       <footer className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-slate-900 mb-0 pb-0 w-full">

  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-yellow-400/3 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-gradient-radial from-amber-500/3 to-transparent rounded-full blur-2xl"></div>
  </div>
  <div className="relative">
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="flex-1 max-w-md">
          <div className="mb-6">
            <img
              alt=""
              className="h-10 w-auto"
              src="/assets/navbarlogo-DMxz25By.jpg"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Crafting tomorrow's digital experiences with innovation and excellence.
            </p>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://m.facebook.com/profile.php?id=61578055854652"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mid.nightsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a
              href="https://x.com/mid_night_sol?t=ccogz0JSEwIJYuVgYFUEgg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/midnight-solutions-pvt-ltd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-3">
            <a
              href="mailto:midnightsolutions750@gmail.com"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors group text-sm"
            >
              <div className="w-6 h-6 bg-white/5 backdrop-blur-sm rounded-md flex items-center justify-center mr-3 group-hover:bg-yellow-400/10 transition-colors border border-white/10">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="truncate">midnightsolutions750@gmail.com</span>
            </a>
            <a
              href="tel:+919172810750"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors group text-sm"
            >
              <div className="w-6 h-6 bg-white/5 backdrop-blur-sm rounded-md flex items-center justify-center mr-3 group-hover:bg-yellow-400/10 transition-colors border border-white/10">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span>+91 9172810750</span>
            </a>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-6 h-6 bg-white/5 backdrop-blur-sm rounded-md flex items-center justify-center mr-3 border border-white/10">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span>Katraj, Pune, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm">© 2024 Midnight Solutions. All rights reserved.</div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms</a>
            <a href="/cookies" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
