"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home as HomeIcon, Play, Code, Users, Zap } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-16"
    >
      {/* Welcome Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
          <HomeIcon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome to SkillLink</h1>
          <p className="text-gray-600 mt-2">Your journey to mastering new skills starts here</p>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Play, label: "Active Courses", value: "5" },
          { icon: Code, label: "Hours Learned", value: "42" },
          { icon: Users, label: "Instructors", value: "8" },
          { icon: Zap, label: "Skills Gained", value: "12" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Getting Started */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-12 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-6">
          Begin your learning journey by exploring our curated courses and finding the perfect skill
          to develop.
        </p>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
          Explore Courses
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
