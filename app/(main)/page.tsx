'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
   
      router.push("/auth/login");
    }
  }, [token, router]);

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <>
      {token ? (
        <>
        <div>
          <p className="text-red-500 font-bold">Hello luminar frontend</p>
          <Button
            onClick={
              handleLogout
            }
          >SIGNOUT</Button>
        </div>
        <div>
          
        </div>
        </>
      ) : null}
    </>
  );
}
