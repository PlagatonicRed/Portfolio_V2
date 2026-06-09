"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const domRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollDirection, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  
  const trackingTransform = scrollDirection === "down" 
    ? "translate-y-14" 
    : "-translate-y-14";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform will-change-[opacity,transform]
        ${isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : `opacity-0 ${trackingTransform} scale-[0.98]`
        }`}
    >
      {children}
    </div>
  );
}