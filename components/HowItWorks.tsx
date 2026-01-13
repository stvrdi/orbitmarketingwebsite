"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Submit Your Application",
    description: "Fill out our simple application form with your contact information and resume.",
  },
  {
    number: "2",
    title: "We Review Your Profile",
    description: "Our team reviews your application and matches you with suitable opportunities.",
  },
  {
    number: "3",
    title: "Next Steps",
    description: "If selected, we'll reach out to discuss next steps and answer any questions.",
  },
];

export default function HowItWorks() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-space-light">
          How the Application Process Works
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Simple, straightforward, and designed to get you started quickly
        </p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-6 bg-space-dark/50 rounded-lg border border-space-accent/20"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-space-accent to-space-purple flex items-center justify-center text-2xl font-bold text-white">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-space-light">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}