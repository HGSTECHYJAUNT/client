"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

interface LoginProps {
  onContinue: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onContinue }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@") && password.length >= 8) {
      onContinue(email, password);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Login Form */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 bg-white flex flex-col justify-center px-12 py-8"
      >
        <div className="max-w-sm w-full">
          {/* Content */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Login</h1>

            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C14B8] focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full px-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C14B8] focus:border-transparent transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-3 bg-[#3C14B8] hover:bg-[#160742] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              >
                Login
              </motion.button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-2">
              {/* Google */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("google")}
                className="w-full py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Sign up with Google
              </motion.button>

              {/* Slack */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("slack")}
                className="w-full py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.64 9.76c0 1.31-.96 2.26-2.23 2.26-1.27 0-2.23-.95-2.23-2.26 0-1.31.96-2.26 2.23-2.26h2.23v2.26zm1.13 0c0-1.31.96-2.26 2.23-2.26s2.23.95 2.23 2.26v5.65c0 1.31-.96 2.26-2.23 2.26-1.27 0-2.23-.95-2.23-2.26v-5.65zM9.76 5.64c-1.31 0-2.26-.96-2.26-2.23 0-1.27.95-2.23 2.26-2.23s2.26.96 2.26 2.23v2.23H9.76zm0 1.13c1.31 0 2.26.96 2.26 2.23s-.95 2.23-2.26 2.23H4.11c-1.31 0-2.26-.96-2.26-2.23s.95-2.23 2.26-2.23h5.65zm8.6 1.12c0-1.31.96-2.26 2.23-2.26 1.27 0 2.23.95 2.23 2.26 0 1.31-.96 2.26-2.23 2.26h-2.23v-2.26zm-1.13 0c0 1.31-.96 2.26-2.23 2.26s-2.23-.95-2.23-2.26v-5.65c0-1.31.96-2.26 2.23-2.26 1.27 0 2.23.95 2.23 2.26v5.65zm-1.13 4.11c1.31 0 2.26.96 2.26 2.23 0 1.27-.95 2.23-2.26 2.23s-2.26-.96-2.26-2.23v-2.23h2.26zm0-1.13c-1.31 0-2.26-.96-2.26-2.23s.95-2.23 2.26-2.23h5.65c1.31 0 2.26.96 2.26 2.23s-.95 2.23-2.26 2.23h-5.65z" />
                </svg>
                Sign up with Slack
              </motion.button>

              {/* Microsoft */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin("microsoft")}
                className="w-full py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium text-gray-700 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
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
        className="hidden lg:flex w-1/2 px-12 py-8 flex-col justify-between text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #3C14B8 0%, #2d1b69 40%, #1a0e3e 100%)",
        }}
      >
        {/* Assessment Image Background - Animated */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-16 w-96 h-96 flex items-center justify-center opacity-80"
        >
          <Image
            src="/dashboard/assessment-image.png"
            alt="Assessment"
            width={350}
            height={350}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <svg
              className="w-14 h-14 text-white opacity-60"
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
            className="text-2xl md:text-3xl font-bold leading-snug mb-6 pr-8"
          >
            Your personalized roadmap is ready instantly. The assessment takes almost no time,
            placing your career on the fast track today.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-semibold text-base mb-1">Adedokun Daniel</p>
            <p className="text-white/70 text-sm">Head of Design @SkillLink Comp</p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-16 relative z-10 pt-6"
        >
          <div>
            <p className="text-xs text-white/60 mb-2 font-semibold tracking-wide">TRUSTED BY</p>
            <p className="text-3xl font-bold">100,000+</p>
            <p className="text-xs text-white/70 mt-1">USERS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-xs text-white/70 mt-1">ORGANIZATIONS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-xs text-white/70 mt-1">INDUSTRIES</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
