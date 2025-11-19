'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MatchPotential: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="bg-linear-to-br from-[#3C14B8] to-[#160742] p-6 rounded-2xl text-white shadow-xl h-full flex flex-col justify-between"
    >
      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
        >
          92% Match Potential
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/90 text-sm md:text-base leading-relaxed mb-6"
        >
          This score indicates your likelihood of success and speed of completion for the top track, based on your current aptitude.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/70 text-xs md:text-sm mb-4 italic"
      >
        Stop Searching, Start Earning
      </motion.p>
    </motion.div>
  )
}

export default MatchPotential