import React from "react";

export default function Detailnumber() {
  return (
    <div className="flex flex-col px-[34px] gap-y-[56px] h-auto min-h-[704px]">
      <div className="flex py-[72px] justify-around">
        <p className="w-[855px] h-auto min-h-[335px] opacity-90 text-heading2 leading-heading2 font-extrabold text-[#532822]/40">
          <span className=" text-brown ">
            Our podcast dives into diverse topics like life, finances,
          </span>
          and personal experiences, offering valuable insights and pratical
          advice.
        </p>
        <img
          src="/Frame 427319746.png"
          alt="Frame 427319746"
          className="w-[404px] h-[377px]"
        />
      </div>
      <div className="flex justify-between items-center h-auto min-h-[143px] py-[32px]">
        <div className="size-auto min-h-[143px] min-w-[695px] flex gap-x-[88px] items-center">
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[153px] min-h-[143px]">
            <p className="text-heading1 leading-heading1 size-auto min-w-[114px] min-h-[103px] text-orange font-extrabold">
              5+
            </p>
            <p className="text-body2 text-darkgrey leading-body2 size-auto min-w-[153px] min-h-[32px] font-normal">
              Awards Gained
            </p>
          </div>
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[193px] min-h-[143px]">
            <p className="text-heading1 leading-heading1 size-auto min-w-[144px] min-h-[103px] text-orange font-extrabold">
              12+
            </p>
            <p className="text-body2 text-darkgrey leading-body2 size-auto min-w-[194px] min-h-[32px] font-normal">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col gap-y-[8px] size-auto min-w-[172px] min-h-[143px]">
            <p className="text-heading1 leading-heading1 size-auto min-w-[172px] min-h-[103px] text-orange font-extrabold">
              236
            </p>
            <p className="text-body2 text-darkgrey leading-body2 size-auto min-w-[112px] min-h-[32px] font-normal">
              Podcasters
            </p>
          </div>
        </div>
        <p className="h-auto min-h-[100px] w-[435px] text-darkgrey text-body4 leading-body4 poppins font-normal">
          Unlock invaluable wisdom personalized for you in our top-notch
          podcast. Dive into episodes designed to deliver relevant insights that
          cater to your interests and needs.
        </p>
      </div>
    </div>
  );
}
