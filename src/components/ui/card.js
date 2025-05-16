import React from "react";

export function Card({ children, ...props }) {
  return <div className="border rounded p-4 bg-white" {...props}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
