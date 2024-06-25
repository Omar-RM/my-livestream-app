"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { useState, useEffect } from "react";

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col lg:w-60 h-full bg-background border-r boder-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
