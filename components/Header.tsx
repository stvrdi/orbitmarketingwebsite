"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Start fading after scrolling 100px, fully faded at 400px
      const fadeStart = 100;
      const fadeEnd = 400;
      const progress = Math.min(1, Math.max(0, (scrollPosition - fadeStart) / (fadeEnd - fadeStart)));
      
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll(); // Initial call
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoOpacity = 1 - scrollProgress;

  const scrollToForm = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const form = document.getElementById("application-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-48 md:h-[448px] overflow-visible border-0 bg-transparent">
      {/* Starry background overlay - fully transparent */}
      {/* <div className="absolute inset-0 bg-space-dark/50 backdrop-blur-sm pointer-events-none"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-space-purple/10 via-transparent to-transparent pointer-events-none"></div> */}
      
      {/* Animated floating stars in header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-20 w-1 h-1 bg-space-light rounded-full animate-star-float-4"></div>
        <div className="absolute top-8 right-32 w-1.5 h-1.5 bg-space-accent rounded-full animate-star-float-5"></div>
        <div className="absolute top-12 left-1/3 w-1 h-1 bg-white rounded-full animate-star-float-6"></div>
        <div className="absolute top-6 right-1/4 w-1 h-1 bg-space-light rounded-full animate-star-float-4"></div>
      </div>
      
      {/* Logo and content container */}
      <div className="relative h-full flex flex-col md:flex-row items-center md:items-center w-full px-4 md:px-8" style={{ zIndex: 100 }}>
        {/* Logo positioned in top left, centered vertically - FIXED POSITION */}
        <div 
          className="relative w-96 h-96 md:w-[960px] md:h-[960px] lg:w-[1152px] lg:h-[1152px] flex items-center justify-center flex-shrink-0 md:absolute md:left-0"
          style={{ 
            opacity: logoOpacity,
            transform: isDesktop 
              ? 'rotate(-30deg) translateX(-1in) translateY(2in)' 
              : 'rotate(-30deg)',
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <Image
            src="/logo.png"
            alt="Orbit Marketing Logo"
            width={1152}
            height={1152}
            className="object-contain w-full h-full"
            priority
            unoptimized
            draggable={false}
            onError={(e) => {
              console.error('Logo failed to load');
            }}
          />
        </div>

        {/* Slogan and CTA Button - positioned to the left with proper spacing */}
        <div 
          className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-4 ml-0 relative z-10 mt-24 md:mt-0 w-full md:w-auto md:max-w-2xl md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2"
          style={{ 
            opacity: logoOpacity,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          {/* Tagline */}
          <p className="text-sm md:text-2xl lg:text-3xl font-light text-space-light text-center md:text-left md:w-full">
            Launching Brands Into Their Next Phase
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-space-accent to-space-purple text-white font-semibold rounded-lg text-xs md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-space-accent/50 whitespace-nowrap"
            aria-label="Get started with your application"
          >
            Get Started
          </button>

          {/* Supporting text - shown on all screen sizes */}
          <p className="text-xs md:text-base text-gray-300 text-center md:text-left max-w-md md:max-w-none md:w-full">
            Join our team and help growing brands connect with their audiences through clear, professional, and sustainable marketing strategies.
          </p>
        </div>
      </div>
    </header>
  );
}
