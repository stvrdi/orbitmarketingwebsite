"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollAnimation(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Element is visible when it's in the viewport
      const viewportTop = windowHeight * threshold;
      const viewportBottom = windowHeight * (1 - threshold);
      
      // Calculate scroll progress (0 to 1)
      // Start animation when element enters viewport (more gradual)
      // Complete when element is well into viewport
      const elementCenter = elementTop + elementHeight / 2;
      const viewportCenter = windowHeight * 0.5;
      
      // Start when element top is at 80% of viewport (element just entering)
      // Complete when element center reaches viewport center
      const startPoint = windowHeight * 0.8;
      const endPoint = viewportCenter;
      
      if (elementTop < viewportBottom && elementTop + elementHeight > viewportTop) {
        setIsVisible(true);
        
        // Calculate progress more gradually
        // Element starts animating when its top reaches 80% of viewport
        // Completes when center reaches viewport center
        const scrollDistance = Math.abs(startPoint - endPoint);
        const currentPosition = startPoint - elementTop;
        
        // Only start calculating progress when element has entered enough
        if (elementTop <= startPoint) {
          const rawProgress = Math.min(1, Math.max(0, (startPoint - elementTop) / scrollDistance));
          // Apply easing for smoother, slower transition
          const easedProgress = rawProgress < 0.5 
            ? 2 * rawProgress * rawProgress 
            : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;
          setScrollProgress(easedProgress);
        } else {
          setScrollProgress(0);
        }
      } else if (elementTop + elementHeight < viewportTop) {
        // Element has scrolled past
        setIsVisible(true);
        setScrollProgress(1);
      } else {
        setIsVisible(false);
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isVisible, scrollProgress, elementRef };
}