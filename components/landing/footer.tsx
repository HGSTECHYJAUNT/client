"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
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
      transition: { duration: 0.5 },
    },
  };

  const footerLinks = {
    courses: [
      "AI",
      "Mobile Design",
      "AWS",
      "Web Design",
      "Development",
      "Project Management",
    ],
    company: [
      "Service",
      "Features",
      "Our Team",
      "Portfolio",
      "Blog",
      "Contact Us",
    ],
  };

  return (
    <footer className="bg-[#EDE8FD] text-[#12253B]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          <motion.div className="lg:col-span-1 space-y-4" variants={itemVariants}>
            <h3 className="font-bold text-xl text-[#12253B]">SkillLink</h3>
            <p className="text-[#12253B]/70 text-sm leading-relaxed">
              The only platform that takes you from assessment to actual earning. SkillLink gave me
              the precise roadmap and the validated skills I needed
            </p>
            <p className="text-[#12253B]/60 text-xs pt-4">Copyright SkillLink</p>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="font-bold text-lg text-[#3712A8]">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3712A8] flex-shrink-0 mt-0.5" />
                <p className="text-[#12253B]/80 text-sm">
                  Oduduwa Estate, Ile-Ife, Osun, Nigeria
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#3712A8] flex-shrink-0 mt-0.5" />
                <p className="text-[#12253B]/80 text-sm">skilllink@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3712A8] flex-shrink-0 mt-0.5" />
                <p className="text-[#12253B]/80 text-sm">+234 8101702279</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="font-bold text-lg text-[#3712A8]">Courses</h3>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[#12253B]/70 hover:text-[#3712A8] transition-colors text-sm block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="font-bold text-lg text-[#3712A8]">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[#12253B]/70 hover:text-[#3712A8] transition-colors text-sm block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4 flex flex-col" variants={itemVariants}>
            <div className="flex gap-3 mb-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-[#3712A8] rounded-full flex items-center justify-center hover:bg-[#4B1BC8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-[#3712A8] rounded-full flex items-center justify-center hover:bg-[#4B1BC8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-[#3712A8] rounded-full flex items-center justify-center hover:bg-[#4B1BC8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
            </div>

            <div className="mt-auto">
              <p className="text-[#12253B]/60 text-xs">© 2025 Coursera Inc.</p>
              <p className="text-[#12253B]/60 text-xs">All rights reserved</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;