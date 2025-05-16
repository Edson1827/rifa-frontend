import React from "react";

export function Badge({ children, ...props }) {
  return (
    <span className="px-2 py-1 bg-gray-200 rounded text-sm" {...props}>
      {children}
    </span>
  );
}
