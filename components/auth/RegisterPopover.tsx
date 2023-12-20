'use client'
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

const RegisterPopover = () => {
  const [data, setData] = React.useState("");
  const handleSubmit = () => {

  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-purple-900">
          Enter your verification code
        </DialogTitle>
        <DialogDescription className="py-1 text-gray-500">
          We sent a code to your email. Please enter it below.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="code"
            name="code"
            type="text"
            className="col-span-4 border-purple-900"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="">
        {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
        <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>
          Verify
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default RegisterPopover;
