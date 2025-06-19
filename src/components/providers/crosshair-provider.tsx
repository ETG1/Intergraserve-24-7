"use client";

import React from 'react';
import Crosshair from '@/components/ui/Crosshair';
import { useCrosshair } from '@/hooks/useCrosshair';

interface CrosshairProviderProps {
  children: React.ReactNode;
}

export const CrosshairProvider: React.FC<CrosshairProviderProps> = ({ children }) => {
  useCrosshair();

  return (
    <>
      {children}
      <Crosshair
        color="#00ff00"
        hoverColor="#ff0000"
        size={24}
        thickness={2}
        flickerOnHover={true}
        className="tactical-crosshair"
      />
    </>
  );
};

export default CrosshairProvider;
