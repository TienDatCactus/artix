// hooks/useBreakpoint.ts
"use client";
import { useState, useEffect } from "react";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return "sm"; // mobile
  if (width < 768) return "md"; // phablet
  if (width < 1024) return "lg"; // tablet
  if (width < 1280) return "xl"; // laptop
  if (width < 1536) return "2xl"; // large screen
  return "xl";
};

export const useBreakpoint = (): Breakpoint | null => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const update = () => setBreakpoint(getBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
};
