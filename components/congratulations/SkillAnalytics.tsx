'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MoreVertical } from 'lucide-react'

declare global {
  interface Window {
    Chart: any
  }
}

const SkillAnalytics: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<any>(null)

  useEffect(() => {
    const loadChart = async () => {
      if (!chartRef.current) return

      if (!window.Chart) {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js'
        script.async = true
        script.onload = () => {
          initChart()
        }
        document.body.appendChild(script)
      } else {
        initChart()
      }
    }

    const initChart = () => {
      if (!chartRef.current) return

      const ctx = chartRef.current.getContext('2d')
      if (!ctx) return

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }

      const skills = ['Coding', 'Design', 'Marketing', 'Research', 'Leadership', 'Strategy']
      const data = [200, 200, 250, 280, 210, 240]

      const createGradient = (color1: string, color2: string) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        return gradient
      }

      const isMobile = window.innerWidth < 640
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024
      
      const barThickness = isMobile ? 24 : isTablet ? 32 : 40

      chartInstanceRef.current = new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels: skills,
          datasets: [
            {
              data: data,
              backgroundColor: (context: any) => {
                const chart = context.chart
                const { ctx: chartCtx } = chart
                const index = context.dataIndex
                
                if (index === 2 || index === 3 || index === 5) {
                  return createGradient('#3C14B8', '#160742')
                } else {
                  return createGradient('#746186', '#3C14B8')
                }
              },
              borderRadius: 10,
              borderSkipped: false,
              barThickness: barThickness,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: '#160742',
              padding: 16,
              titleColor: '#fff',
              bodyColor: '#fff',
              cornerRadius: 8,
              displayColors: false,
              titleFont: {
                size: 14,
                weight: 'bold',
              },
              bodyFont: {
                size: 12,
              },
              callbacks: {
                label: function(context: any) {
                  return 'Level: ' + context.parsed.y
                }
              }
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 300,
              ticks: {
                stepSize: 100,
                color: '#9CA3AF',
                font: {
                  size: isMobile ? 10 : 11,
                },
              },
              grid: {
                color: '#E5E7EB',
                drawBorder: false,
              },
            },
            x: {
              ticks: {
                color: '#6B7280',
                font: {
                  size: isMobile ? 10 : isTablet ? 11 : 12,
                  weight: '500',
                },
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },
        },
      })
    }

    loadChart()

    const handleResize = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
      initChart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl h-full"
    >
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Skill Analytics</h3>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
      <div className="h-52 sm:h-64 md:h-80">
        <canvas ref={chartRef}></canvas>
      </div>
    </motion.div>
  )
}

export default SkillAnalytics