"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { useState, useEffect } from "react";
import { useIsClient } from "usehooks-ts";

import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  // const [isClient, setIsClient] = useState(false);
  const isClient = useIsClient();

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r boder-[#2D2E35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r boder-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
