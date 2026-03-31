"use client";
import React from "react";

export const Taskcontainer = ({ tasks, handleDelete, handleCheck }) => {
return (
  <div className="flex flex-col w-full gap-2">
    {tasks.map((task)=> (
      <div 
      key={task.id}
      className="w-full flex bg-slate-200 rounded-md justify-between p-4">
        <div className="flex gap-2 items-center">
          <input 
          type="checkbox"
          checked={task.IsCompleted}
          className="size-5"
          onChange={() => handleCheck(task.id)}/>
          <p className="text-xl"
          style={{
            textDecoration: task.IsCompleted ? "line-through" : "",
          }} >
            {task.InputName}
          </p>
        </div>
        <button 
        type="button"
        onClick={() =>{
          if (window.confirm("Are you sure you want to delete this task?"))
          { handleDelete(task.id);}
        } }
        className="text-red-600 font-semibold">
          Delete
        </button>
        </div>
    ))}
  </div>
);
};
      
