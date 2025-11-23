import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope, Inter, Geist } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/query";
import QueryClient from "@/providers/QueryClient";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SkillLink - Your Path to Career Success",
  description: "Find your perfect skill, get a personalized plan, and start earning with SkillLink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${geist.className} ${inter.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <QueryClient>{children}</QueryClient>
      </body>
    </html>
  );
}
