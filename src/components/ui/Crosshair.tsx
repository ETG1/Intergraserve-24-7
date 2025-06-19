"use client";

import React, { useState, useEffect, useRef } from 'react';

interface CrosshairProps {
  containerRef?: React.RefObject<HTMLElement>;
  color?: string;
  hoverColor?: string;
  size?: number;
  thickness?: number;
  flickerOnHover?: boolean;
  className?: string;
}

const Crosshair: React.FC<CrosshairProps> = ({
  containerRef,
  color = '#00ff00',
  hoverColor = '#ff0000',
  size = 20,
  thickness = 2,
  flickerOnHover = true,
  className = ''
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [currentTarget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [isFlickering, setIsFlickering] = useState(false);
  const crosshairRef = useRef<HTMLDivElement>(null);

  // Single flicker effect when entering or leaving interactive elements
  useEffect(() => {
    if (!flickerOnHover || isFlickering) {
      return;
    }

    // Flicker when hovering state changes (entering or leaving interactive elements)
    setIsFlickering(true);

    // Simple single flicker: hide briefly then show
    setTimeout(() => {
      setIsFlickering(false);
    }, 150); // Quick flicker duration

  }, [isHovering, flickerOnHover]); // Trigger when hovering state changes

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const container = containerRef?.current || document.body;
      const rect = container.getBoundingClientRect();

      setPosition({
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      });

      // Check if hovering over interactive elements
      const target = mouseEvent.target as HTMLElement;
      const interactiveElement = target.matches('button, a, [role="button"], input, select, textarea, .cursor-pointer')
        ? target
        : target.closest('button, a, [role="button"], input, select, textarea, .cursor-pointer') as HTMLElement;

      // Always update the current target and hovering state
      const newTarget = interactiveElement || null;
      const newIsHovering = !!interactiveElement;

      // Update if target or hovering state changes
      if (newTarget !== currentTarget || newIsHovering !== isHovering) {
        setCurrentTarget(newTarget);
        setIsHovering(newIsHovering);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setCurrentTarget(null);
      setIsFlickering(false);
    };

    const container = containerRef?.current || document;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  if (!isVisible || isFlickering) return null;

  // Use red color when hovering, green when not
  const currentColor = isHovering ? hoverColor : color;

  const crosshairStyle: React.CSSProperties = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    width: size,
    height: size,
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: isHovering ? 'none' : 'opacity 0.2s ease',
  };

  return (
    <div
      ref={crosshairRef}
      className={`crosshair ${className}`}
      style={crosshairStyle}
    >
      {/* Outer tactical ring */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: size * 2,
          height: size * 2,
          border: `1px solid ${currentColor}`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.6 : 0.3,
          boxShadow: `0 0 20px ${currentColor}`,
        }}
      />

      {/* Tactical corner brackets */}
      {[0, 90, 180, 270].map((rotation, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: size * 0.8,
            height: size * 0.8,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            opacity: isHovering ? 0.9 : 0.6,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: size * 0.3,
              height: thickness,
              backgroundColor: currentColor,
              boxShadow: `0 0 8px ${currentColor}`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: thickness,
              height: size * 0.3,
              backgroundColor: currentColor,
              boxShadow: `0 0 8px ${currentColor}`,
            }}
          />
        </div>
      ))}

      {/* Main crosshair lines */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: size,
          height: thickness,
          backgroundColor: currentColor,
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 12px ${currentColor}`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: thickness,
          height: size,
          backgroundColor: currentColor,
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 12px ${currentColor}`,
        }}
      />

      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: thickness * 3,
          height: thickness * 3,
          backgroundColor: currentColor,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 15px ${currentColor}`,
          opacity: isHovering ? 1 : 0.8,
        }}
      />
    </div>
  );
};

export default Crosshair;
