"use client"
import React from "react";

export const Taskcounter = ({ completedCount, allCount, deleteAllDone }) => {
  return (
    <div className="flex justify-between border-t-2 border-amber-50 pt-4">
      <p>
        {completedCount} of {allCount} tasks completed
      </p>
      <button type="button" 
      onClick={() => {
        if (window.confirm("Are you sure you want to clear all completed tasks? ")) {
          deleteAllDone();
        }
      }}
      
      className="text-red-600  font-semibold px-2 cursor-pointer">
        Clear completed
      </button>
    </div>
  );
};

