import React from 'react'
import { Dot, Airplay, Play, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { type } from 'os'
interface CarousalMainProps{
username:string
typeOfStream:string
viewers:number
timeAgo:number
description:string
tags: string[]
}

const formatViewers = (viewers: number): string => {
  if (viewers >= 1000) {
    const viewersInK = (viewers / 1000).toFixed(1);
    return `${viewersInK}k viewers`;
  } else {
    return `${viewers} viewers`;
  }
};
const CarousalMain = ({username, typeOfStream, viewers, timeAgo, description, tags}:CarousalMainProps) => {
  return (
    <div className='bg-gray-200 mx-12 my-4 rounded-2xl flex'>
      
      <div className="bg-gray-800 px-8 py-5 pb-2 w-1/2 rounded-tl-2xl rounded-bl-2xl">
        <div className="flex space-x-4  items-center">
          <div className="flex bg-red-500 text-white text-xs justify-center items-center pl-2 -pr-2 rounded-sm">
            <p>LIVE</p>
            <Dot />
          </div>
          <p className="text-sm font-medium text-white">POPULAR STREAMS</p>
        </div>

        <div className="profile flex mt-4 items-center justify-between ">
          <div className="flex items-center">
            <Image
              src="./landing-1.svg"
              alt=""
              height={32}
              width={32}
              className="rounded-full"
            />
            <div className="mx-4">
              <p className="text-sm font-medium text-white">{username}</p>
              <p className="text-xs -mt-1 text-white">{typeOfStream}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-white text-right">{formatViewers(viewers)}</p>
            <p className="text-xs text-white text-right -mt-1">{timeAgo} mins ago</p>
          </div>
        </div>

        <div className="tags mt-4 flex space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className='bg-gray-300 px-1 py-1 text-xs rounded-md'
          >
            {tag}
          </span>
        ))}
        </div>

        <div className='mt-4'>
          <p className='text-sm text-white leading-5 mb-4'>{description}</p>
        </div>

        <div className='flex justify-evenly items-center mb-4'>
          <div className='flex flex-col items-center justify-center'>
            <Airplay className='text-white'/>
            <p className='text-xs text-white mt-2'>Watch Later</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Play className='text-white'/>
            <p className='text-xs text-white mt-2'>Play</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Share2 className='text-white'/>
            <p className='text-xs text-white mt-2'>Share</p>
          </div>
        </div>
        
      </div>
      <div className='ml-auto mr-8 mt-5'>
      <div className='flex justify-items-end space-x-4'>
        <div className='flex flex-col items-center justify-center'>
        <ChevronLeft className='text-white'/>
            <p className='text-xs text-white mt-2'>Prev</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <ChevronRight className='text-white'/>
        <p className='text-xs text-white mt-2'>Next</p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default CarousalMain