'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CopyAccountButtonProps {
  value: string; // số tài khoản
  label?: string;
}

export const CopyAccountButton = ({
  value,
  label = 'Sao chép STK',
}: CopyAccountButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className="
        mt-4
        inline-flex items-center gap-2
        rounded-full
        border border-primary/20
        px-4 py-2
        text-xs
        tracking-widest
        uppercase
        text-white
        bg-primary leading-4
        transition
        cursor-pointer
      "
    >
      {copied ? 'Đã sao chép ✓' : label}
    </motion.button>
  );
};
