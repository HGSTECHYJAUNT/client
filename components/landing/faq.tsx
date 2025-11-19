"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 0,
      question: "How is SkillLink different from other online learning platforms?",
      answer:
        "Most platforms offer general courses. SkillLink offers a complete solution. We focus on precision—our intelligent System analyzes your profile to pinpoint the exact skills that align with available paid opportunities. We then provide the free learning path and connect you directly to those paid gigs.",
    },
    {
      id: 1,
      question: "How much does SkillLink cost?",
      answer:
        "SkillLink offers both free and premium content. Our basic platform and many courses are free. Premium courses and specialized roadmaps have affordable pricing starting from ₦2,000. Most of our core services are designed to be accessible.",
    },
    {
      id: 2,
      question: "Is SkillLink only for entry-level professionals?",
      answer:
        "No. While we serve entry-level professionals, we also cater to mid-career professionals looking to upskill or transition to new fields. Our personalized roadmaps adapt to your current skill level and career goals.",
    },
    {
      id: 3,
      question: "How does SkillLink know which skills I should learn?",
      answer:
        "Our AI-powered intelligent system analyzes your profile, experience, and goals against real job market data in Africa. It then matches you with skills that are in high demand and offers competitive salaries.",
    },
    {
      id: 4,
      question: "Will I receive a formal certificate upon course completion?",
      answer:
        "Yes. Upon completing courses and projects, you receive verifiable certificates that showcase your skills to employers. These certificates are recognized by major companies in the African job market.",
    },
    {
      id: 5,
      question: "How does SkillLink guarantee I will get a paid gig?",
      answer:
        "While we cannot guarantee employment, our verified skill roadmaps and industry partnerships significantly increase your chances. We connect qualified learners with verified employers and paid opportunities through our platform.",
    },
    {
      id: 6,
      question: "Are the skills taught relevant to the African job market?",
      answer:
        "Absolutely. All courses and skills are curated specifically for the African job market. We focus on what employers in Africa are actively hiring for and paying competitive wages.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className=" px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#12253B] mb-4">
              Frequently Asked Question
            </h2>
          </motion.div>

          <motion.div className="space-y-3" variants={containerVariants}>
            {faqs.map((faq) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <motion.button
                  onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                  whileHover={{ scale: 1.01 }}
                  className="w-full group bg-white rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between p-6 border-b border-gray-100 hover:bg-gray-50">
                    <h3 className="text-left text-base md:text-lg font-semibold text-[#12253B] group-hover:text-[#3712A8] transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeId === faq.id ? 0 : 45 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4 text-[#3712A8]"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-[#F9F7FE] border-b border-gray-100">
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;