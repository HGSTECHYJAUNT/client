import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-2">
          <Image
            src="/dashboard/Logo (1).svg"
            alt="SkillLink"
            width={32}
            height={32}
            className="w-32 h-10 object-cover"
          />
          {/* <span className="text-2xl font-bold text-[#3C14B8]">SkillLink</span> */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
