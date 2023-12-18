'use client'
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

  return (
    <>
      {token ? (
        <p className="text-red-500 font-bold">Hello luminar frontend</p>
      ) : null}
    </>
  );
}
