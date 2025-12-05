"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Code,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Lock,
  BookmarkIcon,
  Settings,
  Plus,
  Zap,
  Pause,
  PlayIcon,
  Heart,
} from "lucide-react";
import Image from "next/image";
import courseTitle from "@/public/dashboard/career-card-fswd 2.svg";
import course1 from "@/public/dashboard/unsplash_QQ9LainS6tI (2).svg";
import course2 from "@/public/dashboard/unsplash_QQ9LainS6tI (1).svg";
import course3 from "@/public/dashboard/unsplash_QQ9LainS6tI.svg";

const Dashboard: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const learningCourses = [
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course1,
      instructor: "Akinwamide Williams Sweet",
      role: "Software Developer",
      badge: "FRONTEND",
      rating: 4.6,
      ratingCount: 523,
      label: "Best rating",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course2,
      instructor: "Popoola Faith Maxima",
      role: "Software Developer",
      badge: "FRONTEND",
      rating: 4.6,
      ratingCount: 351,
      label: "Beginner",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course3,
      instructor: "Badejo Emmanuel Adewald",
      role: "Software Developer",
      badge: "FRONTEND",
      rating: 4.6,
      ratingCount: 523,
      label: "Best rating",
    },
  ];

  const skillTracks = [
    {
      name: "Frontend Developer",
      watched: "3/8",
      level: "Beginner",
      icon: BookmarkIcon,
    },
    {
      name: "Database Admin",
      watched: "0/8",
      level: "Beginner",
      icon: BookmarkIcon,
    },
    {
      name: "Backend Developer",
      watched: "0/8",
      level: "Beginner",
      icon: BookmarkIcon,
    },
  ];

  const topPickCourses = [
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: courseTitle,
      instructor: "freeCodeCamp (FCC)",
      rating: 4.8,
      students: 1486,
      hours: 39.5,
      level: "All Levels",
      price: "Free",
      badge: "Best coding",
      updatedDate: "Updated June 2025",
    },
  ];

  const whatToLearnCourses = [
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course1,
      instructor: "Akiwamiwide Williams Sweet",
      role: "Software Developer",
      badge: "FRONTEND",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course2,
      instructor: "Popoola Faith Maxima",
      role: "Software Developer",
      badge: "FRONTEND",
    },
    {
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      image: course3,
      instructor: "Badejo Emmanuel Adewald",
      role: "Software Developer",
      badge: "FRONTEND",
    },
  ];

  const mentorActivities = [
    {
      name: "Ravi Kumar",
      date: "25/2/2023",
      badge: "FRONTEND",
      course: "Understanding Concept Of React",
      action: "SHOW DETAILS",
    },
    {
      name: "Adedokun Daniel",
      date: "24/2/2023",
      badge: "FRONTEND",
      course: "Advanced JavaScript Patterns",
      action: "SHOW DETAILS",
    },
    {
      name: "Popoola Faith",
      date: "23/2/2023",
      badge: "BACKEND",
      course: "Node.js Fundamentals",
      action: "SHOW DETAILS",
    },
    {
      name: "Badejo Emmanuel",
      date: "22/2/2023",
      badge: "FRONTEND",
      course: "CSS Grid & Flexbox Mastery",
      action: "SHOW DETAILS",
    },
    {
      name: "Akinwamide Williams",
      date: "21/2/2023",
      badge: "FRONTEND",
      course: "React Performance Optimization",
      action: "SHOW DETAILS",
    },
  ];

  const mentors = [
    {
      name: "Adedokun Daniel",
      role: "UI/UX Designer",
    },
    {
      name: "Popoola Faith",
      role: "Fullstack Developer",
    },
    {
      name: "Badejo Emmanuel",
      role: "Fullstack Developer",
    },
    {
      name: "Akinwamide Williams",
      role: "Frontend Developer",
    },
    {
      name: "Adokie Sylvester",
      role: "Blockchain Developer",
    },
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % learningCourses.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? learningCourses.length - 1 : prev - 1));
  };

  const nextWhatToLearn = () => {
    setCarouselIndex((prev) => (prev + 1) % whatToLearnCourses.length);
  };

  const prevWhatToLearn = () => {
    setCarouselIndex((prev) => (prev === 0 ? whatToLearnCourses.length - 1 : prev - 1));
  };

  // Render star background decoration
  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-purple-200"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
    ));
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-4 lg:gap-6 pb-16 px-4 py-6 sm:px-6">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:flex-1 space-y-8"
      >
        {/* Hero Section with Search */}
        <div className="space-y-6">
          {/* Search Bar and Filter */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search your course here...."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#4B19E6]"
              />
            </div>
            <button className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Hero Card with Stars */}
          <div className="relative bg-linear-to-r from-[#400ae0] to-[#3c2388] rounded-3xl overflow-hidden p-8 text-white">
            {/* Animated stars in background */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="/dashboard/Star 1.svg"
                alt=""
                className="absolute w-20 h-20 max-sm:opacity-40"
                style={{ top: "10%", right: "15%" }}
              />
              <img
                src="/dashboard/Star 2.svg"
                alt=""
                className="absolute w-24 h-24 max-sm:opacity-40"
                style={{ top: "0%", right: "2%" }}
              />
              <img
                src="/dashboard/Star 3.svg"
                alt=""
                className="absolute w-26 h-26 max-sm:opacity-40"
                style={{ top: "30%", right: "8%" }}
              />
              <img
                src="/dashboard/Star 4.svg"
                alt=""
                className="absolute w-24 h-24 max-sm:opacity-40"
                style={{ bottom: "10%", right: "1%" }}
              />
              <img
                src="/dashboard/Star 5.svg"
                alt=""
                className="absolute w-26 h-26 max-sm:opacity-40"
                style={{ bottom: "0%", right: "13%" }}
              />
            </div>

            {/* Hero Content */}
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                ONLINE FREE COURSE
              </div>
              <h2 className="text-3xl md:text-4xl max-w-2xl font-bold mb-4 tracking-wide leading-tight">
                Start Your Full Stack Developer Mastery Track
              </h2>
              <button className="px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold flex items-center gap-2 transition-colors">
                Start Now
                <span className="bg-white p-2 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-3 h-3 text-black" />
                </span>
              </button>
            </div>
          </div>

          {/* Skill Tracks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillTracks.map((track, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-3 mt-2 bg-[#4B19E6]/10 rounded-full">
                    <Bell className="w-4 h-4 text-[#4B19E6]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-xs font-semibold text-[#6a6872] mb-1">
                      {track.watched} Watched
                    </p>
                    <p className="text-sm font-semibold text-gray-900">{track.name}</p>
                    <p className="text-xs text-gray-600">{track.level}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Let's Start Learning Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Let's Start Learning</h2>
            <div className="flex gap-2">
              <button
                onClick={prevCarousel}
                className="p-2 rounded-full border border-[#4B19E6]/40 hover:bg-[#4B19E6]/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#4B19E6]" />
              </button>
              <button
                onClick={nextCarousel}
                className="p-2 rounded-full border border-[#4B19E6]/40 hover:bg-[#4B19E6]/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#4B19E6]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-3 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all space-y-3"
              >
                {/* Image with heart icon */}
                <div className="relative h-32 bg-gray-200 overflow-hidden group rounded-xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-[#4B19E6]" />
                  </button>
                </div>

                {/* Content */}
                <div className="">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2.5 py-1 bg-[#4B19E6]/10 text-[#4B19E6] rounded-full text-xs font-semibold">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="inline-block px-2.5 py-1 bg-[#4B19E6]/10 text-[#4B19E6] rounded-full text-[11px] font-semibold">
                      {course.label}
                    </span>
                    <span className="flex items-center gap-1 border border-gray-100 rounded-full px-2.5 py-1">
                      <span className="text-yellow-400">★</span>
                      {course.rating}
                    </span>
                    <span className="text-gray-500 border border-gray-100 rounded-full px-2.5 py-1">
                      {course.ratingCount} ratings
                    </span>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-400 to-[#4B19E6]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{course.instructor}</p>
                      <p className="text-xs text-gray-600">{course.role}</p>
                    </div>
                  </div>

                  {/* Start Course Button */}
                  <button className="w-full py-2.5 bg-[#4B19E6] hover:bg-[#3D13B8] text-white font-semibold rounded-lg text-sm transition-colors">
                    Start Course
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Pick Section */}
        <div className="pt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Top Pick For You</h2>

          <motion.div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Image */}
              <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-80 bg-yellow-100">
                <Image
                  src={topPickCourses[0].image}
                  alt="Course"
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {topPickCourses[0].title}
                  </h3>
                  <p className="text-gray-600 sm:text-base leading-6 text-sm">
                    Learners master libraries and frameworks like Bootstrap, jQuery, Sass, React,
                    and Redux to build complex Single Page Applications (SPAs).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{topPickCourses[0].instructor}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {topPickCourses[0].updatedDate} • {topPickCourses[0].students} •{" "}
                    {topPickCourses[0].hours} total hours • {topPickCourses[0].level}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-600">
                    <span>⭐⭐⭐⭐⭐ {topPickCourses[0].rating}</span>
                    <span className="inline-block px-3 py-1 bg-[#4B19E6]/10 text-[#4B19E6] rounded-full text-xs font-semibold">
                      {topPickCourses[0].badge}
                    </span>
                  </div>

                  <div className="pt-2">
                    <p className="text-lg font-bold text-gray-900">{topPickCourses[0].price}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What To Learn Next Section */}
        <div className="pt-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">What To Learn Next</h2>
            {/* Carousel Controls */}
            <div className="flex gap-2">
              <button
                onClick={prevWhatToLearn}
                className="p-2 rounded-full border border-[#4B19E6]/40 hover:bg-[#4B19E6]/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#4B19E6]" />
              </button>
              <button
                onClick={nextWhatToLearn}
                className="p-2 rounded-full border border-[#4B19E6]/40 hover:bg-[#4B19E6]/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#4B19E6]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {whatToLearnCourses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-3 overflow-hidden shadow-md hover:shadow-lg transition-all space-y-3"
              >
                {/* Image */}
                <div className="relative h-32 bg-gray-200 overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4 relative">
                  <span className="inline-block px-2.5 py-1 bg-[#4B19E6]/10 text-[#4B19E6] rounded-full text-xs font-semibold mb-2">
                    {course.badge}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-[#4B19E6]" />
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-gray-900">{course.instructor}</p>
                      <p className="text-xs text-gray-600">{course.role}</p>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-[#4B19E6] hover:bg-[#3D13B8] text-white font-semibold rounded-lg text-sm transition-colors">
                    Start Course
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Your Mentor Section */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Mentor</h2>
            <button className="text-[#4B19E6] hover:text-[#3D13B8] font-semibold text-xs sm:text-sm">
              See All
            </button>
          </div>

          <div className="space-y-3">
            {mentorActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 w-full"
              >
                {/* Mentor Info */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-[#4B19E6] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{activity.name}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>

                {/* Badge, Course, Action */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <span className="inline-flex px-3 py-1 bg-[#4B19E6]/10 text-[#4B19E6] rounded-full text-xs font-semibold whitespace-nowrap w-fit">
                    {activity.badge}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium line-clamp-2 sm:line-clamp-1">
                    {activity.course}
                  </p>
                  <button className="px-3 py-1 bg-[#4B19E6]/10 hover:bg-[#4B19E6]/20 text-[#4B19E6] rounded text-xs font-semibold transition-colors whitespace-nowrap w-fit">
                    {activity.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:flex xl:w-80 xl:sticky xl:top-6 xl:flex-col xl:gap-6 xl:pb-6 bg-white rounded-2xl h-fit"
      >
        {/* Your Profile Card */}
        <div className="p-6 flex flex-col ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Your Profile</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-400 to-[#4B19E6] flex items-center justify-center border-4 border-white">
                <span className="text-2xl">👤</span>
              </div>
              {/* Loading arc */}
              <svg className="absolute inset-0 w-24 h-24" style={{ transform: "rotateZ(-90deg)" }}>
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="138 200"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4B19E6" />
                    <stop offset="100%" stopColor="#3D13B8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Good Morning Daniel</h4>
            <p className="text-sm text-gray-500">Continue Your Journey And Achieve Your Target</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center mb-8">
            <button
              title="Lock"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Lock className="w-5 h-5 text-gray-600" />
            </button>
            <button
              title="Bookmark"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <BookmarkIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              title="Settings"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Stats Chart Placeholder */}
          <div className="flex items-end justify-center gap-2 h-32">
            {[30, 50, 70, 60, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-10 rounded-t-sm bg-linear-to-t from-black to-[#4B19E6]"
              />
            ))}
          </div>
        </div>

        {/* Your Mentor Card */}
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Your Mentor</h3>
            <button
              title="Add mentor"
              className="w-8 h-8 rounded-full bg-[#4B19E6]/10 flex items-center justify-center hover:bg-[#4B19E6]/20 transition-colors"
            >
              <Plus className="w-4 h-4 text-[#4B19E6]" />
            </button>
          </div>

          <div className="space-y-3 flex-1">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-[#4B19E6]" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">{mentor.name}</p>
                    <p className="text-xs text-gray-500 truncate">{mentor.role}</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-[#4B19E6] hover:bg-[#3D13B8] text-white text-xs font-semibold rounded transition-colors shrink-0">
                  Follow
                </button>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <button className="w-full mt-4 py-2.5 text-[#4B19E6] font-semibold rounded-lg hover:bg-[#4B19E6]/5 transition-colors border border-[#4B19E6]">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
