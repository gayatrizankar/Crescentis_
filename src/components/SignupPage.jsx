import React from "react";

export default function SignupPage() {
  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-black">
      {/* 🌟 Golden Glow Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1300] to-black z-0"></div>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-600 via-yellow-500 to-yellow-400 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-full blur-[200px] opacity-20 animate-pulse-slow"></div>

      {/* ✨ Signup Box */}
      <div className="relative z-10 bg-black/95 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:shadow-[0_0_45px_rgba(255,215,0,0.4)] transition-shadow duration-700 ease-in-out flex w-3/4 max-w-4xl backdrop-blur-sm">
        
        {/* Left Section - Golden */}
        <div className="w-1/2 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#bfa34f] text-white rounded-l-2xl p-10 flex flex-col justify-between min-h-[600px] shadow-[0_0_60px_rgba(255,215,0,0.4)]">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Crescentis Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="text-black font-bold text-lg">CRESCENTIS</div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold mb-4 text-black">Join Crescentis Today</h1>

            {/* Description */}
            <p className="mb-4 text-black/80">
              Create your account and start transforming your workflow instantly.  
              Crescentis gives you the tools to innovate and grow.
            </p>
            <p className="text-black/70">
              Sign up now and unlock exclusive benefits tailored just for you.
            </p>
          </div>

          <p className="text-sm text-black/70">Your journey starts here.</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-black rounded-r-2xl relative">
          {/* Home Button */}
          <a
            href="/"
            className="absolute top-4 right-4 bg-[#d4af37] text-black font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-[0_0_10px_rgba(255,215,0,0.5)] transition"
          >
            Home
          </a>

          <h2 className="text-2xl font-bold text-[#d4af37] mb-2">Sign Up</h2>
          <p className="mb-6 text-gray-400">
            Fill in your details to create your Crescentis account.
          </p>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />

            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#bfa34f] text-black font-bold py-3 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] transition"
            >
              SIGN UP
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <a href="/login" className="text-[#d4af37] hover:underline">
              Already have an account? Login
            </a>
            <a href="/forgot" className="text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      {/* ✨ Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
