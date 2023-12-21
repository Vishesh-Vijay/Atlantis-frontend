import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CarousalCardProps {
  title: string;
  author: string;
  viewers: number;
  image: string;
}

const CarousalCard = ({ title, author, viewers, image }: CarousalCardProps) => {
  return (
    <Card shadow="sm" isPressable  onPress={() => console.log("item pressed")}>
      <Image
        shadow="sm"
        radius="lg"
        width="100%"
        alt={`cover image`}
        className="w-full object-cover h-[140px] rounded-lg"
        src={image}
      />

      <p className="absolute z-10 bg-black bg-opacity-60 text-xs rounded-lg text-white p-1 top-2 left-2">
        {viewers}k viewers
      </p>
      <CardFooter className="text-small ">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center">
            <Image
              src="./landing-1.svg"
              alt=""
              height={32}
              width={32}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-end justify-end">
            <p className="text-xs truncate max-w-[150px] font-bold">{title}</p>
            <p className="text-xs text-gray-500 truncate max-w-[150px]">
              {author}
            </p>
            
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarousalCard;
