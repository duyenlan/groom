'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface MusicButtonProps {
  playing: boolean;
  onToggle: () => void;
}

export const MusicButton = ({ playing, onToggle }: MusicButtonProps) => {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 left-6 z-[99]
        w-14 h-14 rounded-full bg-white
        shadow-xl border-2 border-primary/20
        flex items-center justify-center
      "
    >

      {playing && (
        <div className="
          pulse-ring absolute inset-0 rounded-full border-2
          border-primary/40 animate-pulse-slow
        "></div>
      )}
      {/* Pulse */}
      {playing && (
        <span className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-slow" />
      )}

      <Image
        src="/svg/music-441.svg"
        alt="music"
        width={20}
        height={20}
        className={playing ? 'animate-spin-slow' : ''}
      />
    </motion.button>
  );
};
