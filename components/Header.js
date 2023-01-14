import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4">
      {/* Brand */}
      <div className="">
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
      <div className="relative inline-flex items-center  rounded-md bg-white ring-1 ring-slate-300">
        <div className="px-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-600"/>
        </div>
        <input type="text" className="border-none focus:ring-0 bg-transparent px-0 text-sm" placeholder="Search" />
      </div>
      {/* User Actions */}
      <h1>Account</h1>
    </div>
  );
}
