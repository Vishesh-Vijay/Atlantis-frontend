import React from 'react'
import Image from 'next/image';
import AuthNavbar from '@/components/auth/AuthNavbar';

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="w-full h-[100vh] flex justify-around  items-center">
      <div className="h-[100vh] w-1/2 flex justify-around items-center">
        <Image
          src="/twitch-svgrepo-com.svg"
          alt="Twitch icon"
          width={300}
          height={300}
        />
      </div>
      <div className="w-1/2 h-[100vh] bg-purple-900 flex justify-around items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout