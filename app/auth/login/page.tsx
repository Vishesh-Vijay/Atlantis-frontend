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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        validatePassword(value);
    };
    const handleEmailChange = (value: string) => {
        setEmail(value);
        validateEmail(value);
    }

    const validateEmail = (value: string) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(value)) {
           setEmailError("Invalid email address.");
         } else {
           setEmailError("");
         }
    }
    const validatePassword = (value: string) => {
        if (value.length < 8) {
        setPasswordError("Password can't be of less than 8 characters.");
        }
      
        else if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
        setPasswordError("Not a valid password because it does not contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        }
        else {
        setPasswordError("");
        }
    } 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isFormValid = () => {
    return !passwordError && !emailError;
  }
  const handleLogin = ()=>{
    if(!isFormValid()){
      return
    }
    const data = {
      email,
      password
    }
    console.log(data)
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription className="text-xs">
          Account doesn&apos;t exist?
          <Link href="/auth/register" className=" text-purple-800 font-bold">
            {" "}
            Register here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col justify-evenly gap-2">
        <Button
          variant="default"
          className="w-full"
          disabled={!isFormValid()}
          onClick={handleLogin}
        >
          Login
        </Button>
        <p className="font-semibold">OR</p>
        <Button variant="default" className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" /> Login with Google
        </Button>
        {/* Display errors in the Alert component */}
        {passwordError || emailError ? (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            {passwordError && (
              <AlertDescription>{passwordError}</AlertDescription>
            )}
            
            {emailError && <AlertDescription>{emailError}</AlertDescription>}
          </Alert>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
