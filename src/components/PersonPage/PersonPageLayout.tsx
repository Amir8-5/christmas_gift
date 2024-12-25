import React from 'react';
import { PersonPageProps } from './types';
import { BackgroundDecorations } from '../decorations/BackgroundDecorations';

export const PersonPageLayout: React.FC<PersonPageProps> = ({ 
  name, 
  description, 
  images, 
  index = 0 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 ${
      isEven 
        ? 'bg-gradient-to-b from-red-950 to-red-900' 
        : 'bg-gradient-to-b from-green-950 to-green-900'
    }`}>
      <BackgroundDecorations />
      <h2 className="text-4xl font-christmas font-bold text-yellow-400 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] relative z-10">
        {name}
      </h2>
      <div className="flex gap-8 items-center max-w-6xl w-full relative z-10">
        <div className="w-1/4">
          {images[0] && (
            <div className="relative group">
              <div className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-xl group-hover:bg-yellow-400/30 transition-all"></div>
              <img
                src={images[0]}
                alt={`${name}'s first photo`}
                className="relative w-full h-64 object-cover rounded-lg shadow-xl christmas-card-shadow"
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-white text-xl leading-relaxed text-center font-christmas">
            {description}
          </p>
        </div>
        <div className="w-1/4">
          {images[1] && (
            <div className="relative group">
              <div className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-xl group-hover:bg-yellow-400/30 transition-all"></div>
              <img
                src={images[1]}
                alt={`${name}'s second photo`}
                className="relative w-full h-64 object-cover rounded-lg shadow-xl christmas-card-shadow"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};