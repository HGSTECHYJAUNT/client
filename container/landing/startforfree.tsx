"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import startFreeLogo from "@/public/landing/footerLogo.svg";

const StartForFree = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[#3712A8]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center -mt-20"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={startFreeLogo}
              alt="SkillLink"
              className="h-96 w-auto"
            />
          </motion.div>

          <div className="space-y-6 -mt-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              Achieve your career goals with SkillLink
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="inline-block px-8 py-3 bg-white text-[#3712A8] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start For Free
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartForFree;