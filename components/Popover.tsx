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
interface PopoverProps {
  title: string;
  description: string;
  handleSubmit: () => void;
  tempSubmit?: () => void;
  button1text: string;
  button2text?: string;
  trigger: string;
}
const Popover = ({
  title,
  description,
  handleSubmit,
  button1text,
  trigger,
}: PopoverProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-purple-900">{trigger}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-purple-900">{title}</DialogTitle>
            <DialogDescription className="py-1 text-gray-500">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input id="code" className="col-span-4 border-purple-900" />
            </div>
          </div>
          <DialogFooter className="">
            {/* <Button type="submit" className="bg-purple-900" onClick={handleSubmit}>{button2text}</Button> */}
            <Button
              type="submit"
              className="bg-purple-900"
              onClick={handleSubmit}
            >
              {button1text}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Popover;
