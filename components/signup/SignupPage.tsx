"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import BoxImage from "@/public/assessment-image.png";

interface SignUpProps {
  onContinue: (email: string) => void;
}

const SignUpPage: React.FC<SignUpProps> = ({ onContinue }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      onContinue(email);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-3/6 bg-white p-8 flex flex-col justify-center"
      >
        <div className="max-w-= -auto w-full">
          {/* Content */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sign up for free</h1>
            <p className="text-gray-600 mb-8">
              We recommend using your <span className="font-semibold">personal email</span> - it
              keeps work and life separate
            </p>

            <div className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C14B8] focus:border-transparent transition-all"
                />
              </div>

              {/* Continue Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-3 bg-[#3C14B8] hover:bg-[#160742] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Continue
              </motion.button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              {/* Google */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("google")}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <image href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%3434A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" />
                  Sign up with Google
                </svg>
              </motion.button>

              {/* Slack */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("slack")}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.64 9.76c0 1.31-.96 2.26-2.23 2.26-1.27 0-2.23-.95-2.23-2.26 0-1.31.96-2.26 2.23-2.26h2.23v2.26zm1.13 0c0-1.31.96-2.26 2.23-2.26s2.23.95 2.23 2.26v5.65c0 1.31-.96 2.26-2.23 2.26-1.27 0-2.23-.95-2.23-2.26v-5.65zM9.76 5.64c-1.31 0-2.26-.96-2.26-2.23 0-1.27.95-2.23 2.26-2.23s2.26.96 2.26 2.23v2.23H9.76zm0 1.13c1.31 0 2.26.96 2.26 2.23s-.95 2.23-2.26 2.23H4.11c-1.31 0-2.26-.96-2.26-2.23s.95-2.23 2.26-2.23h5.65zm8.6 1.12c0-1.31.96-2.26 2.23-2.26 1.27 0 2.23.95 2.23 2.26 0 1.31-.96 2.26-2.23 2.26h-2.23v-2.26zm-1.13 0c0 1.31-.96 2.26-2.23 2.26s-2.23-.95-2.23-2.26v-5.65c0-1.31.96-2.26 2.23-2.26 1.27 0 2.23.95 2.23 2.26v5.65zm-1.13 4.11c1.31 0 2.26.96 2.26 2.23 0 1.27-.95 2.23-2.26 2.23s-2.26-.96-2.26-2.23v-2.23h2.26zm0-1.13c-1.31 0-2.26-.96-2.26-2.23s.95-2.23 2.26-2.23h5.65c1.31 0 2.26.96 2.26 2.23s-.95 2.23-2.26 2.23h-5.65z" />
                </svg>
                Sign up with Slack
              </motion.button>

              {/* Microsoft */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("microsoft")}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                  <rect x="14" y="1" width="9" height="9" fill="#7FBA00" />
                  <rect x="1" y="14" width="9" height="9" fill="#00A4EF" />
                  <rect x="14" y="14" width="9" height="9" fill="#FFB900" />
                </svg>
                Sign up with Microsoft
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Testimonial & Stats */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex w-full bg-linear-to-br from-[#1a0e3e] via-[#2d1b69] to-[#3C14B8] p-12 flex-col  text-white relative overflow-hidden"
      >
        {/* Assessment Image */}
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex"
        >
          <Image
            src={BoxImage}
            alt="Assessment"
            width={300}
            height={300}
            className="w-80 h-80 object-contain opacity-90"
          />
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <svg
              className="w-16 h-16 mb-6 text-white opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
          >
            Your personalized roadmap is ready instantly. The assessment takes almost no time,
            placing your career on the fast track today.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-semibold mb-1">Adedokun Daniel</p>
            <p className="text-white/80">Head of Design @SkillLink Comp</p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-12 relative z-10"
        >
          <div>
            <p className="text-xs text-white/60 mb-1">TRUSTED BY</p>
            <p className="text-3xl font-bold">100,000+</p>
            <p className="text-sm text-white/80">USERS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-white/80">ORGANIZATIONS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm text-white/80">INDUSTRIES</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
