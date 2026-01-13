"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { isVisible, scrollProgress, elementRef } = useScrollAnimation(0.2);

  // Slower, more gradual fade-in
  const opacity = isVisible ? Math.min(1, scrollProgress * 1.2) : 0;
  const transform = `translateY(${(1 - scrollProgress) * 30}px)`;
  const blur = (1 - scrollProgress) * 5;

  return (
    <section 
      ref={elementRef as any}
      className="py-20 px-4 bg-space-navy/50 backdrop-blur-sm"
    >
      <div 
        className="max-w-4xl mx-auto"
        style={{
          opacity,
          transform,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out',
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-space-light">
          About Orbit Marketing
        </h2>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Orbit Marketing supports growing brands by providing structured marketing strategies and hands-on execution. We help clients connect with their audiences in a way that is clear, professional, and sustainable.
          </p>
          
          <p>
            Our focus is on building reliable processes that support growth over time. We're looking for passionate individuals who are ready to learn and grow with us.
          </p>
          
          <div className="mt-8 p-6 bg-space-dark/50 rounded-lg border border-space-accent/20">
            <h3 className="text-2xl font-semibold mb-4 text-space-accent">
              What We're Looking For
            </h3>
            <p className="text-gray-300">
              We welcome candidates interested in entry-level positions across marketing, sales, and brand management. Whether you're just starting your career or looking to transition into marketing, we provide the training and support you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}