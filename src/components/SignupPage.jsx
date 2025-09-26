import React from "react";

export default function SignupPage() {
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
              <div className="text-yellow-400 font-bold text-lg">CRESCENTIS</div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold mb-4">Join Crescentis Today</h1>

            {/* Attractive description */}
            <p className="mb-4">
              Create your account and start transforming your workflow instantly.  
              Crescentis gives you the tools to innovate and grow.
            </p>
            <p>
              Sign up now and unlock exclusive benefits tailored just for you.
            </p>
          </div>

          <p className="text-sm">Your journey starts here.</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Sign Up</h2>
          <p className="mb-6 text-gray-500">
            Fill in your details to create your Crescentis account.
          </p>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg"
            >
              SIGN UP
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <a href="/login" className="text-yellow-600 hover:underline">
              Already have an account? Login
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
