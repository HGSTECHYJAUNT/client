"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Clock, CheckCircle, AlertCircle } from "lucide-react";
import LearningCard from "@/components/main/learning/LearningCard";
import Button from "@/components/ui/button";

const Learning: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const tabs = [
    { id: "all", label: "All courses", icon: null },
    { id: "lists", label: "My Lists", icon: null },
    { id: "favorites", label: "Favourites", icon: null },
  ];

  const courses = [
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akiwamiwide Williams Sweet",
      progress: 35,
      status: "continue",
      rating: 4.8,
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Popoofa Faith Maxima",
      status: "start",
      rating: 4.8,
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Badejo Emmanuel Adewald",
      status: "start",
      rating: 4.8,
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akiwamiwide Williams Sweet",
      status: "start",
      rating: 4.8,
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akiwamiwide Williams Sweet",
      status: "start",
      rating: 4.8,
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akiwamiwide Williams Sweet",
      status: "start",
      rating: 4.8,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">My Learning</h1>
            <p className="text-gray-600">Continue your journey and master new skills</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-gray-200">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`px-4 py-3 font-medium text-sm transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "text-gray-900 border-purple-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Info Banner */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -2 }}
        className="rounded-2xl bg-linear-to-r from-purple-50 to-blue-50 border border-purple-200 p-6"
      >
        <div className="flex items-start gap-4">
          <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Schedule learning time</h3>
            <p className="text-sm text-gray-600 mb-3">
              Learning a little each day adds up. Research shows that students who make learning a
              habit are more likely to reach their goals. Set time aside to learn and get reminders
              using your learning schedule.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button className="h-9 px-4 text-xs">Get Started</Button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-9 px-4 text-xs rounded-lg bg-gray-100 border border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 font-medium"
              >
                Dismiss
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>

        {["Recently Accessed", "Categories", "Progress", "Instructor"].map((filter, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 font-medium text-sm"
          >
            <Filter className="w-4 h-4" />
            {filter}
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2.5 rounded-lg text-purple-400 hover:text-purple-300 font-medium text-sm"
        >
          Reset
        </motion.button>
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {courses.map((course, index) => (
          <LearningCard
            key={index}
            title={course.title}
            category={course.category}
            instructor={course.instructor}
            progress={course.progress || 0}
            status={course.status as "continue" | "start"}
            rating={course.rating}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between mt-8 pt-8 border-t border-slate-700"
      >
        <motion.button
          whileHover={{ x: -2 }}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Previous
        </motion.button>

        <div className="flex items-center gap-2">
          {[1, 2, "...", 5].map((page, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 rounded-lg font-medium transition-all duration-300 ${
                page === 1
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50"
              }`}
            >
              {page}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 2 }}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          Next →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Learning;
