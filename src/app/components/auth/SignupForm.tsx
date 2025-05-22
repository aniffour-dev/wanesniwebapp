import React from "react";

const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181f2a] py-8 px-2">
      <div className="w-full max-w-4xl bg-[#181f2a] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Video Placeholder */}
        <div className="md:w-1/2 w-full h-72 md:h-auto flex items-center justify-center bg-[#232b3b] relative">
          {/* Video with overlay */}
          <div className="w-full h-full flex items-center justify-center relative">
            <video
              className="object-cover w-full h-full rounded-2xl md:rounded-none md:rounded-l-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/signup-poster.jpg"
            >
              <source src="/assets/signup-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl md:rounded-none md:rounded-l-2xl pointer-events-none" />
          </div>
        </div>
        {/* Right: Signup Form */}
        <div className="md:w-1/2 w-full bg-[#181f2a] p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-2">Join us today <span className="inline-block">✨</span></h2>
          <p className="text-gray-300 mb-6">Clarity gives you the blocks and components you need to create a truly professional website.</p>
          <button className="w-full flex items-center justify-center gap-2 bg-[#232b3b] text-white font-medium py-3 rounded-full mb-6 hover:bg-[#2d3648] transition">
            <img src="/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">First &amp; Last Name</label>
              <input
                type="text"
                placeholder="i.e. Davon Lean"
                className="w-full px-4 py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="i.e. davon@mail.com"
                className="w-full px-4 py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-full bg-transparent border border-[#2d3648] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="terms" className="mr-2 accent-pink-500" />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                I agree with the <a href="#" className="text-pink-400 underline">Terms &amp; Conditions</a> of Clarity
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold py-3 rounded-full transition text-lg mt-2"
            >
              Create Account
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-6 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-pink-400 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm; 