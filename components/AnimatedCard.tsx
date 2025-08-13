'use client';

import { useEffect, useRef, useState } from 'react';
import SkeletonCard from './SkeletonCard';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  skeletonVariant?: 'default' | 'stats' | 'method' | 'large';
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  skeletonVariant = 'default'
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [hasTriggered, setHasTriggered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Short skeleton display then animate to real content
          setTimeout(() => {
            setShowSkeleton(false);
            // Small delay for smooth transition
            requestAnimationFrame(() => {
              setTimeout(() => setIsVisible(true), 50);
            });
          }, Math.max(300, delay * 100)); // Minimum 300ms skeleton display
        }
      },
      { threshold: 0.1 }
    );

    // Always observe the wrapper element
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasTriggered]);

  return (
    <div ref={cardRef} className="w-full">
      {showSkeleton ? (
        <SkeletonCard className={className} variant={skeletonVariant} />
      ) : (
        <div
          className={`card ${className} transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}