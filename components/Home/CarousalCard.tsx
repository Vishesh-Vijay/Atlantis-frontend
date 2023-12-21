import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CarousalCard = () => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={`cover image`}
          className="w-full object-cover h-[140px] rounded-lg"
          src="test.jpg"
        />
     
      <p className="absolute z-10 bg-black bg-opacity-60 text-xs rounded-lg text-white p-1 top-2 left-2">770k viewers</p>
      <CardFooter className="text-small justify-between">
        <b>Video 1</b>
        <p className="text-default-500">Video 1 Description</p>
      </CardFooter>
    </Card>
  );
}

export default CarousalCard