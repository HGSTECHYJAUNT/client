"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  Settings,
  Bell,
  User,
  Sun,
  Moon,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/providers/theme-provider";
import { useSidebar } from "@/components/ui/sidebar";

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName = "Daniel" }) => {
  const { theme, setTheme } = useTheme();
  const { isMobile, state, toggleSidebar, setOpenMobile, openMobile, setOpen, open } = useSidebar();
  const isDark = theme === "dark";
  const isCollapsed = state === "collapsed";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleSidebarOpen = () => {
    if (isMobile) {
      setOpenMobile(true);
    } else {
      if (isCollapsed) {
        setOpen(true);
      }
    }
  };

  // Light theme is the default (light background, dark text)
  const headerBg = "bg-gray-100 border-b border-gray-200";

  const headerText = "text-gray-900";
  const headerPlaceholder = "placeholder-gray-400";
  const headerInputBg = "bg-white border-gray-300 backdrop-blur-md ";
  const headerIconColor = "text-gray-600 hover:text-gray-900";
  const headerHoverBg = "hover:bg-gray-200";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${headerInputBg} px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-30`}
      >
        <div className="max-w-9xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg}`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg}`}
            >
              <Heart className="w-5 h-5" />
            </motion.button>

            <div className="relative hidden sm:block">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400`}
              />
              <input
                type="text"
                placeholder="Search any course"
                className={`pl-10 pr-4 py-2 border rounded-lg text-sm ${headerBg} ${headerText} ${headerPlaceholder} focus:outline-none focus:ring-1 focus:ring-[#4B19E6]/50 focus:border-transparent w-64`}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button> */}

              {/* Settings Link */}
              <Link href="/main/settings">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg} hidden sm:block`}
                >
                  <Settings className="w-5 h-5" />
                </motion.button>
              </Link>

              {/* Notifications Link */}
              <Link href="/main/notifications">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg} relative`}
                >
                  <Bell className="w-5 h-5" />
                  <span
                    className={`absolute top-1 right-1 w-2 h-2 rounded-full ${isDark ? "bg-red-500" : "bg-red-600"}`}
                  ></span>
                </motion.button>
              </Link>

              {/* Profile Link */}
              <Link href="/main/settings">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center text-white font-bold text-sm cursor-pointer ${isDark ? "bg-linear-to-br from-blue-400 to-purple-500" : "bg-linear-to-br from-[#3C14B8] to-[#3712A8]"}`}
                >
                  {userName?.charAt(0) || "U"}
                </motion.div>
              </Link>

              {/* Mobile Sidebar Trigger */}
              {mounted && isMobile && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleSidebar}
                  className={`p-2 rounded-lg transition-colors ${headerIconColor} ${headerHoverBg}`}
                >
                  <Menu className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
