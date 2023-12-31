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
import { updateProfileById,deleteUserById } from "@/utils/api";
import { useRouter } from "next/navigation";
const Profile = () => {
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("")
  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };
  const router = useRouter();
  const [userData, setUserData] = useState({} as any);

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if(!token) return;
    try {
      const response: any = await getUserDataByToken(token);
      console.log(response);
      if(response.status === 201) {setUserData(response.data)
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
    console.log(file);
    setUploadedImage(file);
  };
  const handleDeleteAccount = () => {
    try {
       const id = userData.id;
       const token = localStorage.getItem("token");
       if (!token) return;
       const response: any = deleteUserById({ id, token });
       if (response.status == 200) {
         console.log(response.data);
         localStorage.removeItem("token");
         window.location.href = "/auth/login";
       }  
    } catch (error) {
      console.log(error); 
    }
    

  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleUpdateProfile = async () => {
    if(!isFormValid()) return;
    try {
     const formData = new FormData();
     //formData.append('test', "testing");
     formData.append("file", uploadedImage);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("bio", bio);
      const userId = userData.id;
      const token = localStorage.getItem("token");
      if(!token) return;
      console.log(email,username,bio,formData,userId)
      const response: any = await updateProfileById({formData,userId,token})
      if(response.status === 201) {
        console.log(response.data)
        setUserData((prev:any) => ({...prev, ...response.data}))
      }
    } catch (error:any) {
      console.log(error); 
    }
  }
  const isFormValid = () => {
    return !(email==="" && username==="" && bio==="" && uploadedImage==="");; 
  }

  return (
    <>
      {userData && (
        <div className="py-4">
          <div>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-lg font-semibold mb-2">Profile Picture</h1>
              <Button 
              onClick={handleUpdateProfile}
              disabled={!isFormValid()}
              className="bg-green-500 text-white rounded-lg"
              >
                Save Changes
              </Button>
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
                            if (e.target.files){
                              console.log(e.target.files[0]);
                              handleInputImageChange(e.target.files[0]);
                            }
                              
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
                  <Button onClick={() => setImage(uploadedImage)}>
                    Review
                  </Button>
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
                      <Label htmlFor="email" className="w-1/4">
                        Change Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        className="w-3/4"
                        placeholder={userData.email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                      />
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
                        placeholder={userData.username}
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
                        placeholder={userData.bio}
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
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
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
        </div>
      )}
    </>
  );
};

export default Profile;
