import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
