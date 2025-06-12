import React from 'react';
import { motion } from 'framer-motion';

const Button: React.FC<{ text: string; action: () => void; isSelected: boolean }> = ({
  text,
  action,
  isSelected = false
}) => {
  return (
    <motion.button
      className={`text-sm transition-all border border-blue-600 rounded px-2 py-1 z-10 ${isSelected ? 'border-none bg-gradient-to-r to-[#7d2bb3] from-[#1b78ca]' : 'hover:border-none hover:bg-gradient-to-r hover:to-[#7d2bb3] hover:from-[#1b78ca]'}`}
      onClick={action}
    >
      {text}
    </motion.button>
  );
};

export default Button;
