'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CareerCard {
  title: string
  matchPercentage: number
  matchQuality: string
  earningSalary: string
  salaryRange: string
  skills: string
}

const careerData: CareerCard[] = [
  {
    title: 'Full Stack Developer',
    matchPercentage: 92,
    matchQuality: 'High Match',
    earningSalary: 'Earning Potential: High (100k - 120k/year, Regional Average)',
    salaryRange: 'Regional Average',
    skills: 'HTML, CSS, JavaScript, React, Python/Django, SQL Database, Cloud Fundamentals',
  },
  {
    title: 'Data Analyst',
    matchPercentage: 77,
    matchQuality: 'Good Match',
    earningSalary: 'Earning Potential: High (130k - 150k/year, Regional Average)',
    salaryRange: 'Regional Average',
    skills: 'Medium, Excel, Databases, R/Python for Data Virtualization, Langchain, HuggingFace',
  },
  {
    title: 'Cybersecurity',
    matchPercentage: 69,
    matchQuality: 'Solid Match',
    earningSalary: 'Earning Potential: High (110k - 160k/year, Regional Average)',
    salaryRange: 'Regional Average',
    skills: 'Network Security, Threat Detection, Ethical Hacking, LINUX, Awareness Check',
  },
]

const CareerCards: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
    >
      {careerData.map((career, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">{career.title}</h3>

          <div className="mb-4">
            <span className="text-2xl font-bold text-[#3C14B8]">
              {career.matchPercentage}%
            </span>
            <span className="text-sm text-gray-600 ml-2">
              ({career.matchQuality})
            </span>
          </div>

          <div className="mb-6 text-sm text-gray-600">
            <p className="leading-relaxed">{career.earningSalary}</p>
          </div>

          <div className="mb-6 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <p className="text-xs text-gray-700 leading-relaxed">
              {career.skills}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3C14B8] to-[#160742] hover:shadow-lg transition-all duration-300"
          >
            Find My Career Path
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full text-center text-sm mt-4 text-[#3C14B8] hover:text-[#160742] font-medium transition-colors"
          >
            Why This Match?
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CareerCards