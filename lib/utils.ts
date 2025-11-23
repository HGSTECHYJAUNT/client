// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | number | bigint | boolean | null | undefined)[]) {
  return twMerge(clsx(inputs));
}
