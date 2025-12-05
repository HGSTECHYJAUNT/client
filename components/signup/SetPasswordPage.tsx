"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Check, X } from "lucide-react";
import Image from "next/image";

interface SetPasswordProps {
  onComplete: (password: string) => void;
}

const SetPasswordPage: React.FC<SetPasswordProps> = ({ onComplete }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [validations, setValidations] = useState({
    minLength: false,
    hasUpperLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setValidations({
      minLength: password.length >= 8,
      hasUpperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  useEffect(() => {
    if (confirmPassword) {
      setPasswordsMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const handleSubmit = () => {
    const allValid = Object.values(validations).every((v) => v);
    if (allValid && passwordsMatch && confirmPassword) {
      onComplete(password);
    }
  };

  const ValidationItem = ({ isValid, text }: { isValid: boolean; text: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 text-sm"
    >
      {isValid ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-gray-400" />
      )}
      <span className={isValid ? "text-green-600" : "text-gray-600"}>{text}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1a0e3e] via-[#2d1b69] to-[#3C14B8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Element - Assessment Image */}
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
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 flex items-center justify-center opacity-60"
      >
        <Image
          src="/dashboard/assessment-image.png"
          alt="Assessment"
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pick a password
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-8"
          >
            Now, set a strong password by following the requirements below:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3C14B8] focus:border-transparent transition-all text-lg"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-4 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3C14B8] transition-all text-lg ${
                  confirmPassword && !passwordsMatch ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {confirmPassword && !passwordsMatch && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                Passwords do not match
              </motion.p>
            )}

            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
              <ValidationItem isValid={validations.minLength} text="Min. 8 characters" />
              <ValidationItem isValid={validations.hasNumber} text="A number" />
              <ValidationItem
                isValid={validations.hasUpperLower}
                text="Upper- and lowercase letters"
              />
              <ValidationItem isValid={validations.hasSpecial} text="A special char" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={
                !Object.values(validations).every((v) => v) || !passwordsMatch || !confirmPassword
              }
              className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg text-lg ${
                Object.values(validations).every((v) => v) && passwordsMatch && confirmPassword
                  ? "bg-[#3C14B8] text-white hover:bg-[#160742] hover:shadow-xl cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
