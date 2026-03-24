import  Card  from "@/components/Card";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
<div className="w-[377px] h-[290px] bg-white rounded-[12px] p-6 flex flex-col gap-4">
  <p className="text-[20px] font-semibold text-black text-center">To-Do list</p>
<Input/>
<Tab/>

<p className="text-center text-gray-500 text[13px]">Powered by <a href="#" className="text-blue-500">Pinecone academy</a></p>
</div>
    </div>
  );
}
