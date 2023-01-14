import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, PlusCircleIcon, HomeIcon } from "@heroicons/react/24/outline";


export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between gap-x-4 px-4">
      {/* Brand */}
      <div className="inline-flex items-center">
        <div className="cursor-pointer h-16 w-32 relative hidden lg:inline-grid">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            fill="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-16 w-8 relative lg:hidden">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            fill="fill"
            className="object-contain"
          />
        </div>
      </div>
      {/* Search */}
      <div className="relative inline-flex items-center rounded-md bg-white ring-1 ring-slate-300 grow-1 w-full md:w-auto">
        <div className="px-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-600"/>
        </div>
        <input type="text" className="border-none focus:ring-0 bg-transparent px-0 text-sm" placeholder="Search" />
      </div>
      {/* User Actions */}
      <div className="inline-flex items-center">
        <div className="px-2 text-slate-600 hover:text-cyan-600 cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
          <PlusCircleIcon className="h-6 w-6"/>
        </div>
        <div className="px-2 text-slate-600 hover:text-cyan-600 cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
          <HomeIcon className="h-6 w-6 "/>
        </div>
        <div className="cursor-pointer h-8 w-8 relative ml-3 rounded-full overflow-hidden ring-1 ring-slate-700">
          <Image 
            src="https://avatars.githubusercontent.com/u/45146013"
            fill="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
