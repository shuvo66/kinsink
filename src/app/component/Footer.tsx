import React from "react";
import Image from "next/image";
import ArrowIcon from "../../assets/arrowIcon.svg";

export const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="border-white ">
          <div className="container m-auto bg-[#18244B]  h-[410px]">
            <div className="pl-[70px] p-[40px] pt-[50px]">
              <form className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-sm font-normal leading-6"
                  >
                    Full Name<span className="relative top-[-2]">*</span>
                  </label>
                  <br />
                  <input
                    placeholder="Enter your name"
                    className="bg-transparent border-b-[1px] border-[#F2F8FE] w-full p-3 pt-1 pb-1 pl-0 placeholder:text-[14px] placeholder:text-[#808080]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-sm font-normal leading-6"
                  >
                    Industry<span className="relative top-[-2]">*</span>
                  </label>
                  <br />
                  <select className="bg-transparent border-b-[1px] pt-1 border-[#F2F8FE] w-full p-3 pb-1 pl-0 placeholder:text-[14px] placeholder:text-[#808080]">
                    <option value="volvo">Please select your industry</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-sm font-normal leading-6"
                  >
                    Email<span className="relative top-[-2]">*</span>
                  </label>
                  <br />
                  <input
                    placeholder="Enter your mail"
                    className="bg-transparent border-b-[1px] pt-1 border-[#F2F8FE] w-full p-3 pb-1 pl-0 placeholder:text-[14px] placeholder:text-[#808080]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-sm font-normal leading-6"
                  >
                    Phone
                  </label>
                  <br />
                  <input
                    placeholder="Enter your phone"
                    className="bg-transparent border-b-[1px] pt-1 border-[#F2F8FE] w-full p-3 pb-1 pl-0 placeholder:text-[14px] placeholder:text-[#808080]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="full_name"
                    className="text-sm font-normal leading-6"
                  >
                    Describe your project
                  </label>
                  <br />
                  <input
                    placeholder="Enter your name"
                    className="bg-transparent border-b-[1px] pt-1 border-[#F2F8FE] w-full p-3 pb-1 pl-0 placeholder:text-[14px] placeholder:text-[#808080]"
                  />
                </div>{" "}
                <br />
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-[12px]">
                    I accept{" "}
                    <span className="text-[#2FC88B]">
                      Privacy Policy and Cookie
                    </span>
                  </span>
                </div>{" "}
                <br />
                <div>
                  <button
                    id="primary_button"
                    className="flex items-center !text-[14px]"
                  >
                    Get in Touch
                    <Image
                      src={ArrowIcon}
                      width={8}
                      height={8}
                      alt={"arrow"}
                      className="ml-2"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-white">
          <div className="container bg-[#0C1842]  h-[410px]">
            <div className=" pr-[70px] p-[40px]">
              <h2 className="text-[44px] text-white w-[480px] leading-[50px] mb-5">
                Fill the form and let’s discuss your project details
              </h2>
              <ul className="list-disc">
                <li className="text-[15px] pb-1">
                  Aenean massa at turpis hac consectetur nislon.
                </li>
                <li className="text-[15px] pb-1">
                  Libero placerat nulla diam libero lectus.
                </li>
                <li className="text-[15px] pb-1">
                  Nunc duiretium ultrices amet eleifend.
                </li>
                <li className="text-[15px] pb-1">
                  Magna fermentuin pulvinar vitae dui.
                </li>
              </ul>

              <button className="flex items-center !text-[14px] text-[#2FC88B] border-[#2FC88B] border-[1px] p-2 pl-5 pr-5 mt-3 rounded-full">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
                    stroke="#2FC88B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F1E55] pt-[70px] pb-[40px]">
        <div className="container m-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <h1 className="mb-6 text-[30px]">Logo</h1>
              <p className="flex items-center text-[14px] mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M2.25 7.25C2.25 15.534 8.966 22.25 17.25 22.25H19.5C20.0967 22.25 20.669 22.0129 21.091 21.591C21.5129 21.169 21.75 20.5967 21.75 20V18.628C21.75 18.112 21.399 17.662 20.898 17.537L16.475 16.431C16.035 16.321 15.573 16.486 15.302 16.848L14.332 18.141C14.05 18.517 13.563 18.683 13.122 18.521C11.4849 17.9191 9.99815 16.9686 8.76478 15.7352C7.53141 14.5018 6.58087 13.0151 5.979 11.378C5.817 10.937 5.983 10.45 6.359 10.168L7.652 9.198C8.015 8.927 8.179 8.464 8.069 8.025L6.963 3.602C6.90214 3.35869 6.76172 3.1427 6.56405 2.98834C6.36638 2.83397 6.1228 2.75008 5.872 2.75H4.5C3.90326 2.75 3.33097 2.98705 2.90901 3.40901C2.48705 3.83097 2.25 4.40326 2.25 5V7.25Z"
                    stroke="#F2F8FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +123 456 7890
              </p>
              <p className="flex items-center text-[14px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M21.75 7.25V17.75C21.75 18.3467 21.5129 18.919 21.091 19.341C20.669 19.7629 20.0967 20 19.5 20H4.5C3.90326 20 3.33097 19.7629 2.90901 19.341C2.48705 18.919 2.25 18.3467 2.25 17.75V7.25M21.75 7.25C21.75 6.65326 21.5129 6.08097 21.091 5.65901C20.669 5.23705 20.0967 5 19.5 5H4.5C3.90326 5 3.33097 5.23705 2.90901 5.65901C2.48705 6.08097 2.25 6.65326 2.25 7.25M21.75 7.25V7.493C21.75 7.87715 21.6517 8.25491 21.4644 8.5903C21.2771 8.92569 21.0071 9.20754 20.68 9.409L13.18 14.024C12.8252 14.2425 12.4167 14.3582 12 14.3582C11.5833 14.3582 11.1748 14.2425 10.82 14.024L3.32 9.41C2.99292 9.20854 2.72287 8.92669 2.53557 8.5913C2.34827 8.25591 2.24996 7.87815 2.25 7.494V7.25"
                    stroke="#F2F8FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                user@example.com
              </p>

              <ul className="flex items-center mb-5 mt-5">
                <li>
                  <a href={"#"}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_237_324)">
                        <path
                          d="M25.0451 16.0226C25.0451 11.0421 21.003 7 16.0226 7C11.0421 7 7 11.0421 7 16.0226C7 20.3895 10.1038 24.0256 14.218 24.8647V18.7293H12.4135V16.0226H14.218V13.7669C14.218 12.0256 15.6346 10.609 17.3759 10.609H19.6316V13.3158H17.8271C17.3308 13.3158 16.9248 13.7218 16.9248 14.218V16.0226H19.6316V18.7293H16.9248V25C21.4812 24.5489 25.0451 20.7053 25.0451 16.0226Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_237_324">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 7C9.243 7 7 9.243 7 12V20C7 22.757 9.243 25 12 25H20C22.757 25 25 22.757 25 20V12C25 9.243 22.757 7 20 7H12ZM12 9H20C21.654 9 23 10.346 23 12V20C23 21.654 21.654 23 20 23H12C10.346 23 9 21.654 9 20V12C9 10.346 10.346 9 12 9ZM21 10C20.7348 10 20.4804 10.1054 20.2929 10.2929C20.1054 10.4804 20 10.7348 20 11C20 11.2652 20.1054 11.5196 20.2929 11.7071C20.4804 11.8946 20.7348 12 21 12C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10ZM16 11C13.243 11 11 13.243 11 16C11 18.757 13.243 21 16 21C18.757 21 21 18.757 21 16C21 13.243 18.757 11 16 11ZM16 13C17.654 13 19 14.346 19 16C19 17.654 17.654 19 16 19C14.346 19 13 17.654 13 16C13 14.346 14.346 13 16 13Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.31005 7C6.86616 7 6 7.86798 6 9.02377C6 10.1796 6.86626 11.0442 8.16526 11.0442C9.60916 11.0442 10.4753 10.1796 10.4753 9.02377C10.4753 7.86798 9.60906 7 8.31005 7ZM6.11517 13.2062V25H10.3667V13.2062H6.11517ZM13.8746 13.2062V25H18.1261V18.5536C18.1261 16.6345 19.4953 16.3587 19.9064 16.3587C20.3175 16.3587 21.4168 16.771 21.4168 18.5536V25H25.5302V18.5536C25.5302 14.852 23.8853 13.2062 21.8281 13.2062C19.771 13.2062 18.6737 13.8912 18.1261 14.8516V13.2062H13.8746Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7L13.0957 17.1406L6.37305 25H9.01367L14.2773 18.8301L18.5938 25H25.5039L18.082 14.375L24.373 7H21.7734L16.9043 12.6875L12.9316 7H6ZM9.83984 9H11.8887L21.666 23H19.6348L9.83984 9Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2249 7.06426C10.9544 7.52844 7.51941 10.9634 7.05522 15.1411C6.59104 19.5044 9.09763 23.4036 12.9039 24.889C13.1825 24.9818 13.461 24.7961 13.461 24.4248V22.9394C13.461 22.9394 13.0896 23.0322 12.6254 23.0322C11.3257 23.0322 10.7687 21.9182 10.6759 21.2683C10.583 20.897 10.3974 20.6185 10.1188 20.3399C9.84033 20.2471 9.74749 20.2471 9.74749 20.1543C9.74749 19.9686 10.026 19.9686 10.1188 19.9686C10.6759 19.9686 11.14 20.6185 11.3257 20.897C11.7899 21.6397 12.3469 21.8253 12.6254 21.8253C12.9968 21.8253 13.2753 21.7325 13.461 21.6397C13.5538 20.9898 13.8323 20.3399 14.3893 19.9686C12.2541 19.5044 10.6759 18.2975 10.6759 16.2551C10.6759 15.2339 11.14 14.2127 11.7899 13.47C11.6971 13.2843 11.6042 12.8201 11.6042 12.1703C11.6042 11.7989 11.6042 11.2419 11.8827 10.6849C11.8827 10.6849 13.1825 10.6849 14.4822 11.8918C14.9464 11.7061 15.5962 11.6133 16.2461 11.6133C16.8959 11.6133 17.5458 11.7061 18.1028 11.8918C19.3097 10.6849 20.7023 10.6849 20.7023 10.6849C20.8879 11.2419 20.8879 11.7989 20.8879 12.1703C20.8879 12.913 20.7951 13.2843 20.7023 13.47C21.3521 14.2127 21.8163 15.1411 21.8163 16.2551C21.8163 18.2975 20.2381 19.5044 18.1028 19.9686C18.6598 20.4328 19.0312 21.2683 19.0312 22.1038V24.5176C19.0312 24.7961 19.3097 25.0746 19.681 24.9818C23.116 23.5892 25.5298 20.2471 25.5298 16.348C25.5298 10.7777 20.7951 6.4144 15.2249 7.06426Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <button className="pl-5 pr-5 flex items-center !text-[14px] text-[#2FC88B] border-[#2FC88B] border-[1px] p-1 mt-3 rounded-full">
                Let's Talk
              </button>
            </div>
            <div>
              <h2 className="text-[22px] mb-3">Company</h2>

              <ul>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Outsourcing</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">staffing</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">About</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[22px] mb-3">Expertise</h2>

              <ul>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">MVP</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">E-commerce</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">ChatGPT</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">E-government</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[22px] mb-3">Solutions</h2>

              <ul>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Outsourcing</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">staffing</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">About</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="text-[13px] text-[#DED2FF] pb-2">
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[22px] mb-3">Offices</h2>

              <h2 className="text-[20px] mb-1">USA</h2>
              <p className="text-[13px] text-[#DED2FF] mb-[20px]">
                Ul. Okrzei 1A / 10P, Warsaw
              </p>

              <h2 className="text-[20px] mb-1 mt-3">United Kingdom</h2>
              <p className="text-[13px] text-[#DED2FF] mb-[20px]">
                Astana, Almaty district, st. 101, bld. 49 B
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-[30px]">
            <p>Name ©2024. All rights reserved</p>
            <ul className="flex items-center">
              <li className="text-[13px] text-[#DED2FF] mr-3">
                <a href={"#"}>Privacy Policy</a>
              </li>
              <li className="text-[13px] text-[#DED2FF]">
                <a href={"#"}>Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
