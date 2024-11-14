import Image from "next/image";
import UserIcon from "../../../../assets/mobile/why/user-1.png";
import UserIcon2 from "../../../../assets/mobile/why/user-2.png";
import BrandIcon from "../../../../assets/mobile/why/brand.png";

export const ClientSays = () => {
  return (
    <div className="bg-[#F2F8FE] md:py-[90px] sm:py-[30px]">
      <div className="container m-auto">
        <h4 className="text-[#0C1842] text-[16px] leading-[20px] font-normal">
          Testimonials
        </h4>
        <h2 className="text-[#0C1842] text-[40px] leading-[52px] font-bold">
          What our clients say’s
        </h2>
        <div className="grid mt-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="border-[#2FC88B] border-[1px] rounded-md px-3 py-5">
            <Image
              src={BrandIcon}
              width={98}
              height={24}
              alt={"arrow"}
              className="ml-2"
            />
            <h4 className="text-[#4E4F52] text-[16px] leading-[25px] ml-2 my-4">
              “
              <span className="font-bold">
                Interdum cursus nunc enim eu leo enim proin nisi eleifend.
              </span>{" "}
              In id in scelerisque fermentum felis scelerisque at vel tellus.
              Ultricies tellus enim lorem et dignissim ultrices at in tristique.
            </h4>

            <div className="flex items-center">
              <Image
                src={UserIcon}
                width={54}
                height={54}
                alt={"arrow"}
                className="ml-2"
              />
              <div className="ml-2">
                <h4 className="text-[#0C1842] text-[18px] leading-[25px] font-bold">
                  {" "}
                  John WilInter
                </h4>
                <p className="text-[#4E4F52] text-[15px] leading-[20px]">
                  Managing Director, NCBC
                </p>
              </div>
            </div>
          </div>
          <div className="border-[#2FC88B] border-[1px] rounded-md px-3 py-5">
            <Image
              src={BrandIcon}
              width={98}
              height={24}
              alt={"arrow"}
              className="ml-2"
            />
            <h4 className="text-[#4E4F52] text-[16px] leading-[25px] ml-2 my-4">
              “
              <span className="font-bold">
                Interdum cursus nunc enim eu leo enim proin nisi eleifend.
              </span>{" "}
              In id in scelerisque fermentum felis scelerisque at vel tellus.
              Ultricies tellus enim lorem et dignissim ultrices at in tristique.
            </h4>

            <div className="flex items-center">
              <Image
                src={UserIcon2}
                width={54}
                height={54}
                alt={"arrow"}
                className="ml-2"
              />
              <div className="ml-2">
                <h4 className="text-[#0C1842] text-[18px] leading-[25px] font-bold">
                  Alex Sandor
                </h4>
                <p className="text-[#4E4F52] text-[15px] leading-[20px]">
                  Deputy Manager, CBDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
