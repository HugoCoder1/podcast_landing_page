import React from "react";
import { Button } from "../ui/button";

export default function Herosection() {
  return (
    <div className="flex justify-around px-[32px]">
      <div className="flex flex-col size-auto min-w-[638px] min-h-[557px] m-auto gap-y-[40px] pb-[24px]">
        <div className="size-auto min-h-[429px] flex flex-col gap-y-[24px]">
          <h1 className="h-auto min-h-[309px] text-heading1 leading-heading1 text-brown font-extrabold">
            Navigating Ideas, Sharing Insights.
          </h1>
          <p className="w-[581px] h-auto min-h-[96px] text-body2 text-darkgrey leading-body2 font-normal poppins">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </p>
        </div>
        <Button className="w-auto max-w-[240px] pl-[32px] pr-[8px] py-[8px] flex gap-x-[56px] h-[64px] bg-[#FFD25A]/100 rounded-[96px] ">
          <span className="text-[#532822] text-body3 text-center leading-body3 font-bold size-auto">
            Listen Now
          </span>
          <img src="/video-circle2.png" alt="video-circle2" />
        </Button>
      </div>
      <img
        src="/Illustration.png"
        alt="Illustration"
        className="w-[657px] h-[802px]"
      />
    </div>
  );
}
