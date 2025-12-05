"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LearningCardProps {
  title: string;
  category: string;
  instructor: string;
  role: string;
  progress?: number;
  status?: "continue" | "start";
}

const LearningCard: React.FC<LearningCardProps> = ({
  title,
  category,
  instructor,
  role,
  progress = 0,
  status = "start",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Course Image/Thumbnail */}
      <div className="relative h-48 bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white/10">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Code-like overlay effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="text-[8px] text-white/40 font-mono p-4 leading-relaxed">
            {`const learning = () => {\n  return skills.map(skill => {\n    practice(skill);\n  });\n}`}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700 uppercase tracking-wide">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-4 line-clamp-2 leading-snug min-h-12">
          {title}
        </h3>

        {/* Instructor Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-md shadow-[#4B19E6]/30 font-medium flex items-center justify-center text-xs shrink-0">
            {instructor?.charAt(0) || "I"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{instructor}</p>
            <p className="text-xs text-gray-500 truncate">{role}</p>
          </div>
        </div>

        {/* Progress Bar (if status is continue) */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-linear-to-r from-purple-600 to-blue-600 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-md shadow-[#4B19E6]/30"
        >
          {status === "continue" ? "Continue" : "Start Course"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LearningCard;
