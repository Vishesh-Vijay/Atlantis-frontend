import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { MinusCircle, BatteryCharging, SmilePlus } from 'lucide-react'
const page = () => {
  return (
    <div>
      <div className="bg-purple-200 mt-4">
        <div className="pt-20 flex space-x-4 justify-center items-center pb-12">
          <Image
            src="/twitch-svgrepo-com.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <h1 className="font-bold text-5xl">Atlantis Prime</h1>
        </div>
        <div className="flex justify-center mb-8">
          <p className="w-2/5 font-light text-3xl  text-center">
            YouTube and YouTube Music ad-free, offline, and in the background
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <Button className="bg-[#432477] font-medium text-sm text-white hover:bg-[#513581] px-4 py-2 rounded-full">
            Get Atlantis Prime
          </Button>
        </div>
        <div className="flex justify-center mb-8">
          <p className="w-3/5 font-light text-xl  text-center">
            {" "}
            Prepaid and subscription plans available. Prices start at
            ₹129.00/month. Free trials available with subscription plans only.
          </p>
        </div>
        <div className="flex justify-center pb-12">
          <p className="cursor-pointer text-purple-600 font-semi-bold">
            Restrictions apply. Learn more here.
          </p>
        </div>
        <div className='bg-purple-950 pt-10 pb-12 pl-8 pr-8 '>
            <div className="flex items-center space-x-10">
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <MinusCircle size={80} className='text-purple-200 pb-2'/>
                    <p className='text-white text-3xl pt-2 pb-2'>
                        Ad Free Viewing
                    </p>
                    <p className='text-gray-300 text-center'>Break free from ad breaks! Watch your favorite streamers without video or banner ads. </p>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <BatteryCharging size={80} className='text-purple-200 pb-2'/>
                    <p className='text-white text-3xl pt-2 pb-2'>
                        Chat Badge
                    </p>
                    <p className='text-gray-300 text-center'>Recharge chat with your electrifying presence — and a pretty neat purple battery badge. </p>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center '>
                    <SmilePlus size={88} className='text-purple-200 pb-2'/>
                    
                    <p className='text-white text-3xl pt-2 pb-2'>
                       Extended Emoji Set
                    </p>
                    <p className='text-gray-300 text-center'>Put some :0 into your emotions with a Glitch or theme</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default page
