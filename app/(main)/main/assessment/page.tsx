"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const AssessmentPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 px-4 py-6 sm:px-6"
    >
      <div className="flex items-center gap-4">
        <CheckSquare className="w-8 h-8 text-blue-900" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Skill Validation Assessment</h1>
          <p className="text-gray-400 mt-2">Test your knowledge and get certified</p>
        </div>
      </div>

      <div className="rounded-2xl bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-md shadow-[#4B19E6]/30 font-medium border border-blue-500/20 p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Assessment</h2>
        <p className="text-gray-300">More content coming soon...</p>
      </div>
    </motion.div>
  );
};

export default AssessmentPage;
