"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ForgotPassword } from "@/utils/api";


interface RegisterPopoverProps {
  setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterPopover = ({setPasswordReset}:RegisterPopoverProps) => {
  const [email, setEmail] = React.useState("");
 const [emailError, setEmailError] = React.useState("");
    const [isEmailError, setIsEmailError] = React.useState(true);
    const [sendError, setSendError] = React.useState("");
  const handleSubmit =async () => {
    if(!isValid())return;
    try {
        const response:any = ForgotPassword(email);
        console.log(response);
        if(response){
            setPasswordReset(true);
        } 
    } catch (error:any) {
        console.log(error);
        setSendError(error.message); 
    }
    
  }
  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  }
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
  const isValid = () => {
    return !isEmailError;
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-purple-900">
          Do you want to reset your password?
        </DialogTitle>
        <DialogDescription className="py-1 text-gray-500">
          Enter your email address and we will send you a token to reset your
          password.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="email"
            name="email"
            type="email"
            className="col-span-4 border-purple-900"
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="">
        {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
        <Button
          type="submit"
          className="bg-purple-900"
          disabled={!isValid()}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </DialogFooter>
      <DialogClose />
      { emailError  ? (
        <Alert variant="default" className="mt-4 text-red-500 font-semibold">
          <AlertTitle>Error</AlertTitle>
          
          {emailError && <AlertDescription>{emailError}</AlertDescription>}
          {sendError && <AlertDescription>{sendError}</AlertDescription>} 
        </Alert>
      ) : null}
    </DialogContent>
  );
};

export default RegisterPopover;
