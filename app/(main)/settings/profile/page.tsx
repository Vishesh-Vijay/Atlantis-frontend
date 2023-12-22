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
  const handleInputImageChange = (file:any) => {
    console.log(URL.createObjectURL(file));
    setUploadedImage(URL.createObjectURL(file));
  }
  return (
    <div className="py-4">
      <div>
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
          <div className='w-2/3'>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
             
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="pfp">Upload your photo</Label>
                    <Input id="pfp" name="pfp" type="file" onChange={(e)=>{if(e.target.files)handleInputImageChange(e.target.files[0])}}/>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={()=>{setImage("/profile.jpg");setUploadedImage("")}}>Cancel</Button>
              <Button onClick={()=>setImage(uploadedImage)}>Review</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profile