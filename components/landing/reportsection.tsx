"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import reportImage from "@/public/landing/skillReport.svg";

const ReportSection = () => {
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
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12" id="about">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-0 min-h-auto md:min-h-[600px]"
        >
          <motion.div
            className="space-y-6 z-10 w-full lg:w-1/2 text-center md:text-left"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12253B] mb-4">
                Download the 2026
                <br />
                African Earning & Skill
                <br />
                Validation Report
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                If you or your organization are looking for help navigating economic change and
                securing talent, you'll find the precise roadmap for action in our popular annual
                report.
              </p>
            </div>

            <motion.div 
              variants={itemVariants} 
              className="flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-white border-2 border-[#3712A8] text-[#3712A8] font-semibold rounded-lg hover:bg-purple-50 transition-colors text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full h-48 sm:h-64 md:h-132 overflow-visible"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.5, rotate: 15, skewY: 1, skewX: -5, }}
          >
            <Image src={reportImage} alt="Skill Report" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportSection;