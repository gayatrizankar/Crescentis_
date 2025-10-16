"use client";

import React, { useEffect, useState, useRef } from "react";

const WhyChooseCrescentis = () => {
  const [showMoon, setShowMoon] = useState(false);
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const sectionRef = useRef(null);

  const boxData = [
    {
      title: "🔍 SEO & SEM: Visibility that Converts",
      text: "We boost your visibility in Pune and beyond with optimized URLs, titles, and content. Our data-driven Google and social media ads target the right keywords — even location-specific ones like “digital marketing agency Pune” — bringing in qualified leads and measurable ROI.",
    },
    {
      title: "✍️ Content Marketing & Copywriting",
      text: "We create engaging, keyword-rich content that educates and converts. From blogs to social posts and case studies, our storytelling approach improves search rankings while delivering high ROI — especially for startups looking to grow efficiently.",
    },
    {
      title: "📱 Social Media & Branding",
      text: "We craft bold brand voices and creative campaigns across Instagram, LinkedIn, and more. By turning clicks into conversations, we help you connect authentically with customers and build long-term loyalty through consistent storytelling.",
    },
    {
      title: "💻 Web Design & Development",
      text: "Your website is your digital spacecraft. We design responsive, high-speed, SEO-optimized websites with intuitive UX — helping you rank higher, load faster, and convert visitors into loyal customers with every click.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMoon(false);
          setVisibleBoxes([]);
          setTimeout(() => setShowMoon(true), 300);

          const delays = [800, 1100, 1400, 1700];
          delays.forEach((delay, index) => {
            setTimeout(() => {
              setVisibleBoxes((prev) => [...prev, index]);
            }, delay);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={styles.wrapper}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-200 to-yellow-300 font-serif font-bold pt-[40px]">
        WHY CHOOSE CRESCENTIS?
      </h1>

      {/* Rotating Moon */}
      <div
        style={{
          ...styles.moonContainer,
          transform: showMoon ? "translate(-50%, 0)" : "translate(-50%, 300px)",
          opacity: showMoon ? 1 : 0,
        }}
      >
        <img src="/moony.png" alt="Moon" style={styles.moon} />
      </div>

      {/* Boxes */}
      <div style={styles.columnsContainer}>
        <div style={styles.column}>
          {boxData.slice(0, 2).map((box, i) => (
            <div
              key={i}
              style={{
                ...styles.box,
                opacity: visibleBoxes.includes(i) ? 1 : 0,
                transform: visibleBoxes.includes(i) ? "scale(1)" : "scale(0.8)",
                transition: "all 0.6s ease",
              }}
            >
              <h3 style={styles.boxTitle}>{box.title}</h3>
              <p style={styles.boxText}>{box.text}</p>
            </div>
          ))}
        </div>

        <div style={styles.column}>
          {boxData.slice(2, 4).map((box, i) => (
            <div
              key={i + 2}
              style={{
                ...styles.box,
                opacity: visibleBoxes.includes(i + 2) ? 1 : 0,
                transform: visibleBoxes.includes(i + 2) ? "scale(1)" : "scale(0.8)",
                transition: "all 0.6s ease",
              }}
            >
              <h3 style={styles.boxTitle}>{box.title}</h3>
              <p style={styles.boxText}>{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#000",
    color: "#fff",
    width: "100vw",
    height: "100vh",
    padding: "60px 20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  moonContainer: {
    position: "absolute",
    top: "15%",
    left: "62%",
    transform: "translate(-50%, 300px)",
    transition: "transform 2s ease, opacity 2s ease",
    zIndex: 0,
    width: "1200px",
    height: "1200px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  moon: {
    width: "900px",
    height: "900px",
    objectFit: "cover",
    animation: "spin 60s linear infinite",
    filter: "brightness(1) contrast(1.1) grayscale(10%)",
  },
  columnsContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    flexWrap: "wrap",
    height: "100%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    flex: "1",
    minWidth: "300px",
  },
  box: {
    background: "rgba(20, 20, 20, 0.85)",
    border: "2px solid #ffffff33",
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(5px)",
    color: "#fff",
  },
  boxTitle: {
    color: "#b78cff",
    marginBottom: "10px",
  },
  boxText: {
    color: "#fff",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};

// Global spin animation
if (typeof document !== "undefined") {
  const styleSheet = document.styleSheets[0];
  const spinKeyframes =
    `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
  styleSheet.insertRule(spinKeyframes, styleSheet.cssRules.length);
}

export default WhyChooseCrescentis;
