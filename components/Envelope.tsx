import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-20 relative">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="cursor-pointer relative group"
        onClick={onOpen}
      >
        <div className="relative w-80 h-52 bg-rose-200 rounded-b-xl shadow-2xl flex items-center justify-center border-2 border-rose-300">
          {/* Envelope Flap */}
          <motion.div 
            className="absolute top-0 left-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-t-[110px] border-t-rose-300 origin-top z-10 drop-shadow-lg"
            whileHover={{ rotateX: 180, zIndex: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          {/* Content Preview (Peek) */}
          <div className="absolute top-2 w-[90%] h-[90%] bg-white rounded shadow-sm z-0 flex items-center justify-center">
            <p className="font-script text-2xl text-rose-500">Untuk Kamu...</p>
          </div>

          {/* Seal */}
          <motion.div 
            className="absolute -top-4 z-20 bg-rose-600 text-white p-3 rounded-full shadow-lg border-2 border-white"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart fill="currentColor" size={32} />
          </motion.div>
        </div>
        
        <motion.p 
          className="text-center mt-8 text-rose-800 font-serif text-xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Klik untuk membuka surat
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Envelope;