import React from "react";
import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="bg-white w-full shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            title=""
            className={`${righteous.className} inline-flex text-[28px] font-bold bg-gradient-to-r from-pink-700 via-purple-500 to-violet-400 text-transparent bg-clip-text animate-gradient`}
          >
            wanesni
          </Link>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-gray-100 text-gray-900 font-medium"
          >
            Products
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Features
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Screenshots
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Support
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Link
            href="#"
            className="text-gray-900 font-medium px-4 py-2 rounded transition hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            href="#"
            className="border border-gray-900 text-gray-900 font-medium px-6 py-2 rounded-full transition hover:bg-gray-900 hover:text-white"
          >
            Get Started Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
