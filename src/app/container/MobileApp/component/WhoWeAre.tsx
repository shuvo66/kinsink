import MultipleUsersIcons from "../../../../assets/mobile/Who/multipleUsers.png";
import IsoIcon from "../../../../assets/mobile/Who/iso.png";
import Microsfot from "../../../../assets/mobile/Who/partner.png";
import AwsIcons from "../../../../assets/mobile/Who/aws.png";
import Image from "next/image";

export const WhoWeAre = () => {
  return (
    <div className="bg-[#F2F8FE] pb-[90px]">
      <div className="container m-auto">
        <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-2">
          <div className="bg-[#0F1E55] py-5 px-5 rounded-md">
            <h2 className="mb-3 text-[#F2F8FE] text-[35px] leading-[40px] font-bold">
              Who we are
            </h2>
            <p className="text-[#F2F8FE] font-normal text-[16px] mb-[10px]">
              Lot vendor prioritize growth line. Were requirements i'm let
              finish ensure submit. Submit world could fastworks devil dog or
              productive. Will whatever we've room fured. Cadence roll overflow
              gmail as other enable usabiltiy. Power fruit group tomorrow big
              globalize cta organic have one. Gave deck incentivize low anyway
              angel deck net existing needle.
            </p>

            <p className="text-[#F2F8FE] font-normal text-[16px] mb-[20px]">
              Sky encourage high-level product price view sky market. Quarter
              eye fastworks pain synergize window. Baked lean boys seems invite
              didn't box. Support see are squad.
            </p>
            <a
              href="#"
              className="text-[#2FC88B] border-[#2FC88B] border-b-[1px]"
            >
              Read More
            </a>
          </div>
          <div className="">
            <div className="bg-[#DED2FF] rounded-md p-5 flex justify-between relative overflow-hidden mb-3">
              <div>
                <h2 className="text-[#0C1842] text-[40px] leading-[40px] font-bold mb-2">
                  50+
                </h2>
                <p className="text-[#4E4F52] text-[20px] font-bold mb-2">
                  Skilled <br /> Professionals
                </p>
                <a
                  href="#"
                  className="text-[#2584F4] border-b-[1px] border-[#2584F4]"
                >
                  View Team
                </a>
              </div>
              <div className="absolute top-0 bottom-0 right-0">
                <Image
                  src={MultipleUsersIcons}
                  width={264}
                  height={164}
                  alt={"arrow"}
                  className="ml-2"
                />
              </div>
            </div>
            <div className="bg-[#AFF1F8] rounded-md p-5  mt-3">
              <div>
                <h2 className="text-[#0C1842] text-[40px] leading-[40px] font-bold mb-2">
                  Certifications
                </h2>
              </div>
              <div className="flex items-center pb-3">
                <Image src={IsoIcon} width={60} height={60} alt={"arrow"} />
                <Image
                  src={IsoIcon}
                  width={60}
                  height={60}
                  alt={"arrow"}
                  className="ml-2"
                />
                <Image
                  src={IsoIcon}
                  width={60}
                  height={60}
                  alt={"arrow"}
                  className="ml-2"
                />
                <Image
                  src={IsoIcon}
                  width={60}
                  height={60}
                  alt={"arrow"}
                  className="ml-2"
                />
                <Image
                  src={IsoIcon}
                  width={60}
                  height={60}
                  alt={"arrow"}
                  className="ml-2"
                />
                <Image
                  src={IsoIcon}
                  width={60}
                  height={60}
                  alt={"arrow"}
                  className="ml-2"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src={AwsIcons}
                  width={40}
                  height={40}
                  alt={"arrow"}
                  className="ml-2"
                />
                <Image
                  src={Microsfot}
                  width={234}
                  height={54}
                  alt={"arrow"}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
