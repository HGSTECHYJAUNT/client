"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import awsThumbnail from "@/public/landing/aws-thumbnail 1.svg";
import certifications from "@/public/landing/certifications 1.svg";
import webDevImage from "@/public/landing/close-up-image-programer-working-his-desk-office 1.svg";

const certImages = {
  aws: awsThumbnail,
  figma: certifications,
  webDev: webDevImage,
};

interface Certification {
  id: number;
  title: string;
  image: string;
}

const GetVerified = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS",
      image: certImages.aws,
    },
    {
      id: 2,
      title: "Figma",
      image: certImages.figma,
    },
    {
      id: 3,
      title: "Web Development",
      image: certImages.webDev,
    },
  ];

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
    <section className="mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#12253B] to-[#1a3a52] rounded-3xl p-8 md:p-12 lg:p-12 py-12 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <motion.div className="text-left col-span-1 text-white" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Verified.
              <br />
              Secure Your Earning Potential.
            </h2>
            <p className="text-base leading-relaxed">
              SkillLink prepares you for industry-ready career roles with comprehensive free
              courses, real-world projects, and micro-internships that launch your professional
              life.
            </p>
          </motion.div>

          <motion.div
            className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer bg-gradient-to-br from-gray-900 to-[#12253B]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-white/90">
                    {cert.id === 1 && "Cloud, AI, Coding, Networking"}
                    {cert.id === 2 && "UI/UX, Graphics Design, Logo Design, Brand Design"}
                    {cert.id === 3 && "HTML, CSS, JavaScript, Node.js, Python"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetVerified;