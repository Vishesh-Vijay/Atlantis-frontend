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

  const handleLogout = () => {
    console.log("logout");
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (localStorage.getItem("googleToken"))
      localStorage.removeItem("googleToken");
    router.push("/auth/login");
  };

  return (
    <>
      {token || googleToken ? (
        <>
          <div className="h-full">
            <Button onClick={handleLogout}>SIGNOUT</Button>
            <CarousalMain />
            <div className="w-full max-h-full h-full p-4 space-y-8">
              <div className="w-full h-1/3">
                <h2 className="font-bold text-lg">
                  <span className="text-purple-500">Live Channels</span>{" "}
                  {`we think you'll like`}
                </h2>
                <div className="flex justify-between items-center gap-4 my-4">
                  <div className="w-full h-1/3 flex justify-around items-center">
                    <CarousalCard />
                  </div>
                  <div className="w-full h-1/3 flex justify-around items-center">
                    <CarousalCard />
                  </div>
                  <div className="w-full h-1/3 flex justify-around items-center">
                    <CarousalCard />
                  </div>
                  <div className="w-full h-1/3 flex justify-around items-center">
                    <CarousalCard />
                  </div>
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
