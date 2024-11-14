import Image from "next/image";
import AwardIcon1 from "../../../../assets//mobile/award/award-1.png";
import AwardIcon2 from "../../../../assets//mobile/award/award-2.png";
import AwardIcon3 from "../../../../assets//mobile/award/award-3.png";
import AwardIcon4 from "../../../../assets//mobile/award/award-4.png";
import AwardIcon5 from "../../../../assets//mobile/award/award-5.png";
import AwardIcon6 from "../../../../assets//mobile/award/award-6.png";
import AwardIcon7 from "../../../../assets//mobile/award/award-7.png";
import AwardIcon8 from "../../../../assets//mobile/award/award-8.png";
export const Award = () => {
  return (
    <div className="bg-white p-8">
      <div className="container m-auto">
        <h2 className="text-[#0C1842] text-[40px] leading-[52px] text-center">
          Awards & recognitions
        </h2>
        <div className="mt-4 grid gap-1 md:grid-cols-8 sm:grid-cols-2 xs:grid-cols-1">
          <Image src={AwardIcon1} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon2} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon3} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon4} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon5} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon6} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon7} alt={"AwardIcon1"} width={96} height={64} />
          <Image src={AwardIcon8} alt={"AwardIcon1"} width={96} height={64} />
        </div>
      </div>
    </div>
  );
};
