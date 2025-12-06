"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, BookOpen, Heart, Grid3X3 } from "lucide-react";
import LearningCard from "@/components/main/learning/LearningCard";

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
    { id: "all", label: "All courses", icon: Grid3X3 },
    { id: "lists", label: "My Lists", icon: BookOpen },
    { id: "favorites", label: "Favourites", icon: Heart },
  ];

  const courses = [
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      progress: 35,
      status: "continue",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      category: "FRONTEND",
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      status: "start",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {/* Header Section */}
      <div className="bg-linear-to-r from-[#400ae0] to-[#3c2388]">
        <motion.div variants={itemVariants} className="px-4 sm:px-6 lg:px-8 pt-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white px-8 pb-12 pt-5">My Learning</h1>

          {/* Tabs */}
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8">
            {tabs.map((tab) => {
              return (
                <motion.div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  // whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`pb-3 font-medium text-base transition-all duration-300 border-b-4 relative flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "text-white border-white"
                      : "text-white/60 border-transparent hover:text-white/80"
                  }`}
                >
                  <div>
                    <tab.icon className="w-5 h-5 max-xs:flex invisible" />
                    <span className="max-xs:hidden flex">{tab.label}</span>                    
                  </div>

                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6">
        {/* Info Banner */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl bg-white p-6 mb-6 shadow-lg border border-[#4B19E6]/20"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#4B19E6]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#4B19E6]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Schedule learning time</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Learning a little each day adds up. Research shows that students who make learning a
                habit are more likely to reach their goals. Set time aside to learn and get
                reminders using your learning scheduler.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="px-6 py-2.5 rounded-lg bg-[#4B19E6] text-white border-2 border-[#4B19E6] hover:bg-[#4B19E6]/90 transition-colors font-medium text-sm">
                  Get Started
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium text-sm">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gray-700 text-sm font-medium">Sort by</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Recently Accessed", "Categories", "Progress", "Instructor"].map((filter, idx) => (
              <button
                key={idx}
                className="px-5 py-2.5 rounded-lg bg-white text-[#4B19E6] border border-gray-300 hover:border-[#4B19E6] transition-all font-medium text-sm flex items-center gap-2 shadow-sm"
              >
                {filter}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
            <button className="px-5 py-2.5 rounded-lg text-[#4B19E6] hover:bg-[#4B19E6]/10 transition-all font-medium text-sm">
              Reset
            </button>
          </div>
          <div className="text-sm text-gray-700 font-medium">Filter by</div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {courses.map((course, index) => (
            <LearningCard
              key={index}
              title={course.title}
              category={course.category}
              instructor={course.instructor}
              role={course.role}
              progress={course.progress || 0}
              status={course.status as "continue" | "start"}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">
            ← <span className="hidden xs:flex">Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-[#4B19E6] text-white font-semibold text-sm shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm border border-gray-300">
              2
            </button>
            <span className="text-gray-500 px-2">...</span>
            <button className="w-10 h-10 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm border border-gray-300">
              5
            </button>
          </div>

          <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
            <span className="hidden xs:flex">Next</span> →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Learning;
