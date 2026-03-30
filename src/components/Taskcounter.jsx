"use client";
import React from "react";

export const Taskcontainer = ({ tasks, handleDelete, handleCheck }) => {
  if (tasks.length === 0)
    return (<p className="text-gray-200 text-[20px] "> Add one above! </p>);
  return (
    <div className="flex flex-col w-full gap-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full flex bg-slate-200 rounded-md justify-between p-4"
        >
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={task.Iscompleted}
              className="size-5"
            onChange={() => handleCheck(task.id)}
            ></input>
            <p
              className="text-xl"
              style={{
                textDecoration: task.Iscompleted ? "line-throgh" : "",
              }}
            >
              {task.InputName}
            </p>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-600 bg-red-200 font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
