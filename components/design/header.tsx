import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-[42px] px-[32px] h-auto min-h-[128px]">
      <div className="flex items-center gap-x-[8px] size-auto min-w-[214px] min-h-[31px]">
        <img src="/Group 427319719.png" alt="Group 427319719" />
        <p className="font-normal text-brown text-[24px] leading-[130%] monum">
          InsightPod
        </p>
      </div>
      <div className="size-auto flex items-center gap-x-[32px] text-darkgrey text-body5 leading-body5 font-normal poppins">
        <a href="">About</a>
        <a href="">Subscribe</a>
        <a href="">Episode</a>
        <a href="">Insiders</a>
      </div>
      <Button className="shadow-none w-[214px] h-[64px] py-[32px] px-[8px] rounded-[96px] text-center stroke-[#532822] border border-[#532822] bg-inherit  text-body3 leading-body3 font-bold">
        <span className="text-[#532822]/100 size-auto">Subscribe now</span>
      </Button>
    </header>
  );
}
