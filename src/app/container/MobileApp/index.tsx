import { GetInTouch } from "../Home/component/GetInTouch";
import { WorkProcess } from "../Home/component/WorkProcess";
import { MOBILE_WORK_PROCESS, INDUSTRY_WORK_PROCESS } from "./const";
import { DevelopmentProcess } from "./component/DevelopmentProcess";
import { Award } from "./component/Award";
import { WhyChoose } from "./component/WhyChose";
import { ClientSays } from "./component/ClientSays";
import { WhoWeAre } from "./component/WhoWeAre";

const MobileApp = () => {
  return (
    <>
      <WorkProcess
        title={"Our Industry Experience in Mobile App Development"}
        subTitle={
          "Sagittis ornare vestibulum et quam neque lorem mauris diam diam. Sed quis enim ante ut nisi."
        }
        isSubtitleVisible={true}
        isHomeSubtitleVisible={false}
        data={MOBILE_WORK_PROCESS}
        isMobileAcitve={false}
      />
      <DevelopmentProcess />
      <Award />
      <WorkProcess
        isMobileAcitve={true}
        title={"Mobile Application Development Services We Offer"}
        subTitle={
          "Sagittis ornare vestibulum et quam neque lorem mauris diam diam. Sed quis enim ante ut nisi."
        }
        isSubtitleVisible={true}
        isHomeSubtitleVisible={false}
        data={INDUSTRY_WORK_PROCESS}
      />
      <GetInTouch />
      <WhyChoose />
      <ClientSays />
      <WhoWeAre />
    </>
  );
};

export default MobileApp;
