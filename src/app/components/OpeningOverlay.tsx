'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface OpeningOverlayProps {
  onStart: () => void;
  visible: boolean;
}

export const OpeningOverlay = ({
  onStart,
  visible,
}: OpeningOverlayProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="
            fixed inset-0 z-[999]
            bg-bg
            flex items-center justify-center
            text-center
          "
          onClick={onStart}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-script text-4xl text-primary">
              Chạm để mở thiệp
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-text/70">
              Tap to open invitation
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
