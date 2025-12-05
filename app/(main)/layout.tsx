"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/shared/Header";
import AppSidebar from "@/components/shared/appsidebar";
import Footer from "@/components/shared/Footer";
import PageLoader from "@/components/ui/loaders/PageLoader";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

function MainContent({ children }: { children: React.ReactNode }) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const isCollapsed = state === "collapsed";

  // Scroll to top on page change
  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, [pathname]);

  // Close mobile sidebar on route change
  useEffect(() => {
    if (isMobile && openMobile) {
      setOpenMobile(false);
    }
  }, [pathname, isMobile, openMobile, setOpenMobile]);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <PageLoader />
      
      {/* Mobile overlay backdrop */}
      {isMobile && openMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setOpenMobile(false)}
        />
      )}

      <div className="flex">
        <AppSidebar />
        <div
          className={`
            flex-1 flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            ${isMobile ? "ml-0" : isCollapsed ? "ml-[4.3rem]" : "ml-64"}
          `}
        >
          {/* Header */}
          <Header />
          {/* Main content */}
          <main className="flex-1 overflow-auto bg-[#EDE8FD] text-foreground transition-colors duration-300">
            <div
              className={`
                min-h-screen w-full
                transition-all duration-300 ease-in-out 
                ${isMobile ? "max-w-full" : isCollapsed ? "max-w-[calc(100vw-4.3rem)]" : "max-w-[calc(100vw-16rem)]"}
              `}
            >
              {children}
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <MainContent>{children}</MainContent>
    </SidebarProvider>
  );
}