import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  animation?: 'pulse' | 'bounce' | 'spin' | 'hover';
}

export function AnimatedIcon({ icon: Icon, className = '', animation = 'hover' }: AnimatedIconProps) {
  const animations = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0.2
      },
      whileHover: {
        scale: 1.1,
        transition: {
          duration: 0.2
        }
      }
    }
  };

  return (
    <motion.div
      animate={animations[animation]}
      whileHover={animation === 'hover' ? { scale: 1.1 } : undefined}
      className={className}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
}