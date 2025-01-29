import React from "react";
import { Button } from "../ui/button";

export default function Herosection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-6 md:px-0 lg:px-8 gap-8 md:gap-16">
      {/* Texte + Bouton */}
      <div className="flex flex-col max-w-[638px] text-center md:text-left gap-y-6 md:gap-y-10 pb-6">
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          <h1 className="text-heading2 md:text-[42px] lg:text-heading1 leading-tight text-brown font-extrabold">
            Navigating Ideas, Sharing Insights.
          </h1>
          <p className="text-body4 md:text-[22px] lg:text-body2 text-darkgrey leading-relaxed font-normal poppins">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Button className="w-auto max-w-[240px] px-6 py-3 flex items-center gap-x-4 h-[56px] md:h-[64px] bg-[#FFD25A] rounded-full">
            <span className="text-[#532822] text-body4 md:text-body3 font-bold">
              Listen Now
            </span>
            <img
              src="/video-circle2.png"
              alt="Play"
              className="w-6 h-6 lg:w-8 md:h-8"
            />
          </Button>
        </div>
      </div>

      {/* Image */}
      <img
        src="/Illustration.png"
        alt="Illustration"
        className="w-full  max-w-[500px] md:max-w-[657px]  h-auto"
      />
    </div>
  );
}
