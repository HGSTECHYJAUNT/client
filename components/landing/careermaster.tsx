"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Globe, Target, User } from "lucide-react";
import aiCareerImage from "@/public/landing/ai-career@1x 1.svg";

const CareerMaster = () => {
  const features = [
    {
      icon: User,
      text: "Acquire Verified Skills Fast",
      color: "from-blue-200 to-cyan-500"
    },
    {
      icon: Globe,
      text: "Access Global Free Courses",
      color: "from-green-200 to-emerald-300"
    },
    {
      icon: Target,
      text: "Find Local Paid Gigs",
      color: "from-purple-300 to-pink-400"
    },
    {
      icon: CheckCircle2,
      text: "Guided by Your Personalized Plan",
      color: "from-pink-200 to-pink-200"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linear-to-br from-[#12253B] via-[#1a3552] to-[#0f1d2e] rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center overflow-hidden relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3712A8]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <motion.div className="text-white space-y-8 relative z-10" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Transform Your Future
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Master Your Career.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                  Get the Skills That Pay.
                </span>
              </h2>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Stop guessing. Our intelligent system pinpoints your perfect career, provides
                tailored roadmaps, and connects you with paid opportunities.
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={featureVariants}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 bg-linear-to-br ${feature.color} rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6 text-black" strokeWidth={2.5} />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="/learn-more"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#3712A8] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Learn More
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <Image
                  src={aiCareerImage}
                  alt="AI Career"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-purple-400 to-pink-500 rounded-full blur-xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-blue-400 to-cyan-500 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerMaster;