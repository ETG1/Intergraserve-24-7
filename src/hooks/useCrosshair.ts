"use client";

import { useEffect } from 'react';

export const useCrosshair = () => {
  useEffect(() => {
    // Hide default cursor on the body
    document.body.style.cursor = 'none';
    
    // Add crosshair-active class to body for styling
    document.body.classList.add('crosshair-active');

    return () => {
      // Restore default cursor
      document.body.style.cursor = 'auto';
      document.body.classList.remove('crosshair-active');
    };
  }, []);
};

export default useCrosshair;
