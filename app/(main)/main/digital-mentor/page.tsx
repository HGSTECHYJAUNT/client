"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const DigitalMentorPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 px-4 py-6 sm:px-6"
    >
      <div className="flex items-center gap-4">
        <Users className="w-8 h-8 text-purple-600" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Digital Mentorship</h1>
          <p className="text-gray-600 mt-2">Connect with experienced professionals</p>
        </div>
      </div>

      <div className="rounded-2xl bg-linear-to-br from-purple-50 to-blue-50 border border-purple-200 p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Mentor</h2>
        <p className="text-gray-600">More content coming soon...</p>
      </div>
    </motion.div>
  );
};

export default DigitalMentorPage;
