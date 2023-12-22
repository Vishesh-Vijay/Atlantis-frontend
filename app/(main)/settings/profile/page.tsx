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
  const [image,setImage] = useState("/profile.jpg");
  const [uploadedImage,setUploadedImage] = useState("");
  const [username,setUsername] = useState("bichhooo123");
  const [bio,setBio] = useState("");
  const handleUsernameChange = (value:string) => {
    setUsername(value);
  }
  const handleBioChange = (value:string) => {
    setBio(value);
  }
  const handleInputImageChange = (file:any) => {
    console.log(URL.createObjectURL(file));
    setUploadedImage(URL.createObjectURL(file));
  }
  return (
    <div className="py-4">
      <div>
        <div>
          <h1 className="text-lg font-semibold mb-2">Profile Picture</h1>
        </div>
        
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
                  setImage("/profile.jpg");
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
      <div className="mt-4">
        <h1 className="text-lg font-semibold mb-2"> Profile settings</h1>
        <p className="text-gray-500 text-xs mb-2">
          Change identifying details for your account
        </p>
        <Card className="w-2/3 flex justify-between items-center">
          <CardContent className="p-4 w-full">
            <form className="w-full">
              <div className="grid w-full items-center gap-4">
                <div className="flex justify-between items-center space-y-1.5">
                  <Label htmlFor="username" className="w-1/4">
                    Change Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    className="w-3/4"
                    value={username}
                    onChange={(e) => handleUsernameChange(e.target.value)}
                  />
                </div>
                <hr className="bg-gray-200 h-0.5" />
                <div className="flex justify-between items-center space-y-1.5">
                  <Label htmlFor="bio" className="w-1/4">
                    Change Bio
                  </Label>
                  <textarea
                    id="bio"
                    name="bio"
                    className="w-3/4 h-24 border border-gray-200 p-2 rounded-lg"
                    value={bio}
                    onChange={(e) => handleBioChange(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 w-2/3 flex justify-between items-center">
        <div className="w-3/4">
          <h1 className="text-lg font-semibold mb-2">
            {" "}
            Disabling your Atlantis account
          </h1>
          <p className="text-gray-500 text-xs mb-2">
            Completely deactivate your account
          </p>
        </div>
        <div className='w-1/4'>
            <Button variant="outline" color="danger" className='bg-red-500 text-white'>Deactivate Account</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile