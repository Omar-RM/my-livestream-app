"use client";

import { useSidebar } from "@/store/use-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";
  return <div>toggle</div>;
};
