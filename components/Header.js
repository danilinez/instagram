import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between">
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
      <h1>Search</h1>
      {/* User Actions */}
      <h1>Account</h1>
    </div>
  );
}
