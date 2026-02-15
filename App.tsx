import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import ValentineCard from './components/ValentineCard';
import MusicPlayer from './components/MusicPlayer';
import AcceptanceScreen from './components/AcceptanceScreen';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background Hearts Animation */}
      <FloatingHearts />

      {/* Main Content Flow */}
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="acceptance"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <AcceptanceScreen onAccept={() => setAccepted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 pt-10 pb-20"
          >
            <ValentineCard />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Player - Starts playing after acceptance */}
      {accepted && <MusicPlayer autoPlay={true} />}
    </div>
  );
};

export default App;