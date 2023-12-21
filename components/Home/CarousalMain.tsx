import React from 'react'
import { Dot, Airplay, Play, Share2 } from 'lucide-react'
import Image from 'next/image'
const CarousalMain = () => {
  return (
    <div className='bg-gray-200 mx-12 my-4 rounded-2xl'>
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
              <p className="text-sm font-medium text-white">Username</p>
              <p className="text-xs -mt-1 text-white">GTA Online</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-white text-right">1.2k viewers</p>
            <p className="text-xs text-white text-right -mt-1">24 mins ago</p>
          </div>
        </div>

        <div className="tags mt-4 flex space-x-2">
          <span className='bg-gray-300 px-1 py-1 text-xs rounded-md'>English</span>
          <span className='bg-gray-300 px-1 py-1 text-xs rounded-md'>English</span>
          <span className='bg-gray-300 px-1 py-1 text-xs rounded-md'>English</span>
        </div>

        <div className='mt-4'>
          <p className='text-sm text-white leading-5 mb-4'>gamer0121 is a variety streamer based in the UK who effortlessly provides a fun and entertaining environment to everyone, with the help of a friendly and welcoming community. She enjoys engaging with chat and putting her own spin on the content she creates, no matter what game she plays. Come say hi!</p>
        </div>

        <div className='flex justify-evenly items-center mb-4'>
          <div className='flex flex-col items-center justify-center'>
            <Airplay className='text-white'/>
            <p className='text-xs text-white mt-2'>Watch Later</p>
          </div>
          <div>
            <Play className='text-white'/>
            <p className='text-xs text-white mt-2'>Play</p>
          </div>
          <div>
            <Share2 className='text-white'/>
            <p className='text-xs text-white mt-2'>Share</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CarousalMain