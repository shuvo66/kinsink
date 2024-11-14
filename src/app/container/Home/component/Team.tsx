import React from "react";
import Image from "next/image";
import TeamIcon from "../../../../assets/home//team/team.svg";
import GetInTouchIcon from "../../../../assets/getInTouch.svg";

interface Teams {
  name: string;
  title: string;
  image: string;
  description: string;
}
const TeamList: Teams[] = [
  {
    name: "Jack Hammer",
    title: "Founder & CEO",
    image: TeamIcon,
    description:
      "John Doe is a passionate and dedicated entrepreneur with a strong background in technology. He has been working in the tech industry for over 10 years, focusing primarily on startups and digital transformation.",
  },
  {
    name: "Richarlison",
    title: "Frontend developer",
    image: TeamIcon,
    description:
      "Fermentum ac odio arcu viverra. Et eu dis senectus lobortis utelementum euismod",
  },
  {
    name: "Alison Backer",
    title: "Frontend developer",
    image: TeamIcon,
    description:
      "John Doe is a passionate and dedicated entrepreneur with a strong background in technology. He has been working in the tech industry for over 10 years, focusing primarily on startups and digital transformation.",
  },
  {
    name: "Casemiro",
    title: "Backend developer",
    image: TeamIcon,
    description:
      "Fermentum ac odio arcu viverra. Et eu dis senectus lobortis utelementum euismod",
  },
];
export const Team = () => {
  return (
    <div className="pt-[60px] pb-[60px] bg-white">
      <div className="container m-auto text-[#0C1842] text-[30px]">
        <span className="text-[#0C1842] text-[18px] line-clamp-[28px]">
          Our
        </span>

        <h2>Excellent Team</h2>
        <div className="mt-[24px] grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
          {TeamList.map((v) => (
            <div className="group">
              <Image src={v.image} alt={"team"} />
              <h4 className="text-[20px] font-bold text-[#0C1842] mt-2 mb-1">
                {v.name}
              </h4>
              <p className="text-[15px] text-[#4E4F52] font-normal mb-2">
                {v.title}
              </p>
              <p className="hidden transition ease-in-out delay-150 text-[15px] text-justify text-[#4E4F52] group-hover:inline-block">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
