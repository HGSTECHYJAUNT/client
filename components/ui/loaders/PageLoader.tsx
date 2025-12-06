"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
        />
      </div>

      {/* Loading animation */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Animated circles */}
        <div className="relative w-24 h-24">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-transparent rounded-full"
              style={{
                borderTopColor: `hsl(${200 + index * 60}, 100%, 60%)`,
                borderRightColor: `hsl(${200 + index * 60}, 100%, 60%)`,
              }}
            />
          ))}

          {/* Center pulsing dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-center"
        >
          <p className="text-white font-semibold text-lg tracking-widest">Loading</p>
          <motion.p
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-gray-400 text-sm mt-2"
          >
            Preparing your experience...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;
