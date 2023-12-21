import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CarousalCardProps {
  title: string;
  author: string;
  viewers: number;
  image: string;
  tags: string[];
}

const CarousalCard = ({ title, author, viewers, image,tags }: CarousalCardProps) => {
  return (
    <Card shadow="sm" className="bg-violet-100 rounded-lg" isPressable  onPress={() => console.log("item pressed")}>
      <Image
        shadow="sm"
        radius="lg"
        width="100%"
        alt={`cover image`}
        className="w-full object-cover h-[140px] rounded rounded-b-none"
        src={image}
      />

      <p className="absolute z-10 bg-black bg-opacity-60 text-xs rounded-lg text-white p-1 top-2 left-2">
        {viewers}k viewers
      </p>
      <CardFooter className="text-small  ">
        <div className="flex justify-between items-start w-full">
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
            <div className="flex space-x-2 mt-1 truncate max-w-[200px]">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 px-1 py-1 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarousalCard;
