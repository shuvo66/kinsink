import Image from "next/image";
import ResearchIcon1 from "../../../../assets/llm/model/model-1.png";
import ResearchIcon2 from "../../../../assets/llm/model/model-2.png";
export const Research = () => {
  return (
    <div className="bg-white py-[90px] pt-0">
      <div className="container m-auto">
        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-2">
          <div>
            <p className="text-[#0C1842] text-[20px] leading-[30px] font-bold mb-4">
              Our Research
            </p>
            <h2 className="text-[#0C1842] text-[40px] leading-[45px] font-bold mb-4">
              Making Generative <br /> AI Models Accessible
            </h2>
            <Image
              className="mb-9 mt-[90px]"
              width="500"
              height="300"
              //   layout="responsive"
              //   objectFit="contain"
              src={ResearchIcon1}
              alt=""
            />
            <h2 className="text-[#0C1842] text-[40px] leading-[50px] font-bold mb-4">
              Headline
            </h2>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close. Space interim
              deploy looking last incentivization resources are we've request.
              Synergy pole problem please corporate.
            </p>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close.
            </p>
            <a
              href="#"
              className="text-[#2584F4] border-b-[1px] border-[#2584F4]"
            >
              Learn more
            </a>
          </div>
          <div>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close. Space interim
              deploy looking last incentivization resources are we've request.
              Synergy pole problem please corporate.
            </p>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close.
            </p>
            <h2 className="text-[#0C1842] text-[40px] leading-[50px] font-bold mb-4">
              Headline
            </h2>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close. Space interim
              deploy looking last incentivization resources are we've request.
              Synergy pole problem please corporate.
            </p>
            <p className="text-[#4E4F52] text-[16px] leading-[20px] mb-4">
              Also alpha place shark muted obviously hits board believe. Should
              knowledge diligence put better accountable close.
            </p>
            <a
              href="#"
              className="text-[#2584F4] border-b-[1px] border-[#2584F4]"
            >
              Learn more
            </a>
            <Image
              width="500"
              height="300"
              //   layout="responsive"
              //   objectFit="contain"
              className="mb-9 mt-[90px] float-right"
              src={ResearchIcon2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
