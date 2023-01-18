import React from "react";
import Image from "next/legacy/image";

export default function Feed() {
  return (
    <div className="mt-4 p-4 shadow-sm border border-gray-300 bg-white">
      <h6 className="font-bold text-dark text-sm mb-3">Suggesions</h6>
      <div className="flex items-center">
      <div className="cursor-pointer min-w-[40px] h-10 w-10 relative rounded-full overflow-hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/45146013"
          layout="fill"
          className="object-contain p-3"
        />
      </div>
      <div className="px-3 w-full">
        <h6 className="font-medium text-black text-sm">aidins_drums</h6>
      </div>
      <button className="text-blue-500 whitespace-nowrap font-bold text-sm hover:text-cyan-600">Follow</button>
    </div>
    </div>
  );
}
