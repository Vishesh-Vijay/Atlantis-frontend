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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ResetPassword } from "@/utils/api";

const RegisterPopover = () => {
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isReset, setIsReset] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(true);
  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      setIsPasswordError(true);
    }
    // Password must contain at least one uppercase letter, one lowercase letter, and one number and one special character
    else if (
      !value.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
    ) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      setIsPasswordError(true);
    } else {
      setPasswordError("");
      setIsPasswordError(false);
    }
  };

  const isPasswordValid = () => {
    return !isPasswordError;
  };
  const handleCodeChange = (value: string) => {
    setCode(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = () => {
    if (!isPasswordValid()) return;
    try {
      const response: any = ResetPassword({ code, password });
      if (response) {
        console.log("Password reset");
        setIsReset(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-purple-900">
          Reset your password{" "}
        </DialogTitle>
        <DialogDescription className="py-1 text-gray-500">
          Enter the token you received on your email address and set a new
          password.{" "}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="code"
            name="code"
            type="text"
            className="col-span-4 border-purple-900"
            onChange={(e) => handleCodeChange(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="password"
            name="password"
            type="text"
            className="col-span-4 border-purple-900"
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="">
        {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
        <Button
          type="submit"
          className="bg-purple-900"
          onClick={handleSubmit}
          disabled={!isPasswordValid}
        >
          Reset
        </Button>
      </DialogFooter>
      {passwordError ? (
        <Alert variant="default" className="mt-4 text-red-500 font-semibold">
          <AlertTitle>Error</AlertTitle>

          {passwordError && (
            <AlertDescription>{passwordError}</AlertDescription>
          )}
        </Alert>
      ) : null}
      {isReset ? (
        <Alert variant="default" className="mt-4 text-green-500 font-semibold">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Password reset successfully</AlertDescription>
        </Alert>
      ) : null}
    </DialogContent>
  );
};

export default RegisterPopover;
