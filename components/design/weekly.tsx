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
    <div className="overflow-hidden min-h-[413px] flex flex-col gap-y-12 py-16 px-6 md:px-12">
      {/* Titre + Bouton */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
        <p className="text-brown text-heading3 md:text-heading2 font-extrabold text-center md:text-left">
          Weekly podcast
        </p>
        <Button className="shadow-none text-body4 md:text-body3 w-[160px] md:w-[181px] h-[56px] md:h-[64px] px-6 border border-[#FFD25A] bg-inherit rounded-full text-[#FFD25A] font-bold">
          See All
        </Button>
      </div>

      {/* Liste des podcasts */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:flex-wrap lg:flex-nowrap">
        {item.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:justify-between lg:justify-start gap-4 md:gap-6 p-4 md:p-6 border border-white rounded-3xl bg-[#F8F8F8] w-full lg:w-[490px] h-auto"
          >
            <img
              src={item.image}
              alt="image"
              className="w-28 h-28 md:w-[200px] lg:w-[138px] md:h-[138px]  object-cover rounded-xl"
            />
            <div className="flex flex-col  gap-2 text-center md:text-left">
              <p className="text-lg md:text-[20px] font-medium text-brown">
                {item.title}
              </p>
              <p className="text-sm md:text-[18px] text-darkgrey">
                {item.name}
              </p>
              <p className="text-body2 font-semibold text-darkgrey">
                {item.duration}
              </p>
            </div>
            <img
              src="/video-circle.png"
              alt=""
              className="w-12 h-12 md:w-[72px] md:h-[72px] mt-2 md:mt-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
