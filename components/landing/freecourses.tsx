"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Users, ArrowRight } from "lucide-react";
import generativeAI from "@/public/landing/generative-ai 1.svg";
import freelancing from "@/public/landing/top-view-nutritional-counter-app-concept 1.svg";
import dataScience from "@/public/landing/data-science 1.svg";

const courseImages = {
  generativeAI,
  freelancing,
  dataScience,
};

interface Course {
  id: number;
  title: string;
  image: string;
  tag: string;
  students: string;
  price: string;
}

const FreeCourses = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Generative AI",
      image: courseImages.generativeAI,
      tag: "AI",
      students: "1M+",
      price: "Free",
    },
    {
      id: 2,
      title: "IT Mastery",
      image: courseImages.freelancing,
      tag: "IT",
      students: "1M+",
      price: "Free",
    },
    {
      id: 3,
      title: "Data Science",
      image: courseImages.dataScience,
      tag: "Data",
      students: "1M+",
      price: "Free",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

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


  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white" id="how-it-works">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"
        >
          <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#12253B] leading-tight">
                Free Courses.
                <br />
                Verified Earnings.
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                SkillLink validates the skills you need, delivers the free courses fast, and launches your career in Africa's high-demand sectors.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 } 
                }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-80"
              >
                <div className="absolute inset-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white p-2 pt-3 m-3 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{course.students}</span>
                  </div>

                  <h3 className="text-lg text-[#12253B] group-hover:text-[#3712A8] transition-colors">
                    {course.title}
                  </h3>

                  <button className="w-full flex items-center justify-end gap-2  text-gray-700 py-2 px-4  hover:text-[#3712A8] transition-all duration-300 font-medium group/btn">
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button className="text-[#3712A8] font-medium hover:underline flex items-center gap-2">
            <span>←</span> Previous
          </button>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-300 ${
                  page === currentPage
                    ? "bg-[#3712A8] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-gray-500 px-2">...</span>
            {[10, 11].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-300 ${
                  page === currentPage
                    ? "bg-[#3712A8] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="text-[#3712A8] font-medium hover:underline flex items-center gap-2">
            Next <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeCourses;