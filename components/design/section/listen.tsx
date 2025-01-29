import { Button } from "@/components/ui/button";
import React from "react";

export default function Listen() {
  return (
    <div className="flex flex-col gap-y-2 px-2 py-0 lg:py-16 h-auto lg:min-h-[666.31px]">
      <div className="bg-brown w-full max-w-[1296px] mx-auto h-auto min-h-[538.31px] flex flex-col lg:flex-row items-center justify-around px-6 md:px-14 py-6 md:py-14 rounded-[56px]">
        <img
          src="/Frame 427319748.png"
          alt="Frame 427319748"
          className="w-full max-w-[497px] h-auto"
        />
        <div className="flex flex-col w-full max-w-[605px] min-h-[383px] gap-y-10 text-center lg:text-left">
          <div className="flex flex-col gap-y-6">
            <p className="w-full text-natural text-[36px] md:text-heading2 leading-heading2 font-extrabold">
              Listen to the latest and exciting podcast content
            </p>
            <p className="poppins text-[13px] md:text-[22px] lg:text-[18px] w-full max-w-[562px] font-normal leading-[150%] text-white">
              Don't miss the valuable updates in each session and listen
              existing podcast
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button className="w-auto max-w-[240px] pl-8 pr-2 text-center py-2 flex gap-x-14 h-[64px] bg-[#FFD25A]/100 rounded-[96px]">
              <span className="text-[#532822] text-base md:text-body3 leading-body3 font-bold">
                Listen Now
              </span>
              <img src="/video-circle2.png" alt="video-circle2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
