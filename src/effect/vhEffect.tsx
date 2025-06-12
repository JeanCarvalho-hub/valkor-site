// components/VHFix.tsx
'use client';

import { useEffect } from 'react';

export default function VHFix() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh(); // define inicialmente
    window.addEventListener('resize', setVh); // atualiza em resize

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return null;
}
