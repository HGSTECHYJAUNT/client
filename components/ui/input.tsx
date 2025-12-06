"use client";
// components/ui/Input.tsx
import { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, type = "text", className, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && show ? "text" : type;

    return (
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
        )}
        <input
          ref={ref}
          type={inputType}
          className={cn(
            "w-full rounded-xl border border-[#EFEFEF] px-4 py-3 text-sm outline-none focus:border-primary ring-primary focus:primary/50",
            icon && "pl-11",
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
