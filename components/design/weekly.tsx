import React from "react";
import { Button } from "../ui/button";

export default function Weekly() {
  const item = [
    {
      image: "/Image.png",
      title: "Quarter-life crisis",
      name: "Allen John",
      duration: "23:30",
    },
    {
      image: "/Image2.png",
      title: "Finance Gen Z",
      name: "Brock Leslar",
      duration: "45:00",
    },
    {
      image: "/Image3.png",
      title: "Love, Family",
      name: "Aidan & Friends",
      duration: "16:20",
    },
  ];
  return (
    <div className="overflow-hidden min-h-[413px] flex flex-col gap-y-[48px] py-[72px] px-[42px]">
      <div className="flex items-center justify-between">
        <p className="text-brown text-heading2 leading-heading2 font-extrabold size-ato min-h-[67px] min-w-[423px]">
          Weekly podcast
        </p>
        <Button className="shadow-none text-center text-body3 leading-body3 w-[181px] h-[64px] px-[32px] py-[8px] border stroke-[#FFD25A] border-[#FFD25A] bg-inherit rounded-[96px] text-[#FFD25A] font-bold">
          See All
        </Button>
      </div>
      <div className="flex gap-x-[16px] h-auto min-h-[170px]">
        {item.map((item, index) => (
          <div
            key={index}
            className="w-[490px] h-[170px] stroke-white border flex gap-x-[12px] items-center px-2 border-white rounded-[48px] overflow-hidden bg-[#F8F8F8]"
          >
            <img
              src={item.image}
              alt="image"
              className="size-[138px] overflow-hidden"
            />
            <div className="flex flex-col gap-y-[12px]">
              <div className="flex flex-col gap-y-[8px] size-auto">
                <p className="text-[20px] leading-heading5 text-brown poppins font-medium">
                  {item.title}
                </p>
                <p className="font-normal poppins text-darkgrey text-[18px] leading-[140%]">
                  {item.name}
                </p>
              </div>
              <p className="text-body1 leading-body1 text-darkgrey w-auto  h-[34px] font-semibold">
                {item.duration}
              </p>
            </div>
            <img
              src="/video-circle.png"
              alt=""
              className="size-[72px] mt-auto  mb-4 ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
