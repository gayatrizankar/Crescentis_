"use client";
import React, { useEffect } from "react";

const clients = [
  { name: "MIRAGE", logo: "/images/mirage.png" },
  { name: "MASCO FIT BRAND", logo: "/images/masco.png" },
  { name: "JUJU MEXICAN BAR", logo: "/images/juju.png" },
  { name: "gather for good", logo: "/images/gather.png" },
  { name: "RECUCINA", logo: "/images/recucina.png" },
  { name: "Kefi Design Studio", logo: "/images/kefi.png" },
];

const ClientPortfolio = ({ active }) => {
  useEffect(() => {
    if (!active) return; // only animate when this page is active

    const cards = document.querySelectorAll(".client-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add("fade-in");
    });
  }, [active]);

  return (
    <div style={{ ...styles.section, width: "100vw", height: "100vh" }}>
      <h2 style={styles.title}>OUR CLIENT PORTFOLIO</h2>
      <div style={styles.grid}>
        {clients.map((client, index) => (
          <div key={index} className="client-card" style={styles.card}>
            <img src={client.logo} alt={client.name} style={styles.image} />
          </div>
        ))}
      </div>

      <style>{`
        .client-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }

        .client-card.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .client-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 30px rgba(255, 255, 0, 0.3); /* Yellow glow */
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#000000",
    color: "#FFD700",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "50px",
    letterSpacing: "2px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, auto)",
    gap: "40px",
    justifyItems: "center",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1a1a1a",
    width: "220px",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(255, 215, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
};

export default ClientPortfolio;
