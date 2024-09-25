import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto mb-12 mt-12 flex max-w-2xl flex-col px-3 py-2">
      <div className="grid gap-4 space-x-4 sm:grid-cols-2 md:grid-cols-2">
        <div>
          <Skeleton className="h-48 w-80 rounded-xl bg-[var(--accents-2)]" />
          <div className="mt-1.5 flex flex-col space-y-1.5">
            <Skeleton className="h-4 w-80 rounded-md bg-[var(--accents-2)]" />
            <Skeleton className="h-4 w-56 rounded-md bg-[var(--accents-2)]" />
          </div>
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <Skeleton className="h-8 flex-1 rounded-lg bg-[var(--accents-2)]" />
            <Skeleton className="h-8 flex-1 rounded-lg bg-[var(--accents-2)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
