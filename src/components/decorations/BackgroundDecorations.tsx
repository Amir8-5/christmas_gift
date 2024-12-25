import React from 'react';
import { Gift, CandyCane, Bell, Star, TreePine, Snowflake, Heart } from 'lucide-react';

const decorations = [
  { Icon: Gift, color: 'text-red-400/30', size: 32 },
  { Icon: CandyCane, color: 'text-red-400/30', size: 32 },
  { Icon: Bell, color: 'text-yellow-400/30', size: 28 },
  { Icon: Star, color: 'text-yellow-400/30', size: 24 },
  { Icon: TreePine, color: 'text-green-400/30', size: 36 },
  { Icon: Snowflake, color: 'text-white/30', size: 24 },
  { Icon: Heart, color: 'text-red-400/30', size: 24 }
];

const createRandomPositions = (count: number) => {
  const positions = [];
  const usedPositions = new Set();

  for (let i = 0; i < count; i++) {
    let position;
    do {
      // Create a position with some padding from edges
      const left = 5 + Math.random() * 90;
      const top = 5 + Math.random() * 90;
      position = `${Math.round(left)},${Math.round(top)}`;
    } while (usedPositions.has(position));

    usedPositions.add(position);
    const [left, top] = position.split(',');

    positions.push({
      left: `${left}%`,
      top: `${top}%`,
      transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2
    });
  }
  return positions;
};

export const BackgroundDecorations = () => {
  // Generate 15-20 random decorations
  const positions = createRandomPositions(15 + Math.floor(Math.random() * 5));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {positions.map((position, index) => {
        const decoration = decorations[index % decorations.length];
        return (
          <div
            key={index}
            className={`absolute ${decoration.color} animate-pulse transition-all duration-1000 hover:scale-110`}
            style={{
              ...position,
              animationDelay: `${position.delay}s`,
              animationDuration: `${position.duration}s`
            }}
          >
            <decoration.Icon 
              size={decoration.size} 
              className="transition-transform hover:rotate-12"
            />
          </div>
        );
      })}
    </div>
  );
};