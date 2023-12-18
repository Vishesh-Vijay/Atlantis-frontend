'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter() 
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [token, router]);
  return (
   token?
   (
    <p className='text-red-500 font-bold'>
      Hello luminar frontend
   </p>
   ):
   (
    null
   ) 
   
  )
}
