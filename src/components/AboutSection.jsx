import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const AboutSection = () => {
  const [zoomPhase, setZoomPhase] = useState("initial");
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdPart, setShowThirdPart] = useState(false);
  const [showFounders, setShowFounders] = useState(false);

  // --- Part 1 zoom cycle ---
  useEffect(() => {
    const zoomInTimeout1 = setTimeout(() => setZoomPhase("zoomed"), 2000);
    const zoomOutTimeout1 = setTimeout(() => {
      setZoomPhase("initial");
      setShowSecondText(true);
    }, 4500);

    return () => {
      clearTimeout(zoomInTimeout1);
      clearTimeout(zoomOutTimeout1);
    };
  }, []);

  // Animate Part 1 bullet points
  useEffect(() => {
    if (!showSecondText) {
      const points = document.querySelectorAll(".initial-text ul li");
      points.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("show");
        }, 600 + i * 350);
      });
    }
  }, [showSecondText]);

  // --- Part 2 zoom cycle ---
  useEffect(() => {
    if (showSecondText) {
      const texts = document.querySelectorAll(".second-text .animate-text");
      texts.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("show");
        }, i * 450);
      });

      const secondZoomInTimeout = setTimeout(() => {
        setZoomPhase("zoomed");
      }, 4000);

      const secondZoomOutTimeout = setTimeout(() => {
        setZoomPhase("initial");
        setShowThirdPart(true);
      }, 6500);

      return () => {
        clearTimeout(secondZoomInTimeout);
        clearTimeout(secondZoomOutTimeout);
      };
    }
  }, [showSecondText]);

  // --- Part 3 zoom cycle ---
  useEffect(() => {
    if (showThirdPart) {
      const thirdElems = document.querySelectorAll(".third-part .animate-text");
      thirdElems.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("show");
        }, i * 350);
      });

      const thirdZoomInTimeout = setTimeout(() => {
        setZoomPhase("zoomed");
      }, 4000);

      const thirdZoomOutTimeout = setTimeout(() => {
        setZoomPhase("initial");
        setShowFounders(true);
      }, 6500);

      return () => {
        clearTimeout(thirdZoomInTimeout);
        clearTimeout(thirdZoomOutTimeout);
      };
    }
  }, [showThirdPart]);

  return (
    <div style={styles.wrapper}>
      <Navbar />
      <style>{cssStyles}</style>

      {/* Rotating Moon */}
      <div className="moony-rotate">
        <div
          className={`moony-glow ${
            zoomPhase === "zoomed" ? "zoom-in" : "zoom-out"
          }`}
        ></div>
      </div>

      {/* Part 1 — About Crescentis */}
      {!showSecondText && (
        <div className="top-section initial-text">
          <h1 className="animate-text show text-3xl sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-200 to-amber-200 font-serif font-bold">
            ABOUT CRESCENTIS MARKETING CO.
          </h1>
          <p className="animate-text show">
            We were founded on one belief —{" "}
            <span className="yellow-small">data-driven creativity</span> can
            propel brands to new heights. Based in Pune, we proudly serve
            businesses across Mumbai and India.
          </p>
          <ul>
            <li className="animate-text">
              <span className="yellow">1.</span> Our passionate team of
              marketers, designers, and writers operates from our “mission
              control” — guiding brands toward digital excellence.
            </li>

            {/* Fixed custom strategies bullet */}
            <li className="animate-text">
              <span className="yellow">2.</span> We craft custom strategies that fit your brand perfectly — because no two growth journeys are alike.
            </li>
            {/* If you want this line completely static (no animation), replace with: 
            <li>
              <span className="yellow">🚀</span> We craft custom strategies that fit your brand perfectly — because no two growth journeys are alike.
            </li>
            */}

            <li className="animate-text">
              <span className="yellow">3.</span> Every campaign we launch is
              powered by insight, innovation, and measurable performance.
            </li>
          </ul>
        </div>
      )}

      {/* Part 2 — Our Vision & Values */}
      {showSecondText && !showThirdPart && (
        <div className="second-text">
          <h2 className="animate-text text-3xl sm:text-4xl md:text-5xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-amber-200 font-serif font-bold">
            OUR VISION & VALUES
          </h2>
          <p className="animate-text">
            We simplify digital marketing for startups and entrepreneurs,
            helping them rise above competition with clarity and confidence.
          </p>
          <p className="animate-text">
            Transparency, agility, and measurable impact are at the heart of
            everything we do.
          </p>
          <p className="animate-text">
            Like a rocket navigating the stars, we adapt in real time to trends,
            ensuring every move leads to growth.
          </p>
          <p className="animate-text">
            Our mission: make marketing accessible, data-driven, and effective
            for every business.
          </p>
        </div>
      )}

      {/* Part 3 — What Sets Us Apart */}
      {showThirdPart && !showFounders && (
        <div className="third-part">
          <h2 className="animate-text text-3xl sm:text-4xl md:text-5xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-100 to-amber-100 font-serif font-bold">
            WHAT SETS US APART
          </h2>
          <ul>
            <li className="animate-text">
              <span className="yellow">✔</span> Data-Driven Campaigns
            </li>
            <li className="animate-text">
              <span className="yellow">✔</span> Creative Precision & Strategy
            </li>
            <li className="animate-text">
              <span className="yellow">✔</span> Transparent, Real-Time Reporting
            </li>
            <li className="animate-text">
              <span className="yellow">✔</span> Scalable Growth for Every Brand
            </li>
          </ul>
          <a href="/contact">
            <button className="animate-text">Contact Us</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutSection;

const styles = {
  wrapper: {
    backgroundColor: "#000",
    color: "white",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const cssStyles = `
  .moony-rotate {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    animation: rotate 20s linear infinite;
    z-index: 0;
    pointer-events: none;
  }
  .moony-glow {
    width: 100vw;
    height: 100vh;
    background-image: url('/moony.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0 0 80px #FFD700cc);
    border-radius: 50%;
    opacity: 0.25;
    transition: transform 1.5s ease, opacity 1.5s ease;
    transform-origin: center center;
  }
  .moony-glow.zoom-in { transform: scale(4); opacity: 0.7; }
  .moony-glow.zoom-out { transform: scale(1); opacity: 0.25; }
  @keyframes rotate { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
  .top-section, .second-text, .third-part {
    position: relative;
    z-index: 2;
    max-width: 650px;
    margin: 0 auto 40px;
    text-align: center;
  }
  ul { list-style:none; padding-left:0; margin-top:20px; }
  ul li { font-size:18px; margin-bottom:18px; opacity:0; transform:scale(0.7); transition:all 0.4s ease; display:flex; align-items:flex-start;}
  ul li.show { opacity:1; transform:scale(1);}
  .yellow { color:#FFD700; font-weight:bold; font-size:28px;}
  .yellow-small { color:#FFD700; font-weight:bold;}
  .animate-text { opacity:0; transform:translateX(50px); transition:all 0.6s ease; margin-bottom:15px; }
  .animate-text:nth-child(even){ transform:translateX(-50px);}
  .animate-text.show { opacity:1; transform:translateX(0);}
  button { background:#FFD700; color:#000; padding:12px 25px; border:none; border-radius:5px; margin-top:25px; font-weight:bold; opacity:0; transform:scale(0.7); transition:all 0.3s; }
  button.animate-text.show{opacity:1; transform:scale(1);}
  button:hover{background:#e6c200; transform:scale(1.1);}
`;
