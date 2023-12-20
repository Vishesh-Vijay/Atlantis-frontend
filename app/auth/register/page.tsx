"use client";
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
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import RegisterUser from "@/utils/api";
import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button"
import RegisterPopover from "@/components/auth/RegisterPopover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { any } from "prop-types";

const RegisterPage = () => {
  const router = useRouter();
  const [verification, setVerification] = useState(false);
  // State variables for password visibility, form fields, and error messages
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isNameError, setIsNameError] = useState(true);
  const [isUsernameError, setIsUsernameError] = useState(true);
  const togglePasswordVisibility = ({ field }: { field: string }) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };
  const handleNameChange = (value: string) => {
    setName(value);
    validateName(value);
  };

  const validateName = (value: string) => {
    if (value.length < 1) {
      setNameError("Name can't be empty.");
      setIsNameError(true);
    } else {
      setNameError("");
      setIsNameError(false);
    }
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    validateUsername(value);
  };

  const validateUsername = (value: string) => {
    //username can't be empty,can't contain spaces,can't contain special characters
    if (value.length < 1) {
      setUsernameError("Username can't be empty.");
      setIsUsernameError(true);
    } else if (value.match(/\s/)) {
      setUsernameError("Username can't contain spaces.");
      setIsUsernameError(true);
    } else if (value.match(/[^a-zA-Z0-9]/)) {
      setUsernameError("Username can't contain special characters.");
      setIsUsernameError(true);
    } else {
      setUsernameError("");
      setIsUsernameError(false);
    }
  };
  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

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

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
      setIsConfirmPasswordError(true);
    } else {
      setConfirmPasswordError("");
      setIsConfirmPasswordError(false);
    }
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

  const isFormValid = () => {
    return (
      !isPasswordError &&
      !isConfirmPasswordError &&
      !isEmailError &&
      !isNameError &&
      !isUsernameError
    );
  };

  async function handleRegister(): Promise<void> {
    console.log(isFormValid());
    if (!isFormValid()) {
      return;
    }
    try {
      const response: any = await RegisterUser({
        name,
        email,
        password,
        username,
      });
      if (response) {
        // setIsRegistered(true);
        setVerification(true);
        setRegisterError("");
        setShowPopover(true);

        // router.push("/auth/login");
      }
    } catch (error: any) {
      setRegisterError(error.message);
    }
  }


  return (
    <Card className="w-[350px] bg-transparent border-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-purple-100 py-1">
          Create your account
        </CardTitle>
        <CardDescription className="text-xs text-purple-300">
          Already have an account?
          <Link href="/auth/login" className=" text-purple-100 font-medium">
            {" "}
            Login here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 text-purple-100">
              <Label htmlFor="name">Name</Label>
              <Input
                className="text-purple-900"
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5 text-purple-100">
              <Label htmlFor="name">Username</Label>
              <Input
                className="text-purple-900"
                name="username"
                id="username"
                type="text"
                placeholder="trainwreck"
                onChange={(e) => handleUsernameChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5 text-purple-100">
              <Label htmlFor="email">Email</Label>
              <Input
                className="text-purple-900"
                name="email"
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5 text-purple-100">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  className="text-purple-900"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility({ field: "password" })
                  }
                >
                  {showPassword ? (
                    <HiEye className="text-purple-800" />
                  ) : (
                    <HiEyeOff className="text-purple-800" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 text-purple-100">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  className="text-purple-900"
                  name="confirmPassword"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility({ field: "confirmPassword" })
                  }
                >
                  {showConfirmPassword ? (
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
        <Dialog>
          <DialogTrigger
            className={
              isFormValid()
                ? " bg-[#440A73] w-72 rounded-lg h-10 text-white"
                : " bg-[#440A73] w-72 rounded-lg h-10 opacity-50 cursor-not-allowed text-black"
            }
            onClick={handleRegister}
            disabled={!isFormValid()}
          >
            {/* <Button variant="ghost"></Button> */}
            Register
          </DialogTrigger>
          
            <RegisterPopover />
        </Dialog>

        {/* Display errors in the Alert component */}
        {passwordError ||
        confirmPasswordError ||
        emailError ||
        nameError ||
        usernameError ||
        registerError ? (
          <Alert variant="default" className="mt-4 text-red-500 font-semibold">
            <AlertTitle>Error</AlertTitle>
            {passwordError && (
              <AlertDescription>{passwordError}</AlertDescription>
            )}
            {confirmPasswordError && (
              <AlertDescription>{confirmPasswordError}</AlertDescription>
            )}
            {emailError && <AlertDescription>{emailError}</AlertDescription>}
            {nameError && <AlertDescription>{nameError}</AlertDescription>}
            {usernameError && (
              <AlertDescription>{usernameError}</AlertDescription>
            )}
            {registerError && (
              <AlertDescription>{registerError}</AlertDescription>
            )}
          </Alert>
        ) : null}
        {isRegistered ? (
          <Alert
            variant="default"
            className="mt-4 text-green-500 font-semibold"
          >
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Successfully registered</AlertDescription>
          </Alert>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
