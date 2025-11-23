// components/ui/Button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({
  loading,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-lg py-3.5 text-sm font-medium transition",
        variant === "primary" && "bg-primary text-white hover:bg-primary/70",
        variant === "outline" && "border border-gray-300 bg-white hover:bg-gray-50",
        variant === "ghost" && "bg-transparent text-gray-600 hover:bg-gray-100",
        props.disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
