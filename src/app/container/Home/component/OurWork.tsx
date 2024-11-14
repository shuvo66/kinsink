import React from "react";
import Image from "next/image";
import WorkIcon from "../../../../assets/home/OurWork/work_1.svg";
import Work2Icon from "../../../../assets/home/OurWork/work_2.svg";
import Work3Icon from "../../../../assets/home/OurWork/work_3.svg";
export const OurWork = () => {
  return (
    <div className="pt-[60px] pb-[60px] bg-[#BDD9F9]">
      <div className="container m-auto text-[#0C1842] text-[30px]">
        <span className="text-[#0C1842] text-[18px] line-clamp-[28px]">
          Our
        </span>

        <h2>Work</h2>
        <div className="mt-[24px]">
          <div className="relative w-full h-[500px] mb-5">
            <Image
              src={WorkIcon}
              layout="fill"
              objectFit="cover"
              alt="work"
              className="mb-[15px]"
            />
            <div className="bg-[#AFF1F8] p-5 rounded-md w-[332px] absolute bottom-[0px]">
              <h4 className="text-[#0C1842] text-[20px] mb-1">
                Heading goes here
              </h4>
              <p className="text-[#4E4F52] text-[16px]">
                Sub heading goes here
              </p>
            </div>
          </div>
          <div className="relative w-full h-[500px] mb-5">
            <Image
              src={Work2Icon}
              layout="fill"
              objectFit="cover"
              alt="work"
              className="mb-[15px]"
            />
            <div className="bg-[#A7F8D7] p-5 rounded-md w-[332px] absolute bottom-[0px]">
              <h4 className="text-[#0C1842] text-[20px] mb-1">
                Heading goes here
              </h4>
              <p className="text-[#4E4F52] text-[16px]">
                Sub heading goes here
              </p>
            </div>
          </div>
          <div className="relative w-full h-[500px] mb-5">
            <Image
              src={Work3Icon}
              layout="fill"
              objectFit="cover"
              alt="work"
              className="mb-[15px]"
            />
            <div className="bg-[#FFF3B5] p-5 rounded-md w-[332px] absolute bottom-[0px]">
              <h4 className="text-[#0C1842] text-[20px] mb-1">
                Heading goes here
              </h4>
              <p className="text-[#4E4F52] text-[16px]">
                Sub heading goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
