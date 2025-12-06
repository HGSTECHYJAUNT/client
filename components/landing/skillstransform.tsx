"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import aiImage from "@/public/landing/generative-ai 1.svg";
import marketing from "@/public/landing/skills1.svg";
import webdev from "@/public/landing/skills2.svg";
import skills3 from "@/public/landing/skills3.svg";
import skills4 from "@/public/landing/skills4.svg";

const skillImages = {
  marketing,
  webdev,
  skills3,
  skills4,
};

interface SkillCategory {
  id: number;
  title: string;
  image: string;
  count: number;
}

const SkillsTransform = () => {
  const skills: SkillCategory[] = [
    {
      id: 1,
      title: "Artificial Intelligence (AI)",
      image: skillImages.marketing,
      count: 56,
    },
    {
      id: 2,
      title: "Digital Marketing",
      image: skillImages.webdev,
      count: 0,
    },
    {
      id: 3,
      title: "Web Development",
      image: skillImages.skills3,
      count: 0,
    },
    {
      id: 4,
      title: "Amazon AWS",
      image: skillImages.skills4,
      count: 0,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="impact">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-left md:text-left" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#12253B] mb-4">
              Skills to transform your career and life
            </h2>
            <p className="text-gray-600 text-base max-w-2xl">
              SkillLink provides the Complete Roadmap, Equipping You with the Exact Skills Needed
              for Advancement and Earning.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4 mb-8 overflow-x-auto pb-4 border-b border-gray-200"
            variants={itemVariants}
          >
            {skills.slice(0, 6).map((skill) => (
              <motion.button
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  skill.id === 1 ? "bg-[#3712A8] text-white" : "text-gray-700 hover:text-[#3712A8]"
                }`}
              >
                {skill.title.split(" (")[0]}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group h-80 flex flex-col"
              >
                <div className="relative flex-1 overflow-hidden bg-gray-200">
                  <Image
                    src={skills[index]?.image || skillImages.marketing}
                    alt={skills[index]?.title || "Skill"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-bold text-[#12253B] line-clamp-2 sm:line-clamp-3 leading-snug">
                      {index === 0 && "Introduction to Artificial Intelligence"}
                      {index === 1 && "Intro to AI Agents and Agentic AI"}
                      {index === 2 && "The Complete Guide to AI Engineering"}
                      {index === 3 && "Artificial Intelligence for Business + Projects"}
                    </h3>

                    <p className="text-xs text-gray-600">
                      {index === 0 && "CodeMosh"}
                      {index === 1 && "CodeMosh"}
                      {index === 2 && "Ed Donner, Ligency"}
                      {index === 3 && "Ed Donner, Ligency"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs pt-3 flex-wrap">
                    <div
                      className={`px-3 py-1 rounded-md text-[10px] font-bold w-fit ${
                        index === 0 && "bg-purple-200 text-[#3712A8]"
                      } ${index === 1 && "bg-purple-200 text-[#3712A8]"} ${
                        index === 2 && "bg-red-200 text-red-700"
                      } ${index === 3 && "bg-blue-200 text-blue-700"}`}
                    >
                      {index === 0 && "Best rating"}
                      {index === 1 && "Best rating"}
                      {index === 2 && "Hot & New"}
                      {index === 3 && "Premium"}
                    </div>

                    <div className="flex gap-2 items-center border px-3 py-1 border-gray-300 rounded-md">
                      <span className="text-yellow-400 text-[11px]">★</span>
                      <span className="text-gray-700 font-semibold text-[10px]">
                        {[4.6, 4.5, 4.5, 4.0][index]}
                      </span>
                    </div>

                    <div className="text-gray-700 px-3 py-1 rounded-md text-[10px] border border-gray-300 font-semibold">
                      {[523, 477, 456, 527][index]} ratings
                    </div>
                  </div>

                  <div className="text-sm font-bold text-[#12253B]">
                    {index < 3 ? "Free" : "₦7,000"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center mt-10" 
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <Link
              href="#"
              className="text-[#3712A8] font-semibold hover:underline flex items-center gap-2"
            >
              Show all Artificial Intelligence (AI) courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTransform;