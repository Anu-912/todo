import React from "react";

export const Taskcounter = ({ completedCount, allCount, deleteAllDone }) => {
  return (
    <div className="flex justify-between border-t-2 border-amber-50 pt-4">
      <p>
        {completedCount} of {allCount} tasks completed
      </p>
      <p onClick={deleteAllDone} className="text-red-600  font-semibold px-2">
        Claer completed
      </p>
    </div>
  );
};
