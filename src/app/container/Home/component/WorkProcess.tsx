import React from "react";
import { twMerge } from "tailwind-merge";

type WorkProcess = {
  position: string;
  title: string;
  desc: string;
};

type WorkProcessProps = {
  title: string;
  subTitle: string;
  isSubtitleVisible: boolean;
  isHomeSubtitleVisible: boolean;
  isMobileAcitve: boolean;
  data: WorkProcess[];
};
export const WorkProcess = ({
  data,
  title,
  subTitle,
  isSubtitleVisible,
  isHomeSubtitleVisible,
  isMobileAcitve,
}: WorkProcessProps) => {
  return (
    <div
      className={twMerge(
        "pt-[60px] pb-[60px]",
        isMobileAcitve ? "bg-[#BDD9F9]" : "bg-[#FFFFFF]"
      )}
    >
      <div className="container m-auto text-[#0C1842] text-[30px]">
        {isHomeSubtitleVisible && (
          <span className="text-[#0C1842] text-[18px] line-clamp-[28px]">
            {subTitle}
          </span>
        )}

        <h2 className="text-[42px] font-bold w-[50%] leading-[52px]">
          {title}
        </h2>

        {isSubtitleVisible && (
          <span className="text-[#0C1842] text-[18px] line-clamp-[28px] w-[50%] mt-[10px]">
            {subTitle}
          </span>
        )}

        <div className="mt-[24px]">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 ">
            {data.map(({ position, title, desc }) => (
              <div className="group">
                <div className="border-t-[#4E4F52] border-t-[1px] group-hover:border-t-[#2584F4] group-hover:bg-custom-gradient">
                  <span className="text-[22px] text-[#4E4F52] group-hover:text-[#0C1842]">
                    {position}
                  </span>
                  <h2 className=" text-[#4E4F52] text-[28px] font-bold group-hover:text-[#0C1842]">
                    {title}
                  </h2>
                  <p className="text-[#4E4F52] text-[18px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
