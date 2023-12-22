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
import { useRouter } from "next/navigation";
import { Verify } from "@/utils/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
interface RegisterPopoverProps {
  email_id: string; 
}
const RegisterPopover = ({email_id}:RegisterPopoverProps) => {
  const [verifyError, setVerifyError] = React.useState("");
  const [code, setCode] = React.useState("");
  const router = useRouter();
  
  const handleSubmit = async () => {
    try {
       console.log(email_id, code);
      const response: any = await Verify({email_id,code});
      console.log(response); 
      if (response.status === 200) {
        router.push('/auth/login')
       
        setVerifyError("");
        
      } 
    } catch (error:any) {
      console.log(error);
      setVerifyError(error.message);
    }
  };
  
const handleCodeChange = (value: string) => {
  setCode(value);
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
            onChange={(e) => handleCodeChange(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="">
        {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
        <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>
          Verify
        </Button>
      </DialogFooter>
      { verifyError  ? (
        <Alert variant="default" className="mt-4 text-red-500 font-semibold">
          <AlertTitle>Error</AlertTitle>
          
          {verifyError && <AlertDescription>{verifyError}</AlertDescription>}
          
        </Alert>
      ) : null}
    </DialogContent>
  );
};

export default RegisterPopover;
