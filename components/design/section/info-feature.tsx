import React from "react";

export default function Infofeature() {
  const item = [
    "Content Relevance",
    "Depth of Insight",
    "Combination of information and Entertainment",
    "Reliable Source of Knowledge",
  ];
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-x-[53px] py-[40px] md:py-[80px] px-4  lg:px-[44px] items-center">
      <img
        src="/UI Element.png"
        alt="UI Element"
        className="w-full h-auto lg:min-w-[637px] lg:h-[592px] overflow-hidden object-cover"
      />
      <div className="flex flex-col size-auto w-full md:min-w-[573px] min-h-[440px] m-auto gap-y-[24px] md:gap-y-[32px] md:px-6 lg:px-0">
        <div className="flex flex-col gap-y-[12px] md:gap-y-[16px] w-full md:w-[573px]">
          <p className="text-brown text-lg md:text-heading2 leading-tight md:leading-heading2 font-extrabold text-center md:text-left">
            What makes us different from others
          </p>
          <p className="text-darkgrey text-base md:text-body4 leading-tight md:leading-body4 poppins font-normal text-center md:text-left">
            Our commitment is to keep you comfortable by delivering quality
            podcast content, trusted sources, and useful material.
          </p>
        </div>
        <div className="flex flex-col gap-y-[12px] md:gap-y-[16px]  size-auto w-full md:w-[531px]">
          {item.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-x-[12px] md:gap-x-[16px] text-center md:text-left"
            >
              <img
                src="/verify.png"
                alt="verify"
                className="size-[32px] md:size-[40px]"
              />
              <span className="font-medium text-base text-start md:text-[20px] leading-tight md:leading-[150%] poppins">
                {item}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
