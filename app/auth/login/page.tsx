"use client";

import * as React from "react";
import { useState, useEffect } from "react";
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
import { firebase, auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { LoginUser } from "@/utils/api";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ForgotPasswordPopover from "@/components/auth/ForgotPasswordPopover"; 
import ResetPasswordPopover from "@/components/auth/ResetPasswordPopover";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [googleLoginError, setGoogleLoginError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [passwordReset, setPasswordReset] = useState(false);
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address.");
      setIsEmailError(true);
    } else {
      setEmailError("");
      setIsEmailError(false);
    }
  };
  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setPasswordError("Password can't be of less than 8 characters.");
      setIsPasswordError(true);
    } else if (
      !value.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
    ) {
      setPasswordError(
        "Not a valid password because it does not contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      setIsPasswordError(true);
    } else {
      setPasswordError("");
      setIsPasswordError(false);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isFormValid = () => {
    return !isPasswordError && !isEmailError;
  };
  const handleLogin = async () => {
    if (!isFormValid()) {
      return;
    }
    try {
      const response: any = await LoginUser({ email, password });
      console.log(response);
      if (response.status==201) {
        setLoginError("");
        localStorage.setItem("token", response.data.token);
        if (window.history.replaceState) {
          window.history.replaceState({}, "", "/");
        }
        router.push("/");
      }
    } catch (error: any) {
      setLoginError(error.message);
    }
  };
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      window.open(
        `http://localhost:5000/user/google/callback`,
        "_self"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-[350px] bg-transparent border-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-purple-100 py-1">
          Login to your account
        </CardTitle>
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
              <Label className="py-1 font-bold" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-[#e8d5f8] border-transparent text-purple-900"
                name="email"
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="w-full flex justify-between items-center">
                <Label htmlFor="password" className="py-1 font-bold">
                  Password
                </Label>

                <Dialog>
                  <DialogTrigger onClick={()=>setPasswordReset(false)}>
                    {/* <Button variant="ghost"></Button> */}
                    <p className=" text-xs italic">Forgot Password?</p>
                  </DialogTrigger>
                  {!passwordReset ? (
                    <ForgotPasswordPopover setPasswordReset={setPasswordReset} />
                  
                  ) : (
                    <ResetPasswordPopover  />
                  )}
                </Dialog>
              </div>
              <div className="relative">
                <Input
                  className="bg-[#e8d5f8] border-transparent text-purple-900"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <div
                  className=" absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiEye className="text-purple-800" />
                  ) : (
                    <HiEyeOff className="text-purple-800" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col justify-evenly gap-2">
        <Button
          variant="default"
          className="w-full bg-[#440A73] hover:bg-[#221230]"
          disabled={!isFormValid()}
          onClick={handleLogin}
        >
          Login
        </Button>
        <p className="font-medium text-[#440A73] hover:bg-[#221230]">OR</p>
        <Button className="w-full bg-[#440A73]" onClick={handleGoogleLogin}>
          <FcGoogle className="mr-2 h-4 w-4" /> Login with Google
        </Button>
        {/* Display errors in the Alert component */}
        {passwordError || emailError || googleLoginError ? (
          <Alert variant="default" className="mt-4 text-red-500 font-semibold">
            <AlertTitle>Error</AlertTitle>
            {passwordError && (
              <AlertDescription>{passwordError}</AlertDescription>
            )}

            {emailError && <AlertDescription>{emailError}</AlertDescription>}
            {googleLoginError && (
              <AlertDescription>{googleLoginError}</AlertDescription>
            )}
          </Alert>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
