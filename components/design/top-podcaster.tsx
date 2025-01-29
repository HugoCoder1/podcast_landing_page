import React from "react";

export default function TopPodcaster() {
  return (
    <div className="flex flex-col gap-y-12 py-16 px-6 md:px-12">
      {/* Titre */}
      <h2 className="text-center text-heading3 md:text-heading2 font-extrabold text-brown mx-auto w-full max-w-[452px]">
        Top Podcasters of the Week
      </h2>

      {/* Images des podcasters */}
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-4">
        <img
          src="/Top Podcaster.png"
          alt="Top Podcaster"
          className="w-full lg:w-[510px] h-auto object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between max-[320px]:flex-wrap md:flex-wrap lg:justify-start lg:flex-nowrap  md:flex-row gap-2 md:gap-4">
          <img
            src="/Top Podcaster2.png"
            alt="Top Podcaster2"
            className="w-28 md:w-[200px] lg:w-[246px] h-auto object-cover rounded-xl"
          />
          <img
            src="/Top Podcaster3.png"
            alt="Top Podcaster3"
            className="w-28 md:w-[200px] lg:w-[246px] h-auto object-cover rounded-xl"
          />
          <img
            src="/Top Podcaster4.png"
            alt="Top Podcaster4"
            className="w-28 md:w-[200px] lg:w-[246px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
