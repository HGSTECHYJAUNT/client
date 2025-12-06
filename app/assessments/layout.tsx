import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Assesment | Skill Link",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-linear-to-b from-black pb-12 min-h-screen relative overflow-x-clip px-4 via-[#4B19E6] to-black">
      <Blob />
      {children}
    </main>
  );
};

export default Layout;

const Blob = () => {
  return (
    <div className="pointer-events-none top-[50%] -translate-y-1/2 absolute bg-linear-to-bl rounded-4xl aspect-square  w-full h-[30vh] blur-[150px] from-[#B048FF]/50 via-[#4900DB] to-[#440263]"></div>
  );
};
