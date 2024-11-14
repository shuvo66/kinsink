import React from "react";
import Image from "next/image";
import ArrowIcon from "../../../../assets/arrowIcon.svg";
import GetInTouchIcon from "../../../../assets/getInTouch.svg";

export const GetInTouch = () => {
  return (
    <div className="text-center pt-[60px] pb-[60px] relative overflow-hidden">
      <h2 className="text-[#0C1842] text-[50px] leading-[58px] mb-[30px]">
        Let’s develop and lunch <br /> your new product with us
      </h2>
      <p className="text-[#0C1842] text-[18px] leading-[28px] mb-[30px]">
        Now it's your turn to describe your vision and let us <br /> unveil the
        full potential of your ideas!
      </p>
      <button
        id="primary_button"
        className="flex items-center justify-center m-auto"
      >
        Get in Touch
        <Image
          src={ArrowIcon}
          width={12}
          height={12}
          alt={"arrow"}
          className="ml-2"
        />
      </button>
      <Image
        src={GetInTouchIcon}
        alt="get in touch"
        className="absolute top-0 bottom-0 z-[-1]"
      />
    </div>
  );
};
