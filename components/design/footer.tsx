import React from "react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="mt-auto h-auto min-h-[517px] px-6 md:px-[72px] py-16 flex flex-col gap-y-20">
      <p className="text-center text-heading3 leading-heading3 w-full max-w-[829px] mx-auto h-auto font-bold text-brown  md:text-[32px]">
        Unlock invaluable wisdom personalized for
        <br />
        <span className="opacity-50">you in our top-notch podcast.</span>
      </p>
      <div className="flex flex-col gap-y-12">
        <div className="pb-14 flex flex-col gap-y-12 h-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0">
            <div className="flex flex-col md:flex-row items-center gap-x-8 md:gap-x-16 size-auto">
              <p className="poppins text-[1rem] font-medium leading-[140%] text-brown">
                About
              </p>
              <p className="poppins text-[1rem] font-medium leading-[140%] text-brown">
                Subscribe
              </p>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-8 size-auto">
              <img
                src="/Group 427319719.png"
                alt="Group 427319719"
                className="size-[30px]"
              />
              <p className="font-bold size-auto text-brown text-[24px] leading-[130%]">
                InsightPod
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-x-8 md:gap-x-16 size-auto items-center">
              <p className="poppins text-[1rem] font-medium leading-[140%] text-brown">
                Episode
              </p>
              <p className="poppins text-[1rem] font-medium leading-[140%] text-brown">
                Insiders
              </p>
            </div>
          </div>
          <div className="border-b border-[#7F7F7F] " />
        </div>

        <div className="flex flex-wrap justify-center gap-3 size-auto">
          <Button className="flex w-[140px] md:w-[160px] gap-x-3 h-[56px] md:h-[64px] rounded-[48px] border border-brown stroke-brown bg-white overflow-hidden">
            <img
              src="/ri_twitter-x-fill.png"
              alt="ri_twitter-x-fill"
              className="size-[20px] md:size-[24px]"
            />
            <span className="text-[16px] md:text-[18px] font-bold text-brown leading-[140%]">
              Twitter
            </span>
          </Button>
          <Button className="flex w-[140px] md:w-[160px] gap-x-3 h-[56px] md:h-[64px] rounded-[48px] border border-brown stroke-brown bg-white overflow-hidden">
            <img
              src="/ri_instagram-fill.png"
              alt="ri_instagram-fill"
              className="size-[20px] md:size-[24px]"
            />
            <span className="text-[16px] md:text-[18px] font-bold text-brown leading-[140%]">
              Instagram
            </span>
          </Button>
          <Button className="flex w-[140px] md:w-[160px] gap-x-3 h-[56px] md:h-[64px] rounded-[48px] border border-brown stroke-brown bg-white overflow-hidden">
            <img
              src="/ic_outline-facebook.png"
              alt="ic_outline-facebook"
              className="size-[20px] md:size-[24px]"
            />
            <span className="text-[16px] md:text-[18px] font-bold text-brown leading-[140%]">
              Facebook
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
