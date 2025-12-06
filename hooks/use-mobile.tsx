import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // checking if window is defined to avoid SSR issues
    return typeof window !== "undefined" ? window.innerWidth < 1000 : false;
  });

  useEffect(() => {
    // run the effect only when the window is defined
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
