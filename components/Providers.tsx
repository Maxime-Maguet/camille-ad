"use client";
import { LazyMotion, domAnimation } from "motion/react";

// Load only the domAnimation package
export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
