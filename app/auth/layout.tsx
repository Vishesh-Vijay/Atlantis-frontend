import React from 'react'
import Image from 'next/image';
import AuthNavbar from '@/components/auth/AuthNavbar';

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="w-full h-[100vh] flex justify-around items-center">
      <div className="h-[100vh] bg-purple-800 w-3/4 flex justify-center items-center">
        <div>
        <div>
        <h1 className='font-semibold text-4xl text-purple-100 text-center'>
          Watch Creativity Happen
        </h1>
        <h2 className='my-4 text-xl text-purple-300 text-center mb-4'>Share your passion and find your inspiration</h2>
        </div>
        <div className='flex justify-center h-3/4 w-auto mt-11'>
        <Image
          
          src="/Illustration.png"
          alt="Twitch icon"
          width={450}
          height={450}
        />
        </div>
        
      </div>
      </div>
      <div className="w-1/2 h-[100vh] bg-[#9B67C6] flex justify-around items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout