"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/public/landing/Hero Image.svg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const itemVariants = {
    active: {
        backgroundColor: "#f00"
    },
    inactive: {
      backgroundColor: "#fff",
      transition: { duration: 2 }
    }
  }

  const floatingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-0" id="home">
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage} 
          alt="Hero Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#3712A8]/95 via-[#3712A8]/75 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 min-h-screen flex items-center md:mt-32"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-white space-y-8 w-full" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Find Your Perfect Skill.
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-purple-200">
                    Get a Personalized Plan.
                  </span>
                  <br />
                  Start Earning.
                </h1>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-xl"
              >
                We provide the personalized skills roadmap and African job market insights needed to
                go from learning to earning guaranteed.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/find-career-path"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#3712A8] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-center group"
                  >
                    Find My Career Path
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-8 py-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
                  <div className="text-sm text-white/80 mt-1">Active Learners</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80 mt-1">Free Courses</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">95%</div>
                  <div className="text-sm text-white/80 mt-1">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hidden lg:block relative"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-full h-full min-h-[500px]">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-20 w-24 h-24 bg-linear-to-br from-amber-400 to-orange-500 rounded-full opacity-80 blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-20 right-10 w-32 h-32 bg-linear-to-br from-pink-400 to-purple-500 rounded-full opacity-70 blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;