import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="px-40 py-8 w-20 bg-main flex justify-center rounded-md">
        <h1 className="text-auto">{children}</h1>
      </div>
    </div>
  );
};
