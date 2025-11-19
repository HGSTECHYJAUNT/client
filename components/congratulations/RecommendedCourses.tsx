'use client'

import React from 'react'
import { motion } from 'framer-motion'

const RecommendedCourses: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-8 flex justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-xl font-semibold text-[#3C14B8] border-2 border-[#3C14B8] bg-white hover:bg-[#3C14B8] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View All 12 Recommended Courses
      </motion.button>
    </motion.div>
  )
}

export default RecommendedCourses