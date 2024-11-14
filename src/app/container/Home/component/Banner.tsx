import ArrowIcons from "../../../../assets/arrowIcon.svg";
import CodeIcons from "../../../../assets/home/Banner/code.svg";
import ClientIcons from "../../../../assets/home/Banner/client.svg";
import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className="text-center p-[64px] flex items-center justify-center">
        <div>
          <p className="uppercase text-[18px] tracking-[0.9px] pt-[32px] pb-[16px]">
            A Software Development Company
          </p>
          <h1 className="text-[64px]">The Headline Goes Here</h1>
          <p className="pt-[24px] text-[18px] text-[#4E4F52] w-[700px] text-center m-auto">
            Sub heading goes here commodo bibendum ac nibh tellus. Nulla vitae
            phasellus fermentum convallis nibh. Non urna dui ipsum lectus eu
            vitae.
          </p>
          <div className="flex justify-center pt-[23px] pb-[64px]">
            <button id="primary_button" className="flex items-center mr-[24px]">
              Start A Project{" "}
              <Image
                src={ArrowIcons}
                width={12}
                height={12}
                alt={"arrow"}
                className="ml-2"
              />
            </button>
            <button id="primary_button" className="flex items-center">
              Our Works{" "}
              <Image
                src={ArrowIcons}
                width={12}
                height={12}
                alt={"arrow"}
                className="ml-2"
              />
            </button>
          </div>
          <div className="relative">
            <Image
              src={CodeIcons}
              width={1170}
              height={400}
              alt={"arrow"}
              className="ml-2"
            />
            <Image
              src={ClientIcons}
              width={194}
              height={48}
              alt={"arrow"}
              className="ml-2 absolute bottom-[24px] left-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
