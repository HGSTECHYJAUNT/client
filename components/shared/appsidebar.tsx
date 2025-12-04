"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart3,
  BookOpen,
  CheckSquare,
  Zap,
  Users,
  MessageSquare,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Grid2X2Plus,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/components/providers/theme-provider";

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

const AppSidebar: React.FC = () => {
  const pathname = usePathname();
  const { state, toggleSidebar, isMobile, openMobile } = useSidebar();
  const { theme } = useTheme();
  const isCollapsed = state === "collapsed";

  const mainNavItems: SidebarItem[] = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Dashboard", icon: Grid2X2Plus, href: "/main/dashboard" },
    { title: "My Learnings", icon: BookOpen, href: "/main/learning" },
    { title: "Skill Validation Projects", icon: CheckSquare, href: "/main/skills-projects" },
    { title: "Assessment", icon: BarChart3, href: "/main/assessment" },
    { title: "Paid Gigs", icon: Zap, href: "/main/paid-gigs" },
    { title: "Digital Mentor", icon: Users, href: "/main/digital-mentor" },
  ];

  const secondaryNavItems: SidebarItem[] = [
    { title: "Messages", icon: MessageSquare, href: "/main/messages", badge: "2" },
    { title: "Notifications", icon: Bell, href: "/main/notifications", badge: "3" },
  ];

  const bottomNavItems: SidebarItem[] = [
    { title: "Settings", icon: Settings, href: "/main/settings" },
  ];

  return (
    <>
      <aside
        data-sidebar="sidebar"
        className={`
        fixed left-0 top-0 h-screen
        bg-[#0F052E]
        border-r border-[#4B19E6]/20
        flex flex-col transition-all duration-300 ease-in-out
        ${isMobile ? `${openMobile ? "translate-x-0 z-50" : "-translate-x-full z-50"} w-64 absolute` : `${isCollapsed ? "w-[4.3rem] pt-5" : "w-64"} z-40`}
        shadow-xl scrollbar-custom
      `}
      >
        {/* Logo and Brand */}
        <div className="flex-none px-2">
          <Link href="/main/dashboard" className="flex items-center gap-3 justify-center">
            {isCollapsed && !isMobile ? (
              <div className="h-10 w-10 relative flex items-center justify-center">
                <Image
                  src="/landing/SkillLink logo 2.svg"
                  alt="SkillLink"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="flex items-center gap-y-3 ml-5">
                <div className="h-8 w-8 -mr-10 relative shrink-0">
                  <Image
                    src="/landing/SkillLink logo 2.svg"
                    alt="SkillLink"
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
                <Image
                  src="/landing/footerLogo.svg"
                  alt="SkillLink Text"
                  width={120}
                  height={30}
                  className="w-auto h-auto"
                />
              </div>
            )}
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto px-2 py-4 scrollbar-custom">
          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive =
                pathname.includes(item.href.split("/")[2]) && item.href !== "/main/home";
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 relative
                  ${isCollapsed && !isMobile ? "justify-center px-3" : ""}
                  ${
                    isActive
                      ? "bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-md shadow-[#4B19E6]/30 font-medium"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }
                `}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-purple-400"}`}
                  />
                  {(!isCollapsed || isMobile) && (
                    <span className="text-sm font-medium whitespace-nowrap">{item.title}</span>
                  )}
                  {isActive && !isCollapsed && !isMobile && (
                    <div className="absolute right-3 h-2 w-2 rounded-full bg-white"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          {!isCollapsed && !isMobile && (
            <div className="my-4 px-2 h-px bg-linear-to-r from-transparent via-[#4B19E6]/30 to-transparent"></div>
          )}

          {/* Secondary Navigation */}
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => {
              const isActive = pathname.includes(item.href.split("/")[2]);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 relative
                  ${isCollapsed && !isMobile ? "justify-center px-3" : ""}
                  ${
                    isActive
                      ? "bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-lg shadow-[#4B19E6]/30 font-medium"
                      : "text-gray-300 hover:text-white hover:bg-[#4B19E6]/10"
                  }
                `}
                >
                  <div className="relative">
                    <Icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#4B19E6]"}`}
                    />
                    {item.badge && (
                      <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  {(!isCollapsed || isMobile) && (
                    <>
                      <span className="text-sm font-medium flex-1 whitespace-nowrap">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex-none px-2 pb-4 pt-4 border-t border-[#4B19E6]/20">
          {/* Bottom Navigation */}
          <nav className="space-y-1 mb-4">
            {bottomNavItems.map((item) => {
              const isActive = pathname.includes(item.href.split("/")[2]);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200
                  ${isCollapsed && !isMobile ? "justify-center px-3" : ""}
                  ${
                    isActive
                      ? "bg-linear-to-r from-[#4B19E6] to-[#3712A8] text-white shadow-lg shadow-[#4B19E6]/30 font-medium"
                      : "text-gray-300 hover:text-white hover:bg-[#4B19E6]/10"
                  }
                `}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#4B19E6]"}`}
                  />
                  {(!isCollapsed || isMobile) && (
                    <span className="text-sm font-medium whitespace-nowrap">{item.title}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4B19E6]/10 border border-[#4B19E6]/20">
              <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#4B19E6] to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                MS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate text-white">Michael Smith</p>
                <p className="text-xs truncate text-gray-400">michael@example.com</p>
              </div>
            </div>
          )}

          {isCollapsed && !isMobile && (
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#4B19E6] to-blue-500 flex items-center justify-center text-white font-bold text-xs mx-auto">
              MS
            </div>
          )}

          {/* Collapse Button */}
          {!isMobile && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSidebar();
              }}
              className={`
              w-full flex items-center gap-3 rounded-xl p-3 transition-all duration-200 mt-3
              ${isCollapsed ? "justify-center" : ""}
              text-gray-300 hover:bg-[#4B19E6]/10 hover:text-white
            `}
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <>
                  <ChevronLeft className="h-5 w-5" />
                  <span className="text-sm font-medium">Collapse</span>
                </>
              )}
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Backdrop Overlay */}
      {isMobile && openMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={() => toggleSidebar()}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
        />
      )}
    </>
  );
};

export default AppSidebar;
