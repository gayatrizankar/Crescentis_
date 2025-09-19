import React, { useEffect, useRef, useState } from "react";

export default function OrbitGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const shipRef = useRef({ x: 100, y: 150, vy: 0, radius: 20 });
  const orbsRef = useRef([]);
  const asteroidsRef = useRef([]);
  const frameRef = useRef(0);
  const animRef = useRef(null);
  const gameStoppedRef = useRef(false); // <- track if game is frozen

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const gravity = 0.25;
    const thrustPower = -5;
    const orbSpeed = 2;
    const asteroidSpeed = 3;

    const spawnOrb = () => {
      const r = 10;
      orbsRef.current.push({
        x: canvas.width + 20,
        y: Math.random() * (canvas.height - 2 * r) + r,
        r,
      });
    };

    const spawnAsteroid = () => {
      const r = 22;
      asteroidsRef.current.push({
        x: canvas.width + 30,
        y: Math.random() * (canvas.height - 2 * r) + r,
        r,
      });
    };

    const thrust = () => {
      if (!gameStoppedRef.current) shipRef.current.vy = thrustPower;
    };

    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        thrust();
      }
    };

    window.addEventListener("keydown", handleKey);
    canvas.addEventListener("pointerdown", thrust);

    const loop = () => {
      if (gameStoppedRef.current) return; // <- stop loop permanently

      frameRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ship physics
      shipRef.current.vy += gravity;
      shipRef.current.y += shipRef.current.vy;
      if (shipRef.current.y > canvas.height - shipRef.current.radius)
        shipRef.current.y = canvas.height - shipRef.current.radius;
      if (shipRef.current.y < shipRef.current.radius)
        shipRef.current.y = shipRef.current.radius;

      // Spawn orbs & asteroids
      if (frameRef.current % 100 === 0) spawnOrb();
      if (frameRef.current % 200 === 0) spawnAsteroid();

      // Move orbs
      orbsRef.current.forEach((o) => (o.x -= orbSpeed));
      orbsRef.current = orbsRef.current.filter((o) => o.x > -20);

      // Move asteroids
      asteroidsRef.current.forEach((a) => (a.x -= asteroidSpeed));
      asteroidsRef.current = asteroidsRef.current.filter((a) => a.x > -30);

      // Collision with orbs
      orbsRef.current.forEach((o, i) => {
        const dx = shipRef.current.x - o.x;
        const dy = shipRef.current.y - o.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < shipRef.current.radius + o.r) {
          orbsRef.current.splice(i, 1);
          const newScore = score + 1;
          setScore(newScore);

          if (newScore >= 7 && !showPopup) {
            // Freeze the game
            gameStoppedRef.current = true;
            setShowPopup(true);
            cancelAnimationFrame(animRef.current);

            // Hide popup after 25s
            setTimeout(() => setShowPopup(false), 10000);
          }
        }
      });

      // Collision with asteroids
      asteroidsRef.current.forEach((a) => {
        const dx = shipRef.current.x - a.x;
        const dy = shipRef.current.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < shipRef.current.radius + a.r && !gameStoppedRef.current) {
          shipRef.current.y = canvas.height / 2;
          shipRef.current.vy = 0;
          orbsRef.current = [];
          asteroidsRef.current = [];
          setScore(0);
        }
      });

      // Draw ship (Moon)
      ctx.save();
      ctx.translate(shipRef.current.x, shipRef.current.y);
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.arc(0, 0, shipRef.current.radius * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#FFD764";
      ctx.arc(0, 0, shipRef.current.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.fillStyle = "white";
      ctx.font = "14px Cinzel, serif";
      ctx.fillText("You", shipRef.current.x - 15, shipRef.current.y - 25);

      // Draw orbs (Opportunities)
      orbsRef.current.forEach((o) => {
        ctx.beginPath();
        ctx.fillStyle = "#FFD764";
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "10px Cinzel, serif";
        ctx.fillText("Opportunity", o.x - 20, o.y - 15);
      });

      // Draw asteroids (Problems)
      asteroidsRef.current.forEach((a) => {
        ctx.beginPath();
        ctx.fillStyle = "#888";
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "10px Cinzel, serif";
        ctx.fillText("Problem", a.x - 15, a.y - 25);
      });

      // Draw score
      ctx.fillStyle = "white";
      ctx.font = "16px Cinzel, serif";
      ctx.fillText("Score: " + score, 10, 20);

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("keydown", handleKey);
    };
  }, [score, showPopup]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 relative"
      style={{
        backgroundImage: "url('/1426487.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay behind game box */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Game Box */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40 backdrop-blur-sm w-full max-w-3xl z-10">
        <div className="w-full h-[280px] relative">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white/80 text-sm select-none z-20">
            Press <kbd>Space</kbd> or click/tap to thrust
          </div>
        </div>
      </div>

      {/* Context */}
      <div className="mt-4 p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 max-w-3xl text-left z-10 relative">
        <h3 className="text-xl font-hero text-yellow-300">How to play</h3>
        <p className="text-white/80 mt-2 text-sm">
          Tap or press <kbd>Space</kbd> to thrust upward. Collect golden orbs (Opportunities) to increase your score. Avoid gray asteroids (Problems) — hitting one resets your run.
        </p>
        <h3 className="text-xl font-hero text-yellow-300 mt-3">Why it relates to Crescentes</h3>
        <p className="text-white/70 mt-2 text-sm">
          Opportunities = what we help brands achieve. Problems = challenges we navigate. Maintaining flight = our strategic focus to lift brands into high-visibility orbit.
        </p>
      </div>

      {/* Popup animation for score ≥ 7 */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black/90 p-6 rounded-2xl border border-yellow-400 shadow-[0_0_20px_rgba(255,220,100,0.7)] animate-pulse">
            <h2 className="text-yellow-300 font-hero text-2xl mb-2 text-center">Great Flight!</h2>
            <p className="text-white/80 text-center text-sm">
              You navigated the opportunities and avoided problems successfully! Just like Crescentes guides brands, careful strategy keeps you on course to reach your goals.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
