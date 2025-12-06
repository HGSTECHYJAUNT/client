"use client";
import { useState } from "react";
import SetNamePage from "@/components/signup/SetNamePage";
import SetPasswordPage from "@/components/signup/SetPasswordPage";
import SignUpPage from "@/components/signup/SignupPage";
import { AnimatePresence } from "framer-motion";

const Page = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ email: "", name: "", password: "" });

  return (
    <AnimatePresence mode="wait">
      {step === 1 && (
        <SignUpPage
          key="signup"
          onContinue={(email) => {
            setUserData({ ...userData, email });
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <SetNamePage
          key="name"
          onContinue={(name) => {
            setUserData({ ...userData, name });
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <SetPasswordPage
          key="password"
          onComplete={(password) => {
            setUserData({ ...userData, password });
            console.log("Complete!", userData);
            alert("Registration Complete!");
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default Page;
