"use client";
import React from "react";
export const Tab = ({ filter, setFilter }) => {
  const tabButtons = ["all", "active", "completed"];
  return (
    <div className="flex gap-2 px-3">
      {tabButtons.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`h-[32px] rounded-[2px] text-[14px] font-medium transition-colors 
${
  filter === tab.toLowerCase()
    ? "bg-blue-600 text-white"
    : "bg-gray-100 text-gray-600"
}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
