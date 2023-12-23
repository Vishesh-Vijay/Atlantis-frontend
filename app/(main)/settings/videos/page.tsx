import React from 'react'
import StreamCard from '@/components/Home/StreamCard'
const Videos = () => {
  const yourStreams = [
    {
      id: 1,
      title: "Gta 5 Chapter:2 Mission:9",
      description:
        "🎮 Join the chaos in GTA V Chapter 2, Mission 9! 🚗 Embark on a high-stakes adventure through Los Santos. 🌆 Will we conquer the mission or succumb to chaos? Find out live on [Your Streaming Platform] at [Date & Time]. Engage with fellow gamers, make suggestions, and let's own the streets together! 🕹️🔥 #GTA5 #LiveGaming",
      imgUrl: "/gta.jpg",
      videoUrl: "/gta.jpg",
      views: 100,
      likes: 100,
      dislikes: 100,
      comments: 100,
      createdAt: "2021-08-23T10:53:33.000Z",
      updatedAt: "2021-08-23T10:53:33.000Z",
      userId: 1,
      categoryId: 1,
    },
    {
      id: 2,
      title: "Gta 5 Chapter:2 Mission:9",
      description:
        "🎮 Join the chaos in GTA V Chapter 2, Mission 9! 🚗 Embark on a high-stakes adventure through Los Santos. 🌆 Will we conquer the mission or succumb to chaos? Find out live on [Your Streaming Platform] at [Date & Time]. Engage with fellow gamers, make suggestions, and let's own the streets together! 🕹️🔥 #GTA5 #LiveGaming",
      imgUrl: "/gta.jpg",
      videoUrl: "/gta.jpg",
      views: 100,
      likes: 100,
      dislikes: 100,
      comments: 100,
      createdAt: "2021-08-23T10:53:33.000Z",
      updatedAt: "2021-08-23T10:53:33.000Z",
      userId: 1,
      categoryId: 1,
    },
  ];
  return (
    <div>
      <h1 className='mt-5 text-3xl font-bold'>Your Streams</h1>
      <div className='flex flex-col gap-4 mt-5'>
        {yourStreams.map((stream)=>(
          <StreamCard key={stream.id} stream={stream}/>
        ))}
      </div>
    </div>
  )
}

export default Videos