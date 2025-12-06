"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const footerSections = [
    {
      title: "SkillLink",
      items: [
        "The only platform that takes you from assessment to actual earning. SkillLink gives me the precise roadmap and the validated skills I needed",
        "© 2025 Coursera Inc. All rights reserved",
      ],
      isDescription: true,
    },
    {
      title: "Courses",
      items: ["AI", "Mobile Design", "AWS", "Web Design", "Development", "Project Management"],
    },
    {
      title: "Company",
      items: ["Service", "Features", "Our Team", "Portfolio", "Blog", "Contact Us"],
    },
    {
      title: "Get in Touch",
      items: [
        { icon: MapPin, text: "Oduduwa Estate, Ile-Ife, Osun, Nigeria" },
        { icon: Mail, text: "skillink@gmail.com" },
        { icon: Phone, text: "+234 8101702279" },
      ],
      isContact: true,
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <footer
      className={`text-white ${isDark ? "bg-[#0F052E] border-[#4B19E6]/20" : "bg-[#3712A8] border-gray-200"} border-t`}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={section.isContact ? "lg:col-span-1" : ""}
            >
              <h3
                className={`text-white font-bold text-lg mb-4 tracking-wider`}
              >
                {section.title}
              </h3>

              {section.isDescription ? (
                <div className="space-y-4">
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-400"} text-sm leading-relaxed`}
                  >
                    {Array.isArray(section.items) && section.items[0]}
                  </p>
                  <p className={`${isDark ? "text-gray-500" : "text-gray-400"} text-xs`}>
                    {Array.isArray(section.items) && section.items[1]}
                  </p>
                </div>
              ) : section.isContact ? (
                <ul className="space-y-3">
                  {Array.isArray(section.items) &&
                    section.items.map((item: any, idx: number) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-3 ${isDark ? "text-gray-400" : "text-gray-400"} text-sm`}
                      >
                        {item.icon && (
                          <item.icon
                            className={`w-5 h-5 ${isDark ? "text-[#4B19E6]" : "text-white"} shrink-0`}
                          />
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                </ul>
              ) : (
                <ul className="space-y-2">
                  {Array.isArray(section.items) &&
                    section.items.map((item: any, idx: number) => (
                      <li key={idx}>
                        <Link
                          href="#"
                          className={`${isDark ? "text-gray-400 hover:text-[#4B19E6]" : "text-gray-400 hover:text-white"} text-sm transition-colors duration-200`}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className={`h-px bg-linear-to-r from-transparent ${isDark ? "via-[#4B19E6]/30" : "via-gray-300"} to-transparent mb-8 origin-left`}
        />

        {/* Social Links and Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full ${isDark ? "bg-white/5 border-white/10" : "bg-[#4B19E6]/10 border-[#4B19E6]/30"} backdrop-blur-sm border flex items-center justify-center text-[#4B19E6] bg-white hover:text-white hover:bg-white/10 hover:border-[#4B19E6]/50" transition-all duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className={`text-gray-200 text-sm text-center sm:text-right`}
          >
            © 2025 SkillLink Inc. All rights reserved.{" "}
            <Link
              href="#"
              className={`text-gray-300 transition-colors`}
            >
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link
              href="#"
              className={`text-gray-300 transition-colors`}
            >
              Terms of Service
            </Link>
          </motion.p>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className={`absolute bottom-0 left-1/4 w-96 h-96 bg-g-to-t ${isDark ? "from-[#4B19E6]/5" : "from-[#4B19E6]/10"} to-transparent rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className={`absolute bottom-0 right-1/4 w-96 h-96 bg-g-to-t ${isDark ? "from-[#3712A8]/5" : "from-[#3712A8]/10"} to-transparent rounded-full blur-3xl`}
        />
      </div>
    </footer>
  );
};

export default Footer;
