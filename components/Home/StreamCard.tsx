import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
interface StreamCardProps {
    stream: {
        id: number,
        title: string,
        description: string,
        imgUrl: string,
        videoUrl: string,
        views: number,
        likes: number,
        dislikes: number,
        comments: number,
        createdAt: string,
        updatedAt: string,
        userId: number,
        categoryId: number,
    }
    
} 
const StreamCard = (stream:StreamCardProps) => {
  return (
    <Card className="flex w-5/6 items-center p-2">
      <div className="w-1/4">
        <Image
          src={stream.stream.imgUrl}
          alt={stream.stream.title}
          width={200}
          height={300}
          className="rounded-md object-contain"
        />
      </div>
      <div className="flex justify-between items-center w-full h-full" >
        <CardHeader className="w-3/4 h-full ">
          <CardTitle className='max-w-[500px] truncate'>{stream.stream.title}</CardTitle>
          <CardDescription className='max-w-[400px] truncate'>{stream.stream.description}</CardDescription>
        </CardHeader>
        <div className='flex flex-col justify-center items-center h-full w-1/3'>
            <CardContent className='flex flex-col justify-center items-center pt-2'>
                <div className='flex gap-2'>
                <span className='text-sm text-gray-400'>Views: {stream.stream.views}</span>
                <span className='text-sm text-gray-400'>Comments: {stream.stream.comments}</span>
                </div>
                <div className='flex gap-2'>
                <span className='text-sm text-gray-400'>Likes: {stream.stream.likes}</span>
                <span className='text-sm text-gray-400'>Dislikes: {stream.stream.dislikes}</span>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
                <button className='bg-purple-500 text-white px-3 py-1 rounded-md'>View Details</button>
            </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default StreamCard