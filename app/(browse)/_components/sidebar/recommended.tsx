"use client";
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";

interface RecommendedProps {
  data: User[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;

  return (
    <>
      <div className="">
        {showLabel && (
          <div className="pl-6 mb-4">
            <p className="text-sm text-muted-foreground">Recommended!</p>
          </div>
        )}
        <ul className="space-y-2 px-2">
          {data.map((user) => (
            <div key={user.id} className="">
              {user.username}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
