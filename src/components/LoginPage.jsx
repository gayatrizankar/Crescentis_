import React from "react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="bg-white rounded-2xl shadow-lg flex w-3/4 max-w-4xl">
        
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-white rounded-l-2xl p-10 flex flex-col justify-between min-h-[600px]">
          
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
            <h1 className="text-4xl font-bold mb-4">Welcome to Crescentis</h1>

            {/* Attractive description */}
            <p className="mb-4">
              Discover a smarter way to manage your workflow with Crescentis.  
              Designed to boost productivity, streamline processes, and inspire creativity.
            </p>
            <p>
              Join thousands of users transforming their ideas into reality — with speed, style, and simplicity.
            </p>
          </div>

          <p className="text-sm">Empowering your digital journey.</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Login</h2>
          <p className="mb-6 text-gray-500">
            Welcome! Login to get amazing discounts and offers only for you.
          </p>

          <form>
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg"
            >
              LOGIN
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <a href="/signup" className="text-yellow-600 hover:underline">
              New User? Signup
            </a>
            <a href="/forgot" className="text-gray-500 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
