import React from 'react';
import { motion } from 'framer-motion';

const GradientButton: React.FC<{ icon: React.ReactElement; url: string }> = ({
  icon,
  url,
}) => {
  return (
    <motion.a
      className='transition-all bg-gradient-to-r to-[#5f2387] from-[#1669b2] hover:to-[#7d2bb3] hover:from-[#1b78ca] rounded-lg shadow-md shadow-[#333333] p-2'
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {icon}
    </motion.a>
  );
};

export default GradientButton;
