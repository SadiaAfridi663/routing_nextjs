"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[#1290a4]" />
          <span className="text-lg font-semibold text-gray-900">Shades</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-[16px] text-gray-600">
          <li><Link href="#">Free Landing Pages</Link></li>
          <li><Link href="#">Features</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm lg:text-[16px] text-gray-600 hover:text-gray-900">
            Sign In
          </Link>
          <button className="rounded-md bg-[#1290a4] px-5 py-2 text-sm lg:text-[16px] font-medium text-white hover:bg-[#0f7a8b] transition">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-gray-700" />
            <span className="block h-0.5 w-6 bg-gray-700" />
            <span className="block h-0.5 w-6 bg-gray-700" />
          </div>
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-gray-500 text-sm"
          >
            Close
          </button>

          <ul className="flex flex-col gap-4 text-gray-700">
            <li><Link href="#">Free Landing Pages</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>

          <button className="mt-6 rounded-md bg-[#1290a4] py-3 text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
