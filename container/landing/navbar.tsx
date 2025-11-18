"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import skillLogo from "@/public/landing/Logo (1).svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Impact", href: "#impact" },
    { name: "About", href: "#about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image
              src={skillLogo}
              alt="SkillLink"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-[#12253B] hover:text-[#3712A8] transition-all duration-300 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3712A8] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="px-6 py-2.5 text-sm font-medium text-[#3712A8] border-2 border-[#3712A8] rounded-lg hover:bg-[#3712A8] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Log In / Sign Up
            </Link>
            <Link
              href="#"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-[#3712A8] to-[#4B1BC8] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Find My Career Path
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#12253B] rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-[#12253B] rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#12253B] rounded-full transition-all"
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <motion.div
                className="py-4 space-y-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="block px-4 py-3 text-sm font-medium text-[#12253B] hover:text-[#3712A8] hover:bg-linear-to-r hover:from-purple-50 hover:to-transparent rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}

                <div className="my-3 border-t border-gray-100" />

                <motion.div
                  className="space-y-3 px-2"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                >
                  <Link
                    href="#"
                    className="block px-4 py-3 text-sm font-medium text-[#3712A8] border-2 border-[#3712A8] rounded-lg hover:bg-purple-50 transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In / Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#3712A8] to-[#4B1BC8] rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Find My Career Path
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;