"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CarousalMain from "@/components/Home/CarousalMain";
import CarousalCard from "@/components/Home/CarousalCard";
export default function Home() {
  const token = localStorage.getItem("token");
  const googleToken = localStorage.getItem("googleToken");
  const router = useRouter();

  useEffect(() => {
    if (!token && !googleToken) {
      router.push("/auth/login");
    }
    console.log(token, googleToken);
  }, [token, googleToken, router]);

  
  const liveChannels = [{
    id: 1,
    name: "Channel 1jbndfkjbdjkbdkjndkjbdfkjboldfjbfjb",
    description: "vishesh",
    viewers: 770,
    image: "test.jpg",
  }, {
    id: 2,
    name: "Channel 2",
    description: "vishesh",
    viewers: 770,
    image: "test.jpg",
  }, {
    id: 3,
    name: "Channel 3",
    description: "vishssh",
    viewers: 770,
    image: "test.jpg",
  },];
  return (
    <>
      {token || googleToken ? (
        <>
          <div className="h-full">
            <CarousalMain 
            username="username"
            typeOfStream="GTA Online"
            viewers={10000}
            timeAgo={10}
            description="gamer0121 is a variety streamer based in the UK who effortlessly provides a fun and entertaining environment to everyone, with the help of a friendly and welcoming community. She enjoys engaging with chat and putting her own spin on the content she creates, no matter what game she plays. Come say"
            tags={["English", "Adventure", "FPS"]}
            backgroundImage="https://images.unsplash.com/photo-1628539331962-bb6843c400d6?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="w-full max-h-full h-full p-4 px-12 space-y-8">
              <div className="w-full h-1/3">
                <h2 className="font-bold text-lg">
                  <span className="text-purple-500 ml-8 mr-1">Live Channels</span>{" "}
                  {`we think you'll like`}
                </h2>
                <div className="flex space-x-8 items-center mx-8 my-4">
                  {liveChannels.map((channel) => {
                    return (
                      <div key={channel.id} className="h-1/3 flex-shrink-0 inline-block justify-start items-center">
                        <CarousalCard
                          title={channel.name}
                          author={channel.description}
                          viewers={channel.viewers}
                          image={channel.image}
                          
                        />
                      </div>
                    );
                  })}

                
                </div>
              </div>
            </div>
          </div>
          <div></div>
          
        </>
      ) : null}
    </>
  );
}
