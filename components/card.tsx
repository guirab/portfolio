import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main flex justify-center rounded-md">
      <h1 className="text-auto">{children}</h1>
    </div>
  );
};
