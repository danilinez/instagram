import React from "react";
import Image from "next/legacy/image";

export default function Feed() {
  return (
    <div className="flex items-center p-4 shadow-sm border border-gray-300 bg-white">
      <div className="cursor-pointer min-w-[48px] h-12 w-12 relative rounded-full overflow-hidden ring-2 p-3 ring-slate-300">
        <Image
          src="https://avatars.githubusercontent.com/u/45146013"
          layout="fill"
          className="object-contain p-3"
        />
      </div>
      <div className="px-3 w-full">
        <h6 className="font-bold text-black">idahmed</h6>
        <p className="text-slate-500 text-xs">Welcome to Instagram</p>
      </div>
      <button className="text-blue-500 whitespace-nowrap font-bold text-sm hover:text-cyan-600">Sign Out</button>
    </div>
  );
}
