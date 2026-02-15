import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import cinnamorollMain from '../assets/cinnamoroll-utama.png'; // Import image directly

interface AcceptanceScreenProps {
  onAccept: () => void;
}

const AcceptanceScreen: React.FC<AcceptanceScreenProps> = ({ onAccept }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);

  // Function to move the button to a random position
  const moveButton = () => {
    setIsMoved(true);
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Constrain movement to 80% of screen to keep it accessible occasionally
    const maxMoveX = width * 0.8;
    const maxMoveY = height * 0.8;

    const randomX = (Math.random() - 0.5) * maxMoveX;
    const randomY = (Math.random() - 0.5) * maxMoveY;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full z-30 relative px-4 overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(137,207,240,0.4)] border-4 border-white max-w-md w-full text-center relative z-10 overflow-visible"
      >
        {/* Decorative Floating Elements */}

        {/* Top Right - Flying */}
        <div className="absolute -top-16 -right-16 w-36 h-36 z-0 opacity-80 animate-bounce-slow delay-700 pointer-events-none">
          <img
            src="https://media.tenor.com/JZHkKykMhSAAAAAi/cinnamoroll-sanrio.gif"
            alt="Cinnamoroll Flying"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Left - Shy */}
        <div className="absolute -bottom-12 -left-12 w-32 h-32 z-20 pointer-events-none">
          <img
            src="https://media.tenor.com/gK9C6bNq2MAAAAAi/cinnamoroll-cry.gif"
            alt="Cinnamoroll Shy"
            className="w-full h-full object-contain opacity-90"
          />
        </div>

        {/* Top Left - Dancing/Happy */}
        <div className="absolute -top-20 -left-10 w-28 h-28 z-0 opacity-70 animate-float delay-1000 pointer-events-none">
          <img
            src="https://media.tenor.com/Etl3c0g1nukAAAAi/cinnamoroll-dance.gif"
            alt="Cinnamoroll Dancing"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right - Peek */}
        <div className="absolute -bottom-10 -right-8 w-24 h-24 z-20 opacity-80 animate-bounce delay-500 pointer-events-none">
          <img
            src="https://media.tenor.com/1XkP6n9m2QAAAAAi/cinnamoroll-peek.gif"
            alt="Cinnamoroll Peeking"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-8 mb-6 relative z-10">
          {/* Centerpiece Image - Glowing Effect */}
          <div className="absolute inset-0 bg-cinna-blue/20 blur-[40px] rounded-full scale-90 transform translate-y-4"></div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={cinnamorollMain}
              alt="Cinnamoroll Super Cute"
              className="w-48 h-48 mx-auto object-contain drop-shadow-xl"
              onError={(e) => {
                // Fallback to GIF if local file somehow fails
                e.currentTarget.src = "https://media.tenor.com/Nd5y7_kX2cEAAAAi/cinnamoroll-cute.gif";
                e.currentTarget.onerror = null;
              }}
            />
          </motion.div>
        </div>

        <h1 className="font-script font-bold text-5xl text-cinna-dark mb-2 tracking-wide drop-shadow-sm">Hai Izaa Cantik! ☁️</h1>
        <p className="font-cute text-lg text-slate-500 mb-8 leading-relaxed font-medium px-4">
          Ada pesan spesial yang dianterin <span className="text-cinna-blue font-bold">Cinnamoroll</span> buat kamu.<br />
          Dibaca yaaa?
        </p>

        <div className="flex flex-col gap-4 items-center justify-center relative min-h-[120px]">
          <button
            onClick={onAccept}
            className="group bg-gradient-to-r from-cinna-blue to-blue-400 hover:from-blue-400 hover:to-cinna-blue text-white font-bold py-4 px-12 rounded-full shadow-[0_8px_20px_rgba(56,189,248,0.4)] hover:shadow-[0_4px_10px_rgba(56,189,248,0.4)] hover:-translate-y-1 transition-all duration-300 z-20 text-xl flex items-center gap-3 active:scale-95"
          >
            <Star fill="white" size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>Mau Dong!</span>
          </button>

          <motion.div
            className="relative h-12 w-full flex justify-center items-center"
          >
            <motion.button
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={moveButton}
              animate={isMoved ? {
                x: position.x,
                y: position.y,
                position: 'fixed'
              } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-slate-100 text-slate-400 font-bold py-3 px-8 rounded-full text-sm hover:bg-slate-200 transition-colors shadow-sm ${isMoved ? 'z-50' : ''}`}
            >
              Nggak Ah
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcceptanceScreen;