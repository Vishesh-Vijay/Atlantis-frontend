'use client'
import React from 'react'
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
import Image from "next/image";
import { useState } from "react";
const Profile = () => {
  const [image, setImage] = useState(
    "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  );
  const [uploadedImage,setUploadedImage] = useState("");
  const handleInputImageChange = (file:any) => {
    console.log(URL.createObjectURL(file));
    setUploadedImage(URL.createObjectURL(file));
  }
  return (
    <div className="py-4">
      <div>
        <h1 className="text-lg font-semibold mb-2"> Profile Picture</h1>
        <Card className="w-2/3 flex justify-between items-center">
          <div className="w-1/3 flex justify-center">
            <Image
              src={image}
              alt="profile"
              width={200}
              height={200}
              className="rounded-full object-contain"
            />
          </div>
          <div className="w-2/3">
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="pfp">Upload your photo</Label>
                    <Input
                      id="pfp"
                      name="pfp"
                      type="file"
                      onChange={(e) => {
                        if (e.target.files)
                          handleInputImageChange(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setImage("https://i.pravatar.cc/150?u=a042581f4e29026704d");
                  setUploadedImage("");
                }}
              >
                Cancel
              </Button>
              <Button onClick={() => setImage(uploadedImage)}>Review</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
      <div className='mt-4'>
        <h1 className="text-lg font-semibold mb-2"> Profile settings</h1>
        <p className='text-gray-500 text-xs mb-2'>Change identifying details for your account</p>
        <Card className="w-2/3 flex justify-between items-center"> 
          <CardContent className='p-4 w-full'>
              <form className='w-full'>
                <div className="grid w-full items-center gap-4">
                  <div className="flex justify-between items-center space-y-1.5">
                    <Label htmlFor="username" className='w-1/3'>Change Username</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      onChange={(e) => {
                       }}
                      className='w-2/3'
                      value={"bichhooo123"}
                    />
                  </div>
                  <hr />
                </div>
              </form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile