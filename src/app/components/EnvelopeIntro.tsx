'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

const idleShake = {
  animate: {
    rotate: [0, -1, 1, -0.6, 0.6, 0],
    transition: {
      duration: 4,
      // ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};


export const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);

    // chờ animation xong rồi mở trang
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="
            fixed inset-0 z-[999]
            bg-bg
            flex items-center justify-center
            cursor-pointer
          "
        >
          <motion.div
            onClick={handleOpen}
            initial={{ scale: 1, filter: 'brightness(1)' }}
            animate={
              opening
                ? { scale: 1.06, filter: 'brightness(1.15)' }
                : {}
            }
            transition={{ duration: 1.1, }}
            className="cursor-pointer text-center"
          >
            <motion.img
              src="/images/envelope.png"
              alt="envelope"
              variants={idleShake}
              animate="animate"
              className="mx-auto"
            />

            <p className="mt-6 text-xs tracking-widest uppercase text-text/70">
              Chạm để mở thiệp
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
