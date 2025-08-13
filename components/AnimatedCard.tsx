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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Show skeleton briefly then animate to real content
          setTimeout(() => {
            setShowSkeleton(false);
            setTimeout(() => setIsVisible(true), 100);
          }, delay * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  if (showSkeleton) {
    return <SkeletonCard className={className} variant={skeletonVariant} />;
  }

  return (
    <div
      ref={cardRef}
      className={`card ${className} transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );
}