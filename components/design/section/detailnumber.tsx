import React from "react";

export default function Detailnumber() {
  return (
    <div className="flex flex-col px-4 md:px-[34px] gap-y-[30px] md:gap-y-[56px] h-auto min-h-[704px]">
      <div className="flex flex-col lg:flex-row py-[20px] md:py-[72px] md:justify-around items-center gap-0 md:gap-0">
        <p className="w-full lg:w-[855px] h-auto min-h-[200px] lg:min-h-[335px] opacity-90 text-lg md:text-[32px] lg:text-heading2 leading-tight lg:leading-heading2 font-extrabold text-[#532822]/40 text-center lg:text-left">
          <span className="text-brown">
            Our podcast dives into diverse topics like life, finances,
          </span>{" "}
          and personal experiences, offering valuable insights and practical
          advice.
        </p>
        <img
          src="/Frame 427319746.png"
          alt="Frame 427319746"
          className="w-[300px] md:w-full lg:w-[404px] h-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center h-auto min-h-[143px] py-[32px] lg:py-[32px] md:py-[10px]  gap-6 lg:gap-0">
        <div className="size-auto min-h-[143px] min-w-full lg:min-w-[695px] flex flex-col lg:flex-row gap-8 lg:gap-x-[88px] items-center">
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[153px] min-h-[143px] text-center lg:text-left">
            <p className="text-4xl md:text-heading1 leading-tight md:leading-heading1 text-orange font-extrabold">
              5+
            </p>
            <p className="text-base lg:text-body2 text-darkgrey leading-tight md:leading-body2 font-normal">
              Awards Gained
            </p>
          </div>
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[193px] min-h-[143px] text-center lg:text-left">
            <p className="text-4xl md:text-heading1 leading-tight md:leading-heading1 text-orange font-extrabold">
              12+
            </p>
            <p className="text-base md:text-body2 text-darkgrey leading-tight md:leading-body2 font-normal">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[172px] min-h-[143px] text-center lg:text-left">
            <p className="text-4xl md:text-heading1 leading-tight md:leading-heading1 text-orange font-extrabold">
              236
            </p>
            <p className="text-base md:text-body2 text-darkgrey leading-tight md:leading-body2 font-normal">
              Podcasters
            </p>
          </div>
        </div>
        <p className="w-full lg:w-[435px] text-base md:text-[22px] lg:text-body4 text-darkgrey leading-tight md:leading-body4 poppins font-normal text-center lg:text-left">
          Unlock invaluable wisdom personalized for you in our top-notch
          podcast. Dive into episodes designed to deliver relevant insights that
          cater to your interests and needs.
        </p>
      </div>
    </div>
  );
}
