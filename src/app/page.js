"use client";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";
import { Taskcontainer } from "@/components/Taskcontainer";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [InputValue, setInputValue] = useState("");
  console.log(InputValue);
  const [tasks, settasks] = useState([]);
  const handleClick = () => {
    if (InputValue === "" && InputValue.length === 0) {
      alert("write task name");
      return;
    }
  };
  settasks([
    { InputName: InputValue, Iscompleted: false, id: Date.now() },
    ...tasks,
  ]);
  setInputValue("");

  const handleCheck = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, Iscompleted: !task.Iscompleted };
      } else {
        return task;
      }
    });
    settasks(updatedTasks);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-[377px] h-[290px] bg-white rounded-[12px] p-6 flex flex-col gap-4">
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
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={task.Iscompleted}
                onChange={handleClick}
                className="h-[20px] w-[20px] bg-white rounded-[5px]"
                handleCheck={() => handleCheck(task.id)}
              />
              <p>{task.InputName}</p>
            </div>
          );
        })}
        <Taskcontainer />
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
