"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

const SkillAnalytics: React.FC = () => {
  const skills = [
    { name: "Frontend Development", level: 75, color: "from-blue-500 to-cyan-500" },
    { name: "React & Next.js", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 60, color: "from-orange-500 to-red-500" },
    { name: "TypeScript", level: 70, color: "from-blue-600 to-purple-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-bold text-white">Skill Analytics</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-sm font-bold text-purple-300"
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${skill.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillAnalytics;
