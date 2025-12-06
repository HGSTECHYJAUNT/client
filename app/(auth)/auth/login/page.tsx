import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import SocialButton from "@/components/ui/social-button";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto w-full px-6 max-w-xl">
      <h1 className="text-3xl text-[#121212] pb-6 font-medium">Login</h1>
      <div className="space-y-6">
        <Input
          icon={
            <svg
              width="18"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.2 1.2L9.76 6.87C9.82924 6.92193 9.91345 6.95 10 6.95C10.0865 6.95 10.1708 6.92193 10.24 6.87L17.8 1.2H2.2ZM18.8 1.95L10.96 7.83C10.683 8.03771 10.3462 8.15 10 8.15C9.65381 8.15 9.31695 8.03771 9.04 7.83L1.2 1.95V14.8H18.8V1.95ZM1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0Z"
                fill="black"
              />
            </svg>
          }
          placeholder="Email Address"
        />
        <Input
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.025 24H3.975C2.61 24 1.5 22.89 1.5 21.525V9.975C1.5 8.61 2.61 7.5 3.975 7.5H20.025C21.39 7.5 22.5 8.61 22.5 9.975V21.51C22.5 22.875 21.39 23.985 20.025 23.985V24ZM3.975 9C3.435 9 3 9.435 3 9.975V21.51C3 22.05 3.435 22.485 3.975 22.485H20.025C20.565 22.485 21 22.05 21 21.51V9.975C21 9.435 20.565 9 20.025 9H3.975Z"
                fill="black"
              />
              <path
                d="M18.8095 9H5.18945V6.81C5.18945 3.06 8.24945 0 11.9995 0C15.7495 0 18.8095 3.06 18.8095 6.81V9ZM6.68945 7.5H17.3095V6.81C17.3095 3.885 14.9245 1.5 11.9995 1.5C9.07445 1.5 6.68945 3.885 6.68945 6.81V7.5Z"
                fill="black"
              />
              <path
                d="M18 17.25C18.8284 17.25 19.5 16.5784 19.5 15.75C19.5 14.9216 18.8284 14.25 18 14.25C17.1716 14.25 16.5 14.9216 16.5 15.75C16.5 16.5784 17.1716 17.25 18 17.25Z"
                fill="black"
              />
              <path
                d="M12 17.25C12.8284 17.25 13.5 16.5784 13.5 15.75C13.5 14.9216 12.8284 14.25 12 14.25C11.1716 14.25 10.5 14.9216 10.5 15.75C10.5 16.5784 11.1716 17.25 12 17.25Z"
                fill="black"
              />
              <path
                d="M6 17.25C6.82843 17.25 7.5 16.5784 7.5 15.75C7.5 14.9216 6.82843 14.25 6 14.25C5.17157 14.25 4.5 14.9216 4.5 15.75C4.5 16.5784 5.17157 17.25 6 17.25Z"
                fill="black"
              />
            </svg>
          }
          placeholder="Password"
          type="password"
        />
        <Button className="cursor-pointer">Login</Button>
        <hr className="border-[#EFEFEF]/90  border-t" />
        <div className="space-y-4">
          <SocialButton
            label="Sign up with Google"
            icon={
              <Image
                src={"/icons/google.png"}
                width={200}
                className="h-5 w-5"
                height={200}
                alt="google-icon"
              />
            }
          ></SocialButton>
          <SocialButton
            label="Sign up with Slack"
            icon={
              <Image
                src={"/icons/slack.png"}
                width={200}
                className="h-5 w-5"
                height={200}
                alt="google-icon"
              />
            }
          ></SocialButton>
          <SocialButton
            label="Sign up with Microsoft"
            icon={
              <Image
                src={"/icons/microsoft.png"}
                width={200}
                className="h-5 w-5"
                height={200}
                alt="google-icon"
              />
            }
          ></SocialButton>
        </div>
      </div>
    </div>
  );
};

export default Page;
