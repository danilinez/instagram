import React from 'react'
import Image from "next/legacy/image";
import {EllipsisVerticalIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

export default function Post({username, userImg, img, caption}) {
  return (
    <div className="bg-white shadow-sm border border-gray-300 mb-4">
      <div className="flex items-center justify-between py-3 px-2">
        <div className="inline-flex items-center gap-3">
          <div className="ml-1 cursor-pointer h-9 w-9 relative rounded-full overflow-hidden ring-2 ring-gray-200">
            <Image
              src={userImg}
              layout="fill"
              className="object-contain"
            />
          </div>
          <h6 className="text-sm font-bold">{username}</h6>
        </div>
        <div className="text-slate-600 hover:text-black cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
          <EllipsisVerticalIcon className="h-6 w-6 " />
        </div>
      </div>
      <div className="pt-[100%] relative">
        <img
          src={img}
          className="absolute h-full w-full object-cover top-0"
        />
      </div>
      <div className="flex items-center justify-between pt-4 px-4">
        <div className="inline-flex items-center gap-2">
          <div className="text-black cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
            <HeartIcon className="h-6 w-6 " />
          </div>
          <div className="text-black cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
          </div>
        </div>
        <div className="text-black cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
          <BookmarkIcon className="h-6 w-6 " />
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm truncate"><strong className="text-sm pr-2">{username}</strong>{caption}</p>
      </div>
      <form className="flex items-center px-4 gap-3 pb-2">
        <div className="text-black cursor-pointer scale-100 hover:scale-110 transition-transform duration-100 ease-in">
          <FaceSmileIcon className="h-6 w-6" />
        </div>
        <input className="w-full focus:ring-0 border-0" type="text" placeholder="Enter your comment..." /> 
        <button className="border-0 bg-transparent text-blue-400 opacity-85 hover:opacity-100 hover:text-blue-500 font-bold">Post</button>
      </form>
    </div>
  )
}
