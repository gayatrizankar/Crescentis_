import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const fullForm = [
  { letter: "C", word: "Creative" },
  { letter: "R", word: "Results-Driven" },
  { letter: "E", word: "Engagement" },
  { letter: "S", word: "Strategy" },
  { letter: "C", word: "Campaigns" },
  { letter: "E", word: "Empowering" },
  { letter: "N", word: "Next-Gen Tech" },
  { letter: "T", word: "Transformation" },
  { letter: "I", word: "Innovation" },
  { letter: "S", word: "Success" },
];

const Footer = () => {
  const [displayed, setDisplayed] = useState([]);
  const [finalReveal, setFinalReveal] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      let index = -1;
      const interval = setInterval(() => {
        if (index < fullForm.length) {
          setDisplayed((prev) => [...prev, fullForm[index]]);
          index++;
        } else {
          clearInterval(interval);
          // Final reveal delay after animation
          setTimeout(() => {
            setFinalReveal(true);
          }, 1000);
        }
      }, 500);

      // Inject animation keyframes only once
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }

        @keyframes glowPulse {
          0% { box-shadow: 0 0 10px #ffd70055, 0 0 30px #ffd70022; }
          50% { box-shadow: 0 0 25px #ffd700aa, 0 0 60px #ffd70033; }
          100% { box-shadow: 0 0 10px #ffd70055, 0 0 30px #ffd70022; }
        }
      `;
      document.head.appendChild(style);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <footer ref={ref} style={styles.footer}>
      {/* Galaxy-style animation container */}
      <div style={styles.galaxyContainer}>
        {displayed.map((item, idx) => (
  item && (
    <div key={`${item.letter}-${idx}`} style={{ ...styles.planet, animation: "popIn 0.5s ease" }}>
      <div style={styles.letter}>{item.letter}</div>
      <div style={styles.word}>{item.word}</div>
    </div>
  )
))}

      </div>

      {/* Final full-form reveal */}
      {finalReveal && (
        <div style={styles.finalReveal}>
          <h2 style={styles.fullName}>CRESCENTIS</h2>
          <p style={styles.fullMeaning}>
            Creative | Results-Driven | Engagement | Strategy | Campaigns | Empowering | Next-Gen Tech | Transformation | Innovation | Success
          </p>
        </div>
      )}

      {/* Arc */}
      <div style={styles.footerArc}></div>

      {/* Footer content */}
      <div style={styles.footerBottom}>
        <div style={styles.brand}>
          <span style={styles.logo}>🌙</span> crescentis
        </div>
        <div style={styles.links}>
          <a href="/blog" style={styles.link}>Blog</a>
          <a href="/terms" style={styles.link}>Terms</a>
          <a href="/privacy" style={styles.link}>Privacy</a>
        </div>
        <div style={styles.rights}>All rights reserved | Portal 2025</div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#ffd700",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    paddingBottom: "220px",
    paddingTop: "100px",
    overflow: "hidden",
  },

  galaxyContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "95%",
    margin: "0 auto 60px",
  },

  planet: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#111",
    border: "2px solid #ffd700",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animation: "glowPulse 2.5s infinite ease-in-out",
    boxShadow: "0 0 20px #ffd70044",
  },

  letter: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffd700",
  },

  word: {
    fontSize: "0.8rem",
    color: "#fff",
    marginTop: "5px",
    padding: "0 5px",
    textAlign: "center",
  },

  finalReveal: {
    marginTop: "60px",
    padding: "20px",
    animation: "popIn 1s ease",
  },

  fullName: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffd700",
    marginBottom: "10px",
  },

  fullMeaning: {
    color: "#ccc",
    fontSize: "1rem",
    lineHeight: "1.6",
    maxWidth: "900px",
    margin: "0 auto",
  },

  footerArc: {
    position: "absolute",
    bottom: "160px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "300px",
    background: "radial-gradient(circle at top, #ffd70033, transparent 80%)",
    borderTopLeftRadius: "300px",
    borderTopRightRadius: "300px",
    boxShadow: "0 -30px 100px #ffd70066",
    zIndex: 0,
  },

  footerBottom: {
    borderTop: "1px solid #333",
    paddingTop: "20px",
    marginTop: "40px",
    zIndex: 2,
    position: "relative",
  },

  brand: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  logo: {
    color: "#ffd700",
    marginRight: "6px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "10px",
  },

  link: {
    color: "#ffd700",
    textDecoration: "none",
    transition: "0.3s",
  },

  rights: {
    fontSize: "0.85rem",
    color: "#888",
  },
};

export default Footer;
