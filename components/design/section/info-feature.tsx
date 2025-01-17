import React from "react";

export default function Infofeature() {
  const item = [
    "Content Relevance",
    "Depth of Insight",
    "Combinaison of information  and Entertainment",
    "Reliable Source of Knowledge",
  ];
  return (
    <section className="flex gap-x-[53px] py-[80px] px-[44px]">
      <img
        src="/UI Element.png"
        alt="UI Element"
        className="w-[635px] h-[592px] overflow-hidden"
      />
      <div className="flex flex-col size-auto min-w-[573px] min-h-[440px] m-auto gap-y-[32px]">
        <div className="flex flex-col gap-y-[16px] min-h-[200px] w-[573px] h-auto">
          <p className="h-auto min-h-[134px] text-brown text-heading2 leading-heading2 font-extrabold">
            What makes us different from other
          </p>
          <p className="text-darkgrey text-body4 leading-body4 h-auto min-h-[50px] poppins font-normal">
            Our commitment is to keep you comfortable by delivering quality
            podcast content, trusted sources, and useful material.
          </p>
        </div>
        <div className="flex flex-col gap-y-[16px] size-auto min-w-[531px] min-h-[208px]">
          {item.map((item, index) => (
            <p key={index} className="size-auto flex items-center gap-x-[16px]">
              <img src="/verify.png" alt="verify" className="size-[40px]" />
              <span className="font-medium text-[20px] leading-[150%] poppins">
                {item}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
