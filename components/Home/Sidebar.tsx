'use client'
import React from 'react'
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { HiOutlineHome } from "react-icons/hi2";
import { CiStreamOn } from "react-icons/ci";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CiMicrophoneOn } from "react-icons/ci";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { IoTrophyOutline } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GrChannel } from "react-icons/gr";
import Image from 'next/image';
const Sidebar = () => {
  
  const [highlight, setHighlight] = React.useState("Home");
  const channels = ["Channel 1", "Channel 2", "Channel 3", "Channel 4", "Channel 5"];
  return (
    <div className="bg-[#2D1851] h-full text-white">
      {" "}
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex flex-col justify-evenly items-center gap-7 my-4">
            <Image
              src="/landing-1.svg"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            /> 
            <Button className="bg-[#432477] w-2/3 text-white hover:bg-white hover:text-black ">
              <CiStreamOn className="mr-2 h-5 w-5" />
              Start Streaming
            </Button>
          </div>

          <h2 className="mb-2 mt-8 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1 px-3">
            <Button
              variant={highlight === "Home" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Home")}
            >
              <HiOutlineHome className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button
              variant={highlight === "Browse" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Browse")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Browse
            </Button>
            <Button
              variant={highlight === "Prime" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Prime")}
            >
              <MdOutlineWorkspacePremium className="mr-2 h-4 w-4" />
              Atlantis Prime
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Categories
          </h2>
          <ScrollArea className="space-y-1 h-28 px-3">
            <Button
              variant={highlight === "Games" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Games")}
            >
              <CgGames className="mr-2 h-4 w-4" />
              Games
            </Button>
            <Button
              variant={highlight === "IRL" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("IRL")}
            >
              <CiMicrophoneOn className="mr-2 h-4 w-4" />
              IRL
            </Button>
            <Button
              variant={highlight === "Music" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Music")}
            >
              <HiOutlineMusicalNote className="mr-2 h-4 w-4" />
              Music
            </Button>
            <Button
              variant={highlight === "Esports" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Esports")}
            >
              <IoTrophyOutline className="mr-2 h-4 w-4" />
              Esports
            </Button>
            <Button
              variant={highlight === "Creative" ? "secondary" : "ghost"}
              className="w-full flex items-center justify-start"
              onClick={() => setHighlight("Creative")}
            >
              <HiOutlinePaintBrush className="mr-2 h-4 w-4" />
              Creative
            </Button>
          </ScrollArea>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Your Channels
          </h2>
          <ScrollArea className=" px-3 h-32">
            <div className="space-y-1 p-2 ">
              {channels?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant={highlight === playlist ? "secondary" : "ghost"}
                  className="w-full flex items-center justify-start font-normal"
                  onClick={() => setHighlight(playlist)}
                >
                  <GrChannel className="mr-2 h-4 w-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Sidebar