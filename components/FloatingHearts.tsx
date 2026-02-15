import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  // Create an array of random elements (clouds and hearts)
  const elements = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 20,
    size: 20 + Math.random() * 40,
    type: Math.random() > 0.6 ? 'heart' : 'cloud', // More clouds for Cinna theme
    color: Math.random() > 0.5 ? '#89CFF0' : '#FFFFFF', // Blue or White
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: '110vh', x: `${el.x}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0],
            rotate: el.type === 'heart' ? [0, 20, -20, 0] : 0, // Hearts wiggle, clouds float straight
            x: [`${el.x}vw`, `${el.x + (Math.random() * 10 - 5)}vw`] // Horizontal drift
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            width: el.size,
            height: el.size,
            color: el.color,
            filter: 'drop-shadow(0px 2px 4px rgba(137, 207, 240, 0.3))'
          }}
        >
          {el.type === 'cloud' ? (
             <Cloud fill="currentColor" strokeWidth={0} className="w-full h-full opacity-80" />
          ) : (
             <Heart fill="currentColor" strokeWidth={0} className="w-full h-full text-cinna-pink" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;