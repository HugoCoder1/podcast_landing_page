import React from "react";

export default function TopPodcaster() {
  return (
    <div className="flex flex-col gap-y-[62px] py-[64px] ">
      <h2 className="text-center text-heading2 leading-heading2 w-[452px] h-auto min-h-[134px] text-brown font-extrabold mx-auto">
        Top Podcasters of the Week
      </h2>
      <div className="flex items-center py-0 px-[36px] gap-x-[15px] h-auto min-[520px]">
        <img
          src="/Top Podcaster.png"
          alt="Top Podcaster"
          className="w-[510px] h-[520px]"
        />
        <img
          src="/Top Podcaster2.png"
          alt="Top Podcaster2"
          className="w-[246px]  h-[520px]"
        />
        <img
          src="/Top Podcaster3.png"
          alt="Top Podcaster3"
          className="w-[246px]  h-[520px]"
        />
        <img
          src="/Top Podcaster4.png"
          alt="Top Podcaster4"
          className="w-[246px] h-[520px]"
        />
      </div>
    </div>
  );
}
