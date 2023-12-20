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

const RegisterPopover = () => {
  const [data, setData] = React.useState("");
  const handleSubmit = () => {};
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
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="">
        {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
        <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>
          Reset
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default RegisterPopover;
