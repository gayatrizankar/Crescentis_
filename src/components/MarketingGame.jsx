import React, { useState, useEffect } from "react";

export default function MarketingGame() {
  const [score, setScore] = useState(0);
  const [playerX, setPlayerX] = useState(200);
  const [leads, setLeads] = useState([{ x: 100, y: 0 }]);

  // Move leads down
  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prev) =>
        prev.map((lead) => ({ ...lead, y: lead.y + 10 }))
      );
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Collision detection
  useEffect(() => {
    leads.forEach((lead) => {
      if (lead.y > 350 && Math.abs(lead.x - playerX) < 50) {
        setScore((s) => s + 1);
        setLeads((prev) => prev.filter((l) => l !== lead));
      }
    });
  }, [leads, playerX]);

  // Add new leads
  useEffect(() => {
    const spawn = setInterval(() => {
      setLeads((prev) => [...prev, { x: Math.random() * 400, y: 0 }]);
    }, 2000);
    return () => clearInterval(spawn);
  }, []);

  // Player movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setPlayerX((x) => Math.max(x - 30, 0));
      if (e.key === "ArrowRight") setPlayerX((x) => Math.min(x + 30, 400));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-20 bg-black text-center text-white">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        🎯 Catch the Leads!
      </h2>
      <p className="text-gray-300 mb-6">
        Move the Crescentes basket to catch golden leads and grow your ROI!
      </p>

      {/* Game Area */}
      <div className="relative w-[500px] h-[400px] mx-auto bg-gray-900 border border-yellow-500 rounded-lg overflow-hidden">
        {/* Player Basket */}
        <div
          style={{ left: playerX }}
          className="absolute bottom-0 w-20 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg"
        />
        {/* Falling Leads */}
        {leads.map((lead, i) => (
          <div
            key={i}
            style={{ left: lead.x, top: lead.y }}
            className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
          />
        ))}
      </div>

      {/* Score */}
      <div className="mt-4 font-bold text-yellow-400">Score: {score}</div>
      <div className="mt-2 text-gray-400">Use ⬅️ ➡️ arrow keys to move</div>

      {/* Explanation */}
      <div className="mt-8 max-w-3xl mx-auto text-gray-300 text-sm leading-relaxed">
        <h3 className="text-lg text-yellow-400 font-bold mb-2">💡 How It Works</h3>
        <p>
          This interactive mini-game represents how marketers “catch leads.”  
          Each falling golden circle is a potential customer.  
          The basket represents your marketing funnel — you must position it well to catch opportunities.  
          Just like in real marketing, timing + strategy = better ROI.
        </p>
      </div>
    </section>
  );
}
