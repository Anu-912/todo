"use client";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";
import { Taskcontainer } from "@/components/Taskcontainer";
import { Taskcounter } from "@/components/Taskcounter";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [InputValue, setInputValue] = useState("");
  const [tasks, settasks] = useState([]);
  const handleClick = () => {
    if (InputValue === "" && InputValue.length === 0) {
      alert("write task name");
      return;
    }
  settasks([
    { InputName: InputValue, IsCompleted: false, id: crypto.randomUUID() },
    ...tasks,
  ]);
  setInputValue("");
  };
  const handleCheck = (taskId) => {
     settasks(
      tasks.map((task) => 
        task.id === taskId
    ? { ...task, IsCompleted: !task.IsCompleted} : task)
);
  
  };
  
  const handleDelete = (taskId) => {
    settasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.IsCompleted;
    if (filter === "completed") return task.IsCompleted;
    return true;
  });
const completedCount = tasks.filter((task) => task.IsCompleted).length;
  const allCount = tasks.length;
  const deleteAllDone = () => { 
  
    
    settasks(tasks.filter((task)=> !task.IsCompleted));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-[377px]   bg-white rounded-[12px] p-6 flex flex-col gap-4">
        <p className="text-[20px] font-semibold text-black text-center">
          To-Do list
        </p>
        <div className="flex gap-3 w-full">
          <Input setInputValue={setInputValue} InputValue={InputValue} />
          <button
            onClick={handleClick}
            className="w-[70px] h-[40px] bg-blue-600 text-white text-[16px] font-medium rounded-[8px]"
          >
            Add
          </button>
        </div>

        <Tab filter={filter} setFilter={setFilter} />
        
        <Taskcontainer
          tasks={filteredTasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
           deleteAllDone={deleteAllDone}
        />
         <Taskcounter completedCount={completedCount} allCount={allCount}  deleteAllDone={deleteAllDone}/>
        <p className="text-center text-gray-500 text[13px]">
          Powered by{" "}
          <a href="#" className="text-blue-500">
            Pinecone academy
          </a>
        </p>
      </div>
    </div>
  );
}
