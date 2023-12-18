'use client'

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import eye icons from react-icons

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-[350px] bg-transparent border-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-purple-100 py-1">Login to your account</CardTitle>
        <CardDescription className="text-xs text-purple-300">
          Account doesn&apos;t exist?
          <Link href="/auth/register" className=" text-purple-100 font-bold">
            {" "}
            Register here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 text-purple-100">
            <div className="flex flex-col space-y-1.5">
              <Label className="py-1" htmlFor="email">Email</Label>
              <Input
            
                className="bg-[#e8d5f8] border-transparent"
    
                name="email"
                id="email"
                type="email"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="py-1">Password</Label>
              <div className="relative">
                <Input
                  className="bg-[#e8d5f8] border-transparent"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                />
                <div
                  className=" absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <HiEye className="text-purple-800" /> : <HiEyeOff className="text-purple-800"/>}
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col justify-evenly gap-2">
        <Button variant="default" className="w-full bg-[#440A73] hover:bg-[#221230]">
          Login
        </Button>
        <p className="font-medium text-[#440A73] hover:bg-[#221230]">OR</p>
        <Button className="w-full bg-[#440A73]">
          <FcGoogle className="mr-2 h-4 w-4" /> Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
