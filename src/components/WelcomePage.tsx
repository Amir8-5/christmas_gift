import React from 'react';
import { Snowfall } from './Snowfall';
import { ChristmasTree } from './ChristmasTree';
import { BackgroundDecorations } from './decorations/BackgroundDecorations';

export const WelcomePage = () => (
  <div className="snap-start h-screen relative flex items-center justify-center bg-gradient-to-b from-red-950 to-red-900">
    <Snowfall />
    <BackgroundDecorations />
    <div className="relative z-10 text-center mt-[-10vh]">
      <h1 className="font-christmas text-8xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Merry Christmas
      </h1>
      <ChristmasTree />
      <p className="text-2xl text-white font-christmas">Scroll down to begin ↓</p>
    </div>
    <div 
      className="absolute inset-0 z-0 opacity-20 christmas-card-shadow"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544665215-e8c1a46cec7b?auto=format&fit=crop&q=80&w=1200')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  </div>
);