import ClientIcons from "../../../../assets/home/certified/Aws.svg";
import GoogleIcons from "../../../../assets/home/certified/Google.svg";
import AmazonIcons from "../../../../assets/home/certified/amazon.svg";
import Image from "next/image";

export const CertifiedFeature = () => {
  return (
    <div className=" bg-white">
      <div className="container m-auto pt-[90px] pb-[90px] flex items-center">
        <h2 className="text-[#0C1842] text-[28px] mr-[59px]">
          Certified & <br /> Featured by:
        </h2>
        <Image
          src={ClientIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={GoogleIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={AmazonIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={ClientIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={ClientIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={GoogleIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image
          src={AmazonIcons}
          alt={"aws"}
          width={96}
          height={64}
          className="mr-[24px]"
        />
        <Image src={ClientIcons} alt={"aws"} width={96} height={64} />
      </div>
    </div>
  );
};
