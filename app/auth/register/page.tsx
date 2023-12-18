import * as React from "react";

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


const RegisterPage = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription className="text-xs">
          Already have an account?
          <Link href="/auth/login" className=" text-purple-800 font-bold">
            {" "}
            Login here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" placeholder="abc@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" placeholder="*******" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input name="confirmPassword" id="confirmPassword" type="password" placeholder="*******" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col justify-evenly gap-2">
        <Button variant="default" className="w-full">
          Login
        </Button>
        <p className="font-semibold">OR</p>

        <Button variant="default" className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" /> Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
