"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SetNameProps {
  onContinue: (name: string) => void;
}

const SetNamePage: React.FC<SetNameProps> = ({ onContinue }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onContinue(name);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1a0e3e] via-[#2d1b69] to-[#3C14B8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Element - Assessment Image */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 flex items-center justify-center opacity-60"
      >
        <Image
          src="/dashboard/assessment-image.png"
          alt="Assessment"
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Set your name
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-8"
          >
            What's your name?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3C14B8] focus:border-transparent transition-all text-lg"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full py-4 bg-[#3C14B8] text-white font-semibold rounded-xl hover:bg-[#160742] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SetNamePage;
