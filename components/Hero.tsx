"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = heroSection.offsetTop;
      const scrollPosition = window.scrollY;
      
      // Calculate progress based on scroll position within the hero section
      // Start transition much later - when user scrolls 60% of viewport height
      // Complete transition at 150% of viewport height (much longer transition range)
      const startPoint = sectionTop + windowHeight * 0.6;
      const endPoint = sectionTop + windowHeight * 1.5;
      const scrollInHero = scrollPosition - startPoint;
      const transitionRange = endPoint - startPoint;
      
      const progress = Math.min(1, Math.max(0, scrollInHero / transitionRange));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section 
      id="hero-section"
      className="relative min-h-[200vh] flex flex-col items-center justify-start px-4 py-20 overflow-x-hidden"
    >
      {/* Animated gradient overlay with nebula effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-purple/20 via-transparent to-space-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-space-blue/10 to-space-purple/10 animate-nebula-shift"></div>
      
      {/* Animated floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-space-light rounded-full animate-star-float-1 shadow-lg shadow-space-light/50"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-space-accent rounded-full animate-star-float-2 shadow-lg shadow-space-accent/50"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-space-light rounded-full animate-star-float-3 shadow-lg shadow-space-light/50"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-white rounded-full animate-star-float-4"></div>
        <div className="absolute bottom-60 right-1/4 w-1.5 h-1.5 bg-space-accent rounded-full animate-star-float-5 shadow-lg shadow-space-accent/50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-space-light rounded-full animate-star-float-6"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-star-float-7 shadow-lg shadow-white/50"></div>
        
        {/* Shooting stars */}
        <div className="absolute top-1/4 left-0 w-1 h-40 bg-gradient-to-b from-transparent via-white to-transparent opacity-60 animate-shooting-star-1"></div>
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-space-accent to-transparent opacity-50 animate-shooting-star-2"></div>
      </div>
      
      {/* Spacer to create scroll distance */}
      <div className="h-screen flex items-center justify-center relative z-10 pt-32 md:pt-36">
      </div>
    </section>
  );
}