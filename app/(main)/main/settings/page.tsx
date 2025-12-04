"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  Bell,
  Palette,
  Globe,
  Shield,
  LogOut,
  ChevronRight,
  Save,
  Camera,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"profile" | "privacy" | "preferences">("profile");
  const [formData, setFormData] = useState<FormData>({
    firstName: "Michael",
    lastName: "Smith",
    email: "michael@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate learner and software developer",
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2000);
  };

  const bgColor = "bg-white";
  const textColor = "text-gray-900";
  const secondaryText = "text-gray-600";
  const borderColor = "border-gray-200";
  const inputBg = "bg-gray-50 border-gray-200";
  const tabActiveBg = "bg-gray-100 border-b-2 border-[#4B19E6]";

  const tabs = [
    { id: "profile" as const, label: "Profile & Account", icon: User },
    { id: "privacy" as const, label: "Privacy & Security", icon: Shield },
    { id: "preferences" as const, label: "Preferences", icon: Palette },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto py-8 px-4"
    >
      {/* Page Header */}
      <div className="mb-8">
        <h1 className={`text-4xl font-bold ${textColor} mb-2`}>Settings</h1>
        <p className={`${secondaryText} text-lg`}>Manage your account and preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className={`flex gap-6 border-b ${borderColor} mb-8 overflow-x-auto`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 pb-4 px-4 transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? isDark
                      ? "text-[#4B19E6] border-b-2 border-[#4B19E6]"
                      : "text-[#4B19E6] border-b-2 border-[#4B19E6]"
                    : secondaryText
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Profile & Account Tab */}
      {activeTab === "profile" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Avatar Section */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>Profile Picture</h2>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#4B19E6] to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                MS
              </div>
              <button
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
                  bg-[#4B19E6] hover:bg-[#3712A8] text-white
                `}
              >
                <Camera className="w-5 h-5" />
                Upload Photo
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all`}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3.5 w-5 h-5 ${secondaryText}`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-3.5 w-5 h-5 ${secondaryText}`} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all`}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>Location</label>
                <div className="relative">
                  <MapPin className={`absolute left-3 top-3.5 w-5 h-5 ${secondaryText}`} />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all`}
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <label className={`block text-sm font-medium ${textColor} mb-2`}>Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50 transition-all resize-none`}
              />
            </div>

            {/* Save Button */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#4B19E6] to-[#3712A8] text-white font-medium hover:shadow-lg hover:shadow-[#4B19E6]/30 transition-all"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </motion.button>
              {savedMessage && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-green-500 font-medium"
                >
                  Changes saved successfully!
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Privacy & Security Tab */}
      {activeTab === "privacy" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Password Section */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
              <Lock className="w-6 h-6 text-[#4B19E6]" />
              Password & Security
            </h2>

            <div className="space-y-4">
              <button
                className={`w-full flex items-center justify-between p-4 rounded-lg border ${borderColor} hover:bg-[#4B19E6]/10 transition-all`}
              >
                <div className="text-left">
                  <p className={`font-medium ${textColor}`}>Change Password</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Update your password regularly for security
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#4B19E6]" />
              </button>

              <button
                className={`w-full flex items-center justify-between p-4 rounded-lg border ${borderColor} hover:bg-[#4B19E6]/10 transition-all`}
              >
                <div className="text-left">
                  <p className={`font-medium ${textColor}`}>Two-Factor Authentication</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Add an extra layer of security to your account
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#4B19E6]" />
              </button>
            </div>
          </div>

          {/* Privacy Section */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
              <Eye className="w-6 h-6 text-[#4B19E6]" />
              Privacy Settings
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Profile Visibility</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Make your profile visible to other users
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Show Learning Progress</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Allow others to see your learning achievements
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Allow Messaging</p>
                  <p className={`text-sm ${secondaryText}`}>Receive messages from other users</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>
            </div>
          </div>

          {/* Data & Storage */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>Data & Storage</h2>

            <button
              className={`w-full flex items-center justify-between p-4 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-all`}
            >
              <div className="text-left">
                <p className="font-medium text-red-500">Download Your Data</p>
                <p className={`text-sm ${secondaryText}`}>Get a copy of all your personal data</p>
              </div>
              <ChevronRight className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Preferences Tab */}
      {activeTab === "preferences" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Theme Settings */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
              <Palette className="w-6 h-6 text-[#4B19E6]" />
              Appearance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Dark Theme */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme("dark")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  isDark
                    ? "border-[#4B19E6] bg-[#4B19E6]/10"
                    : "border-gray-200 hover:border-[#4B19E6]"
                }`}
              >
                <Moon className={`w-8 h-8 mb-3 ${isDark ? "text-[#4B19E6]" : "text-gray-600"}`} />
                <p className={`font-medium ${isDark ? "text-[#4B19E6]" : textColor}`}>Dark Mode</p>
                <p className={`text-sm ${secondaryText}`}>Easy on the eyes</p>
              </motion.button>

              {/* Light Theme */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme("light")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  !isDark
                    ? "border-[#4B19E6] bg-[#4B19E6]/10"
                    : "border-gray-200 hover:border-[#4B19E6]"
                }`}
              >
                <Sun className={`w-8 h-8 mb-3 ${!isDark ? "text-[#4B19E6]" : "text-gray-600"}`} />
                <p className={`font-medium ${!isDark ? "text-[#4B19E6]" : textColor}`}>
                  Light Mode
                </p>
                <p className={`text-sm ${secondaryText}`}>Bright and clear</p>
              </motion.button>

              {/* System Theme */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-xl border-2 transition-all border-gray-200 hover:border-[#4B19E6]`}
              >
                <Globe className="w-8 h-8 mb-3 text-gray-600" />
                <p className={`font-medium ${textColor}`}>System</p>
                <p className={`text-sm ${secondaryText}`}>Follow device settings</p>
              </motion.button>
            </div>
          </div>

          {/* Notifications Preferences */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
              <Bell className="w-6 h-6 text-[#4B19E6]" />
              Notifications
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Course Updates</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Get notified about course updates and new content
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Assessment Reminders</p>
                  <p className={`text-sm ${secondaryText}`}>Reminders for upcoming assessments</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Messages</p>
                  <p className={`text-sm ${secondaryText}`}>Notifications for new messages</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div>
                  <p className={`font-medium ${textColor}`}>Marketing Emails</p>
                  <p className={`text-sm ${secondaryText}`}>
                    Promotional content and special offers
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                </label>
              </div>
            </div>
          </div>

          {/* Language & Region */}
          <div className={`${bgColor} border ${borderColor} rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
              <Globe className="w-6 h-6 text-[#4B19E6]" />
              Language & Region
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>Language</label>
                <select
                  className={`w-full px-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50`}
                >
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${textColor} mb-2`}>Timezone</label>
                <select
                  className={`w-full px-4 py-3 border rounded-lg ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-[#4B19E6]/50`}
                >
                  <option>UTC-5 (Eastern)</option>
                  <option>UTC-6 (Central)</option>
                  <option>UTC-7 (Mountain)</option>
                  <option>UTC-8 (Pacific)</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Logout Section */}
      <div className="mt-12 pt-8 border-t border-[#4B19E6]/20">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-red-500/20 text-red-500 hover:bg-red-500/30 font-medium transition-all"
        >
          <LogOut className="w-5 h-5" />
          Log Out from All Devices
        </motion.button>
        <p className={`text-sm ${secondaryText} mt-2`}>
          You will be signed out from all your active sessions
        </p>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
