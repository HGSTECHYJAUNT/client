"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";

interface LearningCardProps {
  title: string;
  category: string;
  instructor: string;
  rating?: number;
  progress?: number;
  status?: "continue" | "start";
}

const LearningCard: React.FC<LearningCardProps> = ({
  title,
  category,
  instructor,
  rating = 4.8,
  progress = 0,
  status = "start",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900" />

      {/* Course image placeholder */}
      <div className="relative h-40 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-linear-to-r from-blue-500/30 to-purple-500/30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl opacity-20">▶</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="mb-3">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {category}
          </span>
        </div>
        <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 gap-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-linear-to-br from-blue-400 to-purple-500" />
            <span className="truncate">{instructor}</span>
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-3 h-3 fill-current" />
              {rating}
            </div>
          )}
        </div>

        {/* Progress bar if status is continue */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-linear-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        )}

        {/* Action button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
        >
          {status === "continue" ? "Continue" : "Start Course"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LearningCard;
