// components/ui/SocialButton.tsx
import { cn } from "@/lib/utils";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export default function SocialButton({ icon, label, className, ...props }: SocialButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-[#EFEFEF] bg-white px-4 py-3 text-sm font-medium hover:bg-gray-50 transition",
        className
      )}
    >
      {icon}
      {label}
    </button>
  );
}
