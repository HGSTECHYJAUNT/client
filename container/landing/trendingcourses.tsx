"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import course1 from "@/public/landing/course1.svg";
import course2 from "@/public/landing/course2.svg";
import course3 from "@/public/landing/course3.svg";
import course4 from "@/public/landing/course4.svg";

const courseImages = {
  course1,
  course2,
  course3,
  course4,
};

interface TrendingCourse {
  id: number;
  title: string;
  instructor: string;
  image: string;
  tag: string;
  tagColor: string;
  rating: number;
  totalHours: number;
  price: string | number;
}

const TrendingCourses = () => {
  const courses: TrendingCourse[] = [
    {
      id: 1,
      title: "Full Stack Web Development Full Course on HTML, CSS, JavaScript, Node.js, MongoDB",
      instructor: "freeCodeCamp.org",
      image: courseImages.course1,
      tag: "Best rating",
      tagColor: "bg-purple-200 text-[#3712A8] font-bold",
      rating: 4.6,
      totalHours: 523,
      price: "Free",
    },
    {
      id: 2,
      title: "Python Full Course: Introduction into Python",
      instructor: "CodeMosh",
      image: courseImages.course2,
      tag: "Best rating",
      tagColor: "bg-purple-200 text-[#3712A8] font-bold",
      rating: 4.5,
      totalHours: 477,
      price: "Free",
    },
    {
      id: 3,
      title: "Ultimate AWS Certified Cloud Practitioner",
      instructor: "Stephane Marrick",
      image: courseImages.course3,
      tag: "Hot & New",
      tagColor: "bg-red-200 text-red-700 font-bold",
      rating: 4.5,
      totalHours: 456,
      price: "Free",
    },
    {
      id: 4,
      title: "AI Engineering: The Complete Guide to AI Engineering",
      instructor: "Ed Donner, Ligency",
      image: courseImages.course4,
      tag: "Premium",
      tagColor: "bg-blue-200 text-blue-700 font-bold",
      rating: 4.0,
      totalHours: 527,
      price: "₦7,000",
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
    <section className="w-full mx-auto  px-4 sm:px-6 lg:px-12 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12253B]">
              Trending Courses
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
            variants={containerVariants}
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                <div className="relative m-3 sm:m-3 rounded-xl h-36 sm:h-40 md:h-44 bg-gray-100 overflow-hidden shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-bold text-[#12253B] line-clamp-2 sm:line-clamp-3 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-[#12253B]">{course.instructor}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs pt-3">
                    <div className={`px-3 py-1 rounded-md text-[10px] font-bold w-fit ${course.tagColor}`}>
                      {course.tag}
                    </div>
                    <div className="flex gap-2 items-center justify-center border px-3  py-1 border-gray-300 rounded-md">
                      <span className="text-yellow-400 text-[11px]">★</span>
                      <span className="text-gray-700 font-semibold text-[10px]">{course.rating}</span>                     
                    </div>

                    <div className="text-gray-700 px-3 sm:px-1 py-1 rounded-md text-[10px] border border-gray-300 font-semibold tracking-wide">{course.totalHours} ratings</div>
                  </div>

                  <div className="text-sm font-bold text-[#12253B]">{course.price}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-10 sm:mt-12 md:mt-16"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <Link
              href="#"
              className="text-[#3712A8] font-semibold text-sm sm:text-base hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              Show all courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingCourses;