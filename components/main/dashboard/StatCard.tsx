"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 text-white shadow-lg`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <Icon className="w-5 h-5 opacity-60" />
        </div>
        <p className="text-3xl font-bold mb-2">{value}</p>
        {trend && (
          <p className="text-xs opacity-70 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
