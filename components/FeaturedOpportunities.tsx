"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const jobCategories = [
  {
    title: "Entry Level Director of Marketing",
    description: "Learn marketing strategy and execution from the ground up. Perfect for those starting their marketing career.",
    icon: "🚀",
  },
  {
    title: "Entry Level Sales Associate",
    description: "Develop sales skills while helping brands grow. Training provided for motivated individuals.",
    icon: "💼",
  },
  {
    title: "Brand Manager Trainee",
    description: "Work directly with brands to build their presence. Ideal for creative problem-solvers.",
    icon: "⭐",
  },
];

export default function FeaturedOpportunities() {
  const { isVisible, scrollProgress, elementRef } = useScrollAnimation(0.2);

  // Slower, more gradual fade-in
  const opacity = isVisible ? Math.min(1, scrollProgress * 1.2) : 0;
  const transform = `translateY(${(1 - scrollProgress) * 30}px)`;
  const blur = (1 - scrollProgress) * 5;

  return (
    <section 
      ref={elementRef as any}
      className="py-20 px-4"
    >
      <div 
        className="max-w-6xl mx-auto"
        style={{
          opacity,
          transform,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out',
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-space-light">
          Featured Opportunities
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Explore entry-level positions designed for growth and learning
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {jobCategories.map((job, index) => (
            <div
              key={index}
              className="bg-space-navy/70 backdrop-blur-sm p-8 rounded-lg border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-space-accent/20 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{job.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-space-light">
                {job.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-400 text-sm italic">
          * These are example categories. Specific positions may vary based on current openings.
        </p>
      </div>
    </section>
  );
}