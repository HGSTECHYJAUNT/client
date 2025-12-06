"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface CourseCardProps {
  title: string;
  category: string;
  instructor: string;
  progress?: number;
  status?: "continue" | "start";
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  instructor,
  progress = 0,
  status = "start",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Course image placeholder */}
      <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-10">{"</>"}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="mb-3">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {category}
          </span>
        </div>
        <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
          {instructor}
        </p>

        {/* Progress bar */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">{progress}% Complete</span>
              <span className="text-xs font-semibold text-purple-400">{progress}%</span>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        )}

        {/* Action button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
        >
          {status === "continue" ? "Continue" : "Start Course"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
