'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  const googleToken = localStorage.getItem("googleToken");
  const router = useRouter();

  useEffect(() => {
    if (!token && !googleToken) {
      router.push("/auth/login");
    }
    console.log(token, googleToken);
  }, [token ,googleToken, router]);

  const handleLogout = () => {
    console.log("logout");
    if(localStorage.getItem("token"))localStorage.removeItem("token");
    if(localStorage.getItem("googleToken"))localStorage.removeItem("googleToken");
    router.push("/auth/login");
  };

  return (
    <>
      {token||googleToken ? (
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
