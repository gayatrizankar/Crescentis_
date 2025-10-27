"use client";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import Navbar from "./Navbar";

export default function PortfolioSection() {
  const categories = ["All", "E-commerce", "Branding", "Digital Strategy"];

  const portfolioItems = [
    {
      id: 1,
      title: "Ramtek Agro Vision",
      subtitle: "E-commerce Platform Revolution",
      year: "2024",
      category: "E-commerce",
      image: "/Ramtek-wASQqjYI.jpeg",
      challenge:
        "Traditional agricultural product distribution was limiting market reach and preventing farmers from accessing quality fertilizers and agricultural products efficiently.",
      approach:
        "Developed a comprehensive e-commerce platform with advanced inventory management, farmer-direct sourcing capabilities, and mobile-first design optimized for rural connectivity.",
      results:
        "250% increase in online sales, 40% market expansion, and 5000+ new customers within 6 months.",
      technologies: [
        "E-commerce Development",
        "Mobile Optimization",
        "Inventory Management",
        "Rural UX",
      ],
      metrics: [
        { value: "250%", label: "Sales Growth" },
        { value: "40%", label: "Market Expansion" },
        { value: "5000+", label: "New Customers" },
        { value: "200+", label: "Product Categories" },
      ],
      testimonial:
        "Midnight Solutions revolutionized our agricultural business with a cutting-edge e-commerce platform that connected us directly with farmers across the region.",
      client: "Rakesh Gadhave, Founder & CEO",
      tags: ["E-commerce", "Rural UX", "Mobile App"],
      stats: [
        { label: "Sales Growth", value: "250%" },
        { label: "Market Reach", value: "40%" },
      ],
      description:
        "We created a powerful e-commerce experience connecting farmers and distributors, improving reach and efficiency.",
    },

    {
      id: 2,
      title: "Shakoon Milk",
      subtitle: "Global Brand Transformation",
      year: "2024",
      category: "Branding",
      image: "/Shakoon-BgyXLY4X.jpeg",
      challenge:
        "Expanding from a local Chiplun dairy brand to achieve global market presence while maintaining brand authenticity and quality perception.",
      approach:
        "Comprehensive brand strategy including digital transformation, international marketing campaigns, supply chain optimization, and cultural adaptation for global markets.",
      results:
        "300% brand awareness increase, successful entry into 12 international markets, and 180% revenue growth.",
      technologies: [
        "Brand Strategy",
        "International Marketing",
        "Digital Transformation",
        "Supply Chain",
      ],
      metrics: [
        { value: "300%", label: "Brand Awareness" },
        { value: "12", label: "International Markets" },
        { value: "500+", label: "Distribution Points" },
        { value: "180%", label: "Revenue Growth" },
      ],
      testimonial:
        "From a local Chiplun brand to global recognition — Midnight Solutions crafted our journey with precision and strategic excellence.",
      client: "Rugved Ghag, Managing Director",
      tags: [
        "Brand Strategy",
        "International Marketing",
        "Digital Transformation",
        "Supply Chain",
      ],
      stats: [
        { label: "Brand Awareness", value: "300%" },
        { label: "Revenue Growth", value: "180%" },
      ],
      description:
        "We helped Shakoon Milk transform from a regional dairy producer to an internationally recognized brand through strategic branding and global marketing initiatives.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  // ✅ Scroll animation setup
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center font-serif px-6 pt-[150px] bg-black text-white">
      <Navbar />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.4 + 0.2,
              scale: Math.random() * 0.6 + 0.4,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-[3px] h-[3px] bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.6)]"
          />
        ))}
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 px-6 py-2 border border-yellow-500/40 rounded-full text-yellow-300 bg-yellow-100/5 backdrop-blur-sm flex items-center gap-2 text-sm font-medium relative z-10"
      >
        <span className="text-yellow-400">✨</span> Our Creative Excellence
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-7xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_35px_rgba(255,215,0,0.7)] relative z-10"
      >
        PORTFOLIO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed relative z-10"
      >
        Explore our successful projects that transformed businesses and created lasting impact across industries.
      </motion.p>

      {/* Category Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-8 mt-20 relative z-10"
      >
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 border border-yellow-400/40 ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black shadow-[0_0_25px_rgba(255,215,0,0.8)]"
                : "bg-transparent text-gray-300 hover:text-yellow-300 hover:border-yellow-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ✅ Featured Projects Section with scroll animation */}
      <motion.div
        ref={featuredRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mt-[150px]"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed pb-0">
          Discover how we've helped businesses achieve remarkable growth and transformation
        </p>
      </motion.div>

      {/* ✅ Grid with scroll animation */}
      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isGridInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mt-16 relative z-10 mb-[150px]"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveProject(item)}
            className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full text-sm font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-yellow-400 rounded-full text-sm font-bold border border-yellow-400/30">
                    {item.year}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-yellow-400/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8 text-yellow-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-white font-medium case-hover">View Case Study</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-yellow-400 font-medium mb-4">{item.subtitle}</p>
                <div className="mb-6">
                  {item.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs mr-2 mb-2 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {item.metrics?.slice(0, 2).map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">{metric.value}</div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* The rest of your modal + footer remain unchanged */}
      {/* ... */}
      {/* Modal */}
     {activeProject && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
    <div className="relative rounded-2xl bg-gray-900/90 border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-zoomIn">
      <button
        onClick={() => setActiveProject(null)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
      >
        ✕
      </button>

      {/* Top Image */}
      <img
        src={activeProject.image}
        alt={activeProject.title}
        className="w-full h-56 md:h-80 object-cover rounded-t-2xl"
      />

      <div className="p-6 md:p-8">
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">{activeProject.title}</h2>
        <p className="text-gray-300 mb-8">{activeProject.subtitle}</p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT — Text */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🎯 Challenge</h3>
              <p className="text-gray-300">{activeProject.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">💡 Our Approach</h3>
              <p className="text-gray-300">{activeProject.approach}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🏆 Results Achieved</h3>
              <p className="text-yellow-400 font-semibold">{activeProject.results}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">🧰 Technologies & Services</h3>
              <div className="flex flex-wrap gap-2">
                {activeProject?.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 border border-white/20 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="border-t border-white/10 pt-6 italic text-gray-300">
              "{activeProject.testimonial}"
              <br />
              <span className="text-yellow-400 font-semibold">— {activeProject.client}</span>
            </blockquote>
          </div>

          {/* RIGHT — Key Metrics */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-3">📊 Key Metrics</h3>
            {activeProject?.metrics?.map((m, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-yellow-400">{m.value}</div>
                <p className="text-gray-300 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
            .animate-zoomIn { animation: zoomIn 0.4s ease-out; }
            .case-hover {
              position: relative;
              display: inline-block;
            }
            .case-hover::after {
              content: " →";
              opacity: 0;
              transform: translateX(-5px);
              transition: all 0.3s ease;
            }
            .case-hover:hover::after {
              opacity: 1;
              transform: translateX(5px);
            }
          `}</style>
  </div>
)}



    
    
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
    </section>
  );
}