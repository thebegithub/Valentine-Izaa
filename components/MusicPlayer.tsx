import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Lagu: "Kota Ini Tak Sama Tanpamu" 
  // PASTIKAN file mp3 ada di folder 'public' dengan nama yang TEPAT: kota_ini_tak_sama_tanpamu.mp3
  const AUDIO_URL = "/kota_ini_tak_sama_tanpamu.mp3";

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Autoplay prevented by browser interaction policy", e);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border-2 border-cinna-blue"
    >
      <audio ref={audioRef} src={AUDIO_URL} loop />

      {/* Visualizer bars animation */}
      {isPlaying && !isMuted && (
        <div className="flex items-end gap-[2px] h-4 mx-1">
          {[1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              animate={{ height: [4, 16, 8, 12, 4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: bar * 0.1
              }}
              className="w-1 bg-cinna-blue rounded-full"
            />
          ))}
        </div>
      )}

      <button
        onClick={togglePlay}
        className="p-2 text-cinna-blue hover:bg-cinna-light rounded-full transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button
        onClick={toggleMute}
        className="p-2 text-cinna-pink hover:text-cinna-blue hover:bg-cinna-light rounded-full transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;