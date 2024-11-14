"use client";
import ArrowIcon from "../../assets/arrowIcon.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useScrollHandler } from "@/app/utils/useScroll";
export const MenuItems = [
  "Home",
  "Company",
  "Expertise",
  "Cases",
  "Hire Developer",
] as string[];

export const Header = () => {
  const { scroll } = useScrollHandler();
  return (
    <div
      className={twMerge(
        "bg-white",
        scroll ? "fixed w-full z-10 transition-all" : "transition-all"
      )}
    >
      <div className="container m-auto flex items-center justify-between h-[70px]">
        <div className="text-[#2584F4] text-[30px]">logo</div>
        <div>
          <ul className="flex items-center justify-between">
            {MenuItems.map((v, i) => (
              <li key={i}>
                <a className="text-[#4E4F52] font-[500] p-[18px] leading-[25px]">
                  {v}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button id="primary_button" className="flex items-center">
          Let's Talk
          <Image
            src={ArrowIcon}
            width={12}
            height={12}
            alt={"arrow"}
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};
