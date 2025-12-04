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
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <CheckSquare className="w-8 h-8 text-purple-400" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Skill Validation Assessment</h1>
          <p className="text-gray-400 mt-2">Test your knowledge and get certified</p>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Assessment</h2>
        <p className="text-gray-300">More content coming soon...</p>
      </div>
    </motion.div>
  );
};

export default AssessmentPage;
