import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    // Inject animation keyframes once
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slide {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <footer ref={ref} style={styles.footer}>
      {/* Our Client Portfolio Section */}
      <div style={styles.portfolioSection}>
        <h2  style={styles.portfolioTitle} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-100 to-amber-100 font-dm-sans font-serif font-bold">Our Client Portfolio</h2>
        <p style={styles.portfolioSubtitle}>
          Showcasing some of the brands we’ve proudly worked with
        </p>
      </div>

      {/* Infinite moving card animation */}
      <div style={styles.cardContainer}>
        <div style={styles.cardTrack}>
          <div style={styles.card}><img src="/mirage.png" alt="" /></div>
          <div style={styles.card}><img src="/masco.png" alt="" /></div>
          <div style={styles.card}><img src="/juju.png" alt="" /></div>
          <div style={styles.card}><img src="/gather.png" alt="" /></div>
          <div style={styles.card}><img src="/recucina.png" alt="" /></div>
          <div style={styles.card}><img src="/kefi.png" alt="" /></div>

          {/* Duplicate for infinite loop */}
          <div style={styles.card}><img src="/mirage.png" alt="" /></div>
          <div style={styles.card}><img src="/masco.png" alt="" /></div>
          <div style={styles.card}><img src="/juju.png" alt="" /></div>
          <div style={styles.card}><img src="/gather.png" alt="" /></div>
          <div style={styles.card}><img src="/recucina.png" alt="" /></div>
          <div style={styles.card}><img src="/kefi.png" alt="" /></div>
        </div>
      </div>

      {/* Arc effect */}
      <div style={styles.footerArc}></div>

      {/* Footer bottom content */}
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
    height: "100%",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "50px 20px 100px",
    overflow: "hidden",
    position: "relative",
  },

  portfolioSection: {
    marginBottom: "40px",
  },

  portfolioTitle: {
    fontFamily:"DM Sans', sans-serif",
    fontSize: "50px",
    marginTop: "10px",
    marginBottom: "10px",
  },

  portfolioSubtitle: {
    fontSize: "1rem",
    color: "#ccc",
  },

  cardContainer: {
    overflow: "hidden",
    width: "100%",
    marginBottom: "60px",
  },

  cardTrack: {
    display: "flex",
    gap: "20px",
    animation: "slide 20s linear infinite",
  },

  card: {
    background: "#111",
    color: "#ffd700",
    padding: "20px",
    borderRadius: "12px",
    minWidth: "200px",
    height: "300px",
    width: "300px",
    marginTop: "50px",
    textAlign: "center",
    boxShadow: "0 0 15px #ffd70044",
    fontWeight: "bold",
    flexShrink: 0,
  },

  footerArc: {
    position: "absolute",
    bottom: "4px",
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
  },

  rights: {
    fontSize: "0.85rem",
    color: "#888",
  },
};

export default Footer;
