import AboutusIcon from "../../../../assets/home/AboutUs/banner.svg";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="bg-white pb-[120px]">
      <div className="container m-auto" id={"about_us"}>
        <span className="text-[15px] uppercase tracking-[0.9px]">About Us</span>
        <div className="grid gap-10 mt-[24px] sm:grid-cols-1 sm:text-center md:text-left md:grid-cols-2 ">
          <div>
            <Image
              width="0"
              height="300"
              layout="responsive"
              objectFit="contain"
              src={AboutusIcon}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#0c1842] text-[44px] font-semi-bold line-clamp-[52px]">
              We are a Software company
            </h2>
            <p className="text-[#0c1842] text-[18px] line-clamp-[28px] mb-4">
              We are passionate about startups. Let us use our experience in the
              blockchain and Web3 industry to help grow and shape your ideas
              into reality.
            </p>
            <a
              href="#"
              className="text-[#2aa6bf] pt-4 border-[#2aa6bf] border-b"
            >
              Learn About Us
              {/* <Image
                src={ArrowIcon}
                width={20}
                height={20}
                alt={"arrow"}
                className="text-[#2aa6bf]"
              /> */}
            </a>
            <div className="grid sm:grid-cols-3 md:grid-cols-3 mt-4">
              <h4 className="text-[#0c1842] text-[18px] line-clamp-[28px] mb-4">
                <span className="text-[#0c1842] text-[44px] font-semi-bold line-clamp-[52px]">
                  250+ <br />
                </span>
                Satisfied <br /> clients
              </h4>
              <h4 className="text-[#0c1842] text-[18px] line-clamp-[28px] mb-4">
                <span className="text-[#0c1842] text-[44px] font-semi-bold line-clamp-[52px]">
                  299+ <br />
                </span>
                projects <br /> delivered
              </h4>
              <h4 className="text-[#0c1842] text-[18px] line-clamp-[28px] mb-4">
                <span className="text-[#0c1842] text-[44px] font-semi-bold line-clamp-[52px]">
                  12+ <br />
                </span>
                years of
                <br /> experience
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
