"use client";
import React, { useEffect } from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getUserDataByToken } from "@/utils/api";

const Profile = () => {
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [username, setUsername] = useState("bichhooo123");
  const [bio, setBio] = useState("");
  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };
  const [userData, setUserData] = useState({} as any);

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if(!token) return;
    try {
      const response: any = await getUserDataByToken(token);
      console.log(response);
      if(response.status === 200) {setUserData(response.data)
      setImage(response.data.url)
      } 
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    getUserData();
  }, []);
  const handleBioChange = (value: string) => {
    setBio(value);
  };
  const handleInputImageChange = (file: any) => {
    console.log(URL.createObjectURL(file));
    setUploadedImage(URL.createObjectURL(file));
  };
  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };
  return (
    <>
    {userData && (
    <div className="py-4">
      <div>
        <div>
          <h1 className="text-lg font-semibold mb-2">Profile Picture</h1>
        </div>

        <Card className="w-2/3 flex justify-between items-center">
          <div className="w-1/3 flex justify-center p-4">
            <Image
              src={image}
              alt="profile"
              width={200}
              height={200}
              className="rounded-full object-contain w-[200px] h-[200px]"
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
                  setImage(userData.url);
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
                  <h1 className="w-1/4 mt-1">Name</h1>
                  <h1 className="w-3/4 font-bold">{userData.name}</h1>
                </div>
                <hr className="bg-gray-200 h-0.5" />
                <div className="flex justify-between items-center space-y-1.5">
                  <h1 className="w-1/4 mt-1">Email</h1>
                  <h1 className="w-3/4 font-bold">{userData.email}</h1>
                </div>
                <hr className="bg-gray-200 h-0.5" />
                <div className="flex justify-between items-center space-y-1.5">
                  <Label htmlFor="username" className="w-1/4">
                    Change Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    className="w-3/4"
                    value={userData.username}
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
        <div className="w-1/4">
          <AlertDialog>
            <AlertDialogTrigger className="bg-red-500 text-white p-2 px-2 rounded-lg">
              Deactivate Account
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default Profile;
