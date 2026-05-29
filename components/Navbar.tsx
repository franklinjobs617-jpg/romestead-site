"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/wiki", label: "Wiki" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-obsidian/95 backdrop-blur-sm border-b border-stone-medium">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-cinzel text-xl font-bold text-ember hover:text-ember-dark transition-colors"
          >
            ROMESTEAD GUIDE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-item font-cinzel text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search guides..."
              className="input w-64 text-sm"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-parchment"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 nav-item font-cinzel text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <input
              type="text"
              placeholder="Search guides..."
              className="input w-full text-sm mt-4"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
