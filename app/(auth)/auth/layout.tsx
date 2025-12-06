import Image from "next/image";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen max-h-screen overflow-clip">
      <div className="fixed top-3  left-[3%]">
        <Image
          src={"/icons/auth-logo.svg"}
          alt="Auth Logo"
          className="max-w-[10rem]"
          width={200}
          height={200}
        />
      </div>
      <main className="flex-2 flex justify-center items-center">{children}</main>
      <div className="h-full flex items-center justify-center  flex-col max-lg:hidden relative flex-3 overflow-clip bg-[#0F052E]">
        {/*==== Blob==== */}
        <div
          aria-hidden
          className="bg-[#4B19E6]/60 w-[80%] z-0 aspect-square rounded-full blur-[100px] absolute pointer-events-none -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2"
        />
        <div className="relative flex-1 w-full mt-12 h-full">
          <div className="flex justify-end">
            <Image
              src="/assessment-image.png"
              className="max-w-[18rem] object-center object-cover max-h-26"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex w-[90%] mx-auto">
            <div className="text-white">
              <svg
                width="70"
                height="53"
                viewBox="0 0 70 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_165_1295)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.3151 0H25.9056C22.5037 0 19.135 0.664244 15.992 1.95481C12.849 3.24537 9.99315 5.13697 7.58759 7.52162C5.18203 9.90627 3.27383 12.7373 1.97195 15.8529C0.670069 18.9686 0 22.308 0 25.6804V53H30.3151V25.6804H15.5434C15.5434 24.3315 15.8114 22.9957 16.3322 21.7494C16.8529 20.5032 17.6162 19.3708 18.5784 18.4169C19.5406 17.463 20.683 16.7064 21.9402 16.1902C23.1974 15.6739 24.5449 15.299 25.9056 15.299H30.3151V0ZM70 0H65.5905C62.1885 0 58.8199 0.664244 55.6769 1.95481C52.5338 3.24537 49.678 5.13697 47.2725 7.52162C44.8669 9.90627 42.9587 12.7373 41.6568 15.8529C40.3549 18.9686 39.6849 22.308 39.6849 25.6804V53H70V25.6804H55.2283C55.2283 24.3315 55.4963 22.9957 56.017 21.7494C56.5378 20.5032 57.3011 19.3708 58.2633 18.4169C59.2255 17.463 60.3679 16.7064 61.6251 16.1902C62.8823 15.6739 64.2297 15.299 65.5905 15.299H70V0Z"
                    fill="#3712A8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_1295">
                    <rect width="70" height="53" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="mt-6 font-(family-name:--font-geist) text-3xl xl:text-[35px] text-left  leading-[120%] font-light">
                Your personalized roadmap is ready instantly. The assessment takes almost no time,
                placing your career on the fast track today.
              </p>
              <p className="mt-6">
                <span>Adedokun Daniel</span>
                <span className="block text-xl">
                  Head of Design <span>@SkillLink Comp</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-white gap-6 w-full *:shrink-0 justify-between mx-auto max-w-[90%] relative flex whitespace-nowrap mb-12">
          <h1 className="xl:text-lg">Trusted By</h1>
          <div className="">
            <span className="xl:text-5xl text-3xl">100,000+</span>
            <p className="text-sm">USERS</p>
          </div>
          <div className="">
            <span className="xl:text-5xl text-3xl">500+</span>
            <p className="text-sm">ORANIZATIONS</p>
          </div>
          <div className="">
            <span className="xl:text-5xl text-3xl">20+</span>
            <p className="text-sm">INDUSTRIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
