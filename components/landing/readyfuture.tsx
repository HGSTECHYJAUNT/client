"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import fullstackImage from "@/public/landing/career-card-fswd 1.svg";
import appDesignerImage from "@/public/landing/career-card-digitalmarketer 1.svg";
import dataScientistImage from "@/public/landing/career-card-data-scientist 1.svg";

const careerImages = {
  fullstack: fullstackImage,
  appDesigner: appDesignerImage,
  dataScientist: dataScientistImage,
};

interface CareerPath {
  id: number;
  title: string;
  image: string;
  rating: number;
  hours: number;
  color: string;
}

const ReadyFuture = () => {
  const careers: CareerPath[] = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      image: careerImages.fullstack,
      rating: 4.8,
      hours: 270,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      title: "App Designer",
      image: careerImages.appDesigner,
      rating: 4.2,
      hours: 220,
      color: "from-purple-400 to-pink-600",
    },
    {
      id: 3,
      title: "Data Scientist",
      image: careerImages.dataScientist,
      rating: 4.3,
      hours: 280,
      color: "from-pink-400 to-purple-600",
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
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-8 sm:mb-12 text-center lg:text-left" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12253B] mb-3 sm:mb-4">
              Ready For A New Career?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
              Choose from industry-leading career paths and get certified. Unlock the precise skills
              and validated experience needed to become a competitive earner in Africa's high-demand
              job market.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {careers.map((career) => (
              <motion.div
                key={career.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`relative h-48 sm:h-56 rounded-none overflow-hidden bg-linear-to-br ${career.color} flex items-end p-4 sm:p-6`}
                >
                  <Image
                    src={career.image}
                    alt={career.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-white">{career.title}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white space-y-4 rounded-b-none border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-0.5 border border-purple-200 rounded-md">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="md:text-sm font-semibold text-gray-700">{career.rating}</span>
                    </div>

                    <div className="px-2 py-0.5 border border-purple-200 rounded-md">
                      <span className="text-sm font-medium text-gray-700">
                        {career.hours}K ratings
                      </span>
                    </div>

                    <div className="px-2 py-0.5 border border-purple-200 rounded-md">
                      <span className="text-sm font-medium text-gray-700">
                        {career.hours} total hours
                      </span>
                    </div>
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
              href="/verified-skill-roadmaps"
              className="text-[#3712A8] font-semibold text-sm sm:text-base hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              View all Verified Skill Roadmaps
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyFuture;