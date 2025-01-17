import { Button } from "@/components/ui/button";
import React from "react";

export default function Listen() {
  return (
    <div className="flex flex-col gap-y-[8px] px-[8px] py-[64px] h-auto min-h-[666.31px]">
      <div className="bg-brown w-[1296px] mx-auto h-auto min-h-[538.31px] flex items-center justify-around px-[54px] py-[56px] rounded-[56px]">
        <img
          src="/Frame 427319748.png"
          alt="Frame 427319748"
          className="w-[497px] h-[426.31px]"
        />
        <div className="flex flex-col min-w-[605px] min-h-[383px] size-auto gap-y-[40px]">
          <div className="flex flex-col gap-y-[24px] h-auto min-[279px]">
            <p className="w-[605px] h-auto min-h-[201px] text-natural text-heading2 leading-heading2 font-extrabold">
              Listen to the latest and exciting podcast content
            </p>
            <p className="poppins text-[18px] w-[562px] h-auto min-h-[54px] font-normal leading-[150%] text-white">
              Don't miss the valuable updates in each session and listen
              existing podcast
            </p>
          </div>
          <Button className="w-auto max-w-[240px] pl-[32px] pr-[8px] text-center py-[8px] flex gap-x-[56px] h-[64px] bg-[#FFD25A]/100 rounded-[96px] ">
            <span className="text-[#532822] text-body3  leading-body3 font-bold size-auto">
              Listen Now
            </span>
            <img src="/video-circle2.png" alt="video-circle2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
