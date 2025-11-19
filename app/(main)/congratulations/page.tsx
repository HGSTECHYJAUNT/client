'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MatchPotential from '@/components/congratulations/MatchPotential'
import SkillAnalytics from '@/components/congratulations/SkillAnalytics'
import CareerCards from '@/components/congratulations/CareerCards'
import RecommendedCourses from '@/components/congratulations/RecommendedCourses'

interface CongratulationsProps {
  userName?: string
}

const CongratulationsPage: React.FC<CongratulationsProps> = ({ userName = 'Daniel' }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-purple-50">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-1 flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Our Intelligent System has found your Top 3 Mastery Tracks based on your assessment and real-time African market demand.
                </p>
              </motion.div>
              <MatchPotential />
            </div>
            <div className="lg:col-span-2">
              <SkillAnalytics />
            </div>
          </div>

          <CareerCards />

          <RecommendedCourses />
        </div>
      </div>
    </div>
  )
}

export default CongratulationsPage