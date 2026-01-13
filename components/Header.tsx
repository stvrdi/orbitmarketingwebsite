"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoPosition, setLogoPosition] = useState({ x: -160, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading after scrolling 100px, fully faded at 400px
      const fadeStart = 100;
      const fadeEnd = 400;
      const progress = Math.min(1, Math.max(0, (scrollPosition - fadeStart) / (fadeEnd - fadeStart)));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoOpacity = 1 - scrollProgress;

  const scrollToForm = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const form = document.getElementById("application-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    if (logoRef.current) {
      const header = logoRef.current.closest('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        dragStart.current = {
          x: e.clientX - headerRect.left - logoPosition.x,
          y: e.clientY - headerRect.top - logoPosition.y
        };
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current && logoRef.current) {
        e.preventDefault();
        const header = logoRef.current.closest('header');
        if (header) {
          const headerRect = header.getBoundingClientRect();
          setLogoPosition(prev => ({
            x: e.clientX - headerRect.left - dragStart.current.x,
            y: e.clientY - headerRect.top - dragStart.current.y
          }));
        }
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Always attach listeners - they check isDragging.current internally
    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array - listeners are always attached

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-96 md:h-[448px] overflow-visible border-0 bg-transparent">
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
      
      {/* Logo positioned in top left, centered vertically - DRAGGABLE */}
      {/* Click and drag to move the logo */}
      <div className="relative h-full flex items-center justify-between w-full px-8" style={{ zIndex: 100 }}>
        <div 
          ref={logoRef}
          className="relative w-[720px] h-[720px] md:w-[1008px] md:h-[1008px] lg:w-[1152px] lg:h-[1152px] flex items-center justify-center cursor-move"
          style={{ 
            opacity: logoOpacity,
            position: 'absolute',
            top: '50%',
            left: `${logoPosition.x}px`,
            transform: `translateY(calc(-50% + ${logoPosition.y}px))`,
            pointerEvents: 'auto',
            zIndex: 1000,
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            touchAction: 'none'
          }}
          onMouseDown={handleMouseDown}
          draggable={false}
        >
          <Image
            src="/logo.png"
            alt="Orbit Marketing Logo"
            width={1152}
            height={1152}
            className="object-contain w-full h-full pointer-events-none"
            style={{ transform: 'rotate(-30deg)' }}
            priority
            unoptimized
            draggable={false}
            onError={(e) => {
              console.error('Logo failed to load');
            }}
          />
        </div>

        {/* Slogan and CTA Button - positioned to the right */}
        <div 
          className="flex flex-col items-end justify-center gap-4 ml-auto relative z-10"
          style={{ 
            opacity: logoOpacity,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-space-light text-right">
            Launching Brands Into Their Next Phase
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-space-accent to-space-purple text-white font-semibold rounded-lg text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-space-accent/50"
            aria-label="Get started with your application"
          >
            Get Started
          </button>

          {/* Supporting text */}
          <p className="text-sm md:text-base text-gray-300 text-right max-w-md">
            Join our team and help growing brands connect with their audiences through clear, professional, and sustainable marketing strategies.
          </p>
        </div>
      </div>
    </header>
  );
}
