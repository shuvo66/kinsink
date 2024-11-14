import { AboutUs } from "./component/AboutUs";
import { Banner } from "./component/Banner";
import { CertifiedFeature } from "./component/CertifiedFeature";
import { Service } from "./component/Service";
import { OurWork } from "./component/OurWork";
import { WorkProcess } from "./component/WorkProcess";
import { GetInTouch } from "./component/GetInTouch";
import { Team } from "./component/Team";
import { WORK_PROCESS } from "./const";
const Home = () => {
  return (
    <div>
      <Banner />
      <CertifiedFeature />
      <AboutUs />
      <Service />
      <OurWork />
      <WorkProcess
        data={WORK_PROCESS}
        title={"Our"}
        subTitle={"Work Process"}
        isSubtitleVisible={false}
        isMobileAcitve={false}
        isHomeSubtitleVisible={true}
      />
      <GetInTouch />
      <Team />
    </div>
  );
};

export default Home;
